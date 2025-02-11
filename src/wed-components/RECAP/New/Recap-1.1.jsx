import React, { useState, useEffect, useRef } from 'react';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import axios from 'axios';
import { toast } from 'react-toastify';
import { Vortex } from 'react-loader-spinner';
import NewCarousel from './Carousel';
import { NewImageCard } from './ImageCard';

const RecapWrapper = () => {
  const [mediaItems, setMediaItems] = useState([]);
  const [selectedMediaIndex, setSelectedMediaIndex] = useState(null);
  const [loading, setLoading] = useState(false);
  const [progress, setProgress] = useState(0);
  const [isFetchingMedia, setIsFetchingMedia] = useState(false);
  const fileInputRef = useRef(null);
  const sliderRef = useRef(null);
  const touchStartRef = useRef(null);

  const recapImg = 'https://res.cloudinary.com/dzsuia2ia/image/upload/v1733482107/qeoxjv1jmforzrjch0vw.png';

  // Retrieving of uploaded image urls
  useEffect(() => {
    const BACKEND_URL = import.meta.env.VITE_RECAP_BACKEND_URL;
    // Fetch media items from the backend on component mount
    const fetchMediaItems = async () => {
      setIsFetchingMedia(true);
      try {
        const res = await axios.get(`${BACKEND_URL}/api/media-items`);
        setMediaItems(res.data);
      } catch (error) {
        console.error('Error fetching media items: ', error);
      } finally {
        setIsFetchingMedia(false);
      }
    };

    fetchMediaItems();
  }, []);

  const uploadFile = async (file) => {
    const data = new FormData();
    data.append('file', file);
    data.append('upload_preset', 'mandc_default_img');

    try {
      const cloudName = import.meta.env.VITE_CLOUDINARY_CLOUD_NAME // Your Cloudinary Cloud Name
      console.log(cloudName)
      const api = `https://api.cloudinary.com/v1_1/${cloudName}/image/upload`;

      const res = await axios.post(api, data, {
        onUploadProgress: (event) => {
          const percent = Math.round((event.loaded * 100) / event.total);
          setProgress(percent);
        },
      });

      const { secure_url } = res.data;
      console.log(secure_url)
      return secure_url;
    } catch (error) {
      console.error('Cloudinary upload error:', error.res ? error.res.data : error);
      return null;
    }
  };

  const handleFileUpload = async (event) => {
    const BACKEND_URL = import.meta.env.VITE_RECAP_BACKEND_URL;
  
    const files = event.target.files;
    if (!files || files.length === 0) return;
  
    setLoading(true);
    setProgress(0);
    const uploadedMediaItems = [];
  
    try {
      for (let file of files) {
        if (file.type.startsWith('image/')) {
          const imgUrl = await uploadFile(file);
          
          // Skip duplicate media
          if (mediaItems.some(item => item.imgUrl === imgUrl)) {
            toast.warn('Duplicate media detected, skipping...');
            continue; // Move to the next file
          }
      
          if (imgUrl) {
            uploadedMediaItems.push({ type: 'image', imgUrl });
            await axios.post(`${BACKEND_URL}/api/upload-url`, { imgUrl });
            toast.success(`Uploaded: ${file.name}`);
          }
        } else {
          toast.error(`Skipped unsupported file: ${file.name}`);
        }
      }
  
      setMediaItems((prevItems) => [...prevItems, ...uploadedMediaItems]);
    } catch (error) {
      console.error('Error uploading files:', error.response?.data || error.message);
      toast.error('Failed to upload one or more files. Please try again.');
    } finally {
      setLoading(false);
      setProgress(0);
      fileInputRef.current.value = ''; // Reset file input
    }
  };

  const handleNext = () => {
    if (sliderRef.current) {
      sliderRef.current.slickNext();
    }
    setSelectedMediaIndex((prevIndex) => (prevIndex + 1) % mediaItems.length);
  };

  const handlePrev = () => {
    if (sliderRef.current) {
      sliderRef.current.slickPrev();
    }
    setSelectedMediaIndex((prevIndex) => (prevIndex - 1 + mediaItems.length) % mediaItems.length);
  };

  const handleTouchStart = (event) => {
    touchStartRef.current = event.touches[0].clientX;
  };

  const handleTouchMove = (event) => {
    if (!touchStartRef.current) return;

    const touchEndX = event.touches[0].clientX;
    const touchDiff = touchStartRef.current - touchEndX;

    if (touchDiff > 30) {
      handleNext();
      touchStartRef.current = null;
    }

    if (touchDiff < -30) {
      handlePrev();
      touchStartRef.current = null;
    }
  };

  return (
    <div
      className='w-full h-full z-10' 
      style={{ 
        width: '100%', 
        height: '100vh', 
        backgroundImage: `url(${recapImg})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        backgroundColor: '#500850c8',
        opacity: '0.8'
      }}
    >
      <div className="p-6 flex flex-col mx-auto items-center mt-0 bg-white/40 backdrop-blur-lg !z-20 mb-0 h-full w-full" style={{ opacity: '1', height: '100%' }}>
        <div className="flex flex-row-reverse items-center justify-center space-x-6 mb-5 mx-auto">
          <input
            type="file"
            id="file-upload"
            ref={fileInputRef}
            multiple
            accept="image/*"
            className="hidden"
            onChange={handleFileUpload}
          />
          <label
            onClick={() => fileInputRef.current && fileInputRef.current.click()}
            className="cursor-pointer bg-[#e70d8c] text-white rounded px-5 py-3 hover:bg-pink-400 transition-colors duration-200 hidden"
          >
            Upload
          </label>
          <button className='cursor-context-menu bg-[#e70d8c] text-white rounded px-5 py-3 transition-colors duration-200'>
            <span>Images</span>
          </button>
        </div>
        {loading && (
          <div className="w-full max-w-md mt-4 flex flex-col items-center">
            <div className="bg-gray-200 rounded-full h-2.5 mb-2 w-full">
              <div className="bg-pink-300 h-2.5 rounded-full" style={{ width: `${progress}%` }}></div>
            </div>
            <p className="text-center text-sm text-gray-600">{`Uploading... ${progress}%`}</p>
          </div>
        )}
        <div className="relative w-full max-w-7xl h-[80vh] md:h-[500px] md:max-h-none p-4 bg-pink-300 rounded-lg shadow-xl overflow-y-auto hide-scroll-bar">
          {isFetchingMedia ? (
            <div className="flex justify-center items-center h-full" style={{ height: '50vh' }}>
              <Vortex
                visible={true}
                height="100%"
                width="100"
                ariaLabel="vortex-loading"
                wrapperStyle={{}}
                wrapperClass="vortex-wrapper"
                colors={['red', 'green', 'blue', 'yellow', 'orange', 'purple']}
                speed={1} // Adjust the speed property to reduce spinning time
              />
          </div>
          ) 
          : 
          (
            <div className="grid grid-cols-3 sm:grid-cols-4 lg:grid-cols-5 gap-2 mt-1 overflow-x-hidden">
              {mediaItems.length === 0 ? (
                <p className="text-gray-500 text-center w-full">
                  No media items available.
                </p>
              ) : (
                mediaItems.map((item, index) => (
                  <div
                    key={index}
                    className="w-full h-auto cursor-pointer mx-auto overflow-hidden"
                    onClick={() => setSelectedMediaIndex(index)}
                  >
                    <img
                      src={item.imgUrl}
                      alt={`media-${index}`}
                      className="w-full h-auto max-h-16 sm:max-h-32 object-cover rounded-lg bg-gray-400/50"
                    />
                  </div>
                ))
              )}
            </div>
          )}
        </div>
        {/* Display Selected Media */}
        {selectedMediaIndex !== null && (
          <div className='fixed inset-0 z-50 w-full h-full flex items-center justify-center bg-black/70 backdrop-blur-md'>
            <div
              className="relative w-full max-w-7xl h-auto p-4 rounded-lg overflow-hidden my-auto mx-auto flex items-center justify-center"
              onTouchStart={handleTouchStart}
              onTouchMove={handleTouchMove}
            >
              <button
                className="absolute left-4 top-6 sm:top-[5rem] px-3 py-2 text-base bg-gray-50 text-gray-900 rounded-xl shadow-xl border-2 border-gray-600 cursor-pointer z-20"
                onClick={() => setSelectedMediaIndex(null)}
              >
                Close
              </button>
              <button
                className="relative left-[15%] text-3xl sm:text-5xl cursor-pointer text-gray-50 py-3 bg-gray-700 rounded-lg mr-2 sm:mr-0 z-20"
                onClick={handlePrev}
              >
                <FaChevronLeft />
              </button>
              <NewCarousel ref={sliderRef}>
                {mediaItems.map((item, index) => (
                  <NewImageCard
                    key={index}
                    imageUrl={item.imgUrl} // Use imgUrl property from the fetched media items
                    altText="Placeholder image"
                    objectFit="contain" // Pass objectFit prop
                  />
                ))}
              </NewCarousel>
              <button
                className="relative right-[15%] text-3xl sm:text-5xl cursor-pointer text-gray-50 py-3 bg-gray-700 rounded-lg ml-2 sm:mr-0"
                onClick={handleNext}
              >
                <FaChevronRight />
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default RecapWrapper;