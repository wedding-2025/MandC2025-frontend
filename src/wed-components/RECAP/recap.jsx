import React, { useState, useEffect, useRef } from 'react';
import { FaChevronLeft, FaChevronRight, FaFolder } from 'react-icons/fa';
import axios from 'axios';
import { toast } from 'react-toastify';
// import { HairBall } from 'react-loader-spinner/experimental';
import { Vortex } from 'react-loader-spinner';
import recapImg from '../../assets/images/recapImg2.png';

const NewRecap = () => {
  const [mediaItems, setMediaItems] = useState([]);
  const [selectedMediaIndex, setSelectedMediaIndex] = useState(null);
  const [expandedFolder, setExpandedFolder] = useState(false);
  const [loading, setLoading] = useState(false);
  const [progress, setProgress] = useState(0);
  const [isFetchingMedia, setIsFetchingMedia] = useState(false);
  const fileInputRef = useRef(null);
  const touchStartRef = useRef(null);

  // Retrieving of uploaded image urls
  useEffect(() => {
    const BACKEND_URL = 'https://server-recap-server.onrender.com';
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
    const BACKEND_URL = 'https://server-recap-server.onrender.com';
  
    const files = event.target.files;
    if (!files || files.length === 0) return;
  
    setLoading(true);
    setProgress(0);
    const uploadedMediaItems = [];
  
    try {
      // for (let file of files) {
      //   if (file.type.startsWith('image/')) {
      //     const imgUrl = await uploadFile(file);
      //     if (imgUrl) {
      //       uploadedMediaItems.push({ type: 'image', imgUrl });
      //       await axios.post(`${BACKEND_URL}/api/upload-url`, { imgUrl });
      //       toast.success(`Uploaded: ${file.name}`);
      //     }
      //   } else {
      //     toast.error(`Skipped unsupported file: ${file.name}`);
      //   }
      // }

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
  

  const handleMediaClick = (index) => {
    setSelectedMediaIndex(index);
  };

  const handleNext = () => {
    setSelectedMediaIndex((prevIndex) => (prevIndex + 1) % mediaItems.length);
  };

  const handlePrev = () => {
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
        height: '100%', 
        backgroundImage: `url(${recapImg})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        backgroundColor: '#500850c8',
        opacity: '0.8'
      }}
    >
      <div className="p-6 flex flex-col mx-auto items-center mt-0 bg-white/40 backdrop-blur-lg !z-20 mb-0" style={{ opacity: '1' }}>
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
            className="cursor-pointer bg-[#e70d8c] text-white rounded px-5 py-3 hover:bg-pink-400 transition-colors duration-200"
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
        {!expandedFolder ? (
          <div className="flex flex-wrap mb-4 relative">
            <div
              className="w-auto h-auto m-1 cursor-pointer flex space-x-2 justify-center items-center"
              onClick={() => setExpandedFolder(true)}
            >
              <FaFolder className="text-[#e70d8c]/80 w-80 h-80" />
              <span className="text-xl text-gray-50 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">Click to Open</span>
            </div>
          </div>
        ) : (
          <div className="relative w-full max-w-7xl h-96 p-4 bg-pink-300 rounded-lg shadow-xl overflow-y-auto hide-scroll-bar">
            <button
              className="relative top-0 px-3 py-2 text-base bg-gray-50 text-gray-900 rounded-xl shadow-xl border-2 border-gray-500"
              onClick={() => setExpandedFolder(false)}
            >
              Collapse
            </button>
            {isFetchingMedia ? (
              <div className="flex justify-center items-center h-full">
                <Vortex
                  visible={true}
                  height="100"
                  width="100"
                  ariaLabel="vortex-loading"
                  wrapperStyle={{}}
                  wrapperClass="vortex-wrapper"
                  colors={['red', 'green', 'blue', 'yellow', 'orange', 'purple']}
                />
            </div>
            ) 
            : 
            (
              <div className="grid grid-cols-3 sm:grid-cols-4 lg:grid-cols-5 gap-2 mt-6 overflow-x-hidden">
              {mediaItems.length === 0 ? (
                <p className="text-gray-500 text-center w-full">
                  No media items available.
                </p>
              ) : (
                mediaItems.map((item, index) => (
                  <div
                    key={index}
                    className="w-full h-auto cursor-pointer mx-auto overflow-hidden"
                    onClick={() => handleMediaClick(index)}
                  >
                    <img
                      src={item.imgUrl}
                      alt={`media-${index}`}
                      className="w-full h-full object-contain rounded-lg bg-gray-400/50"
                    />
                  </div>
                ))
              )}
              </div>
            )}
          </div>
        )}
        {/* Display Selected Media inset-y-20 inset-x-0 backdrop-blur-lg h-full w-full bg-white/0 rounded-t-xl sm:relative sm:inset-0 sm:-inset-y-96 sm:inset-x-0 sm:-mb-[390px] mx-auto overflow-x-hidden left-[50%] transform translate-x-[-50%]*/}
        {selectedMediaIndex !== null && (
          <div className='fixed inset-0 z-50 w-full h-full left-[50%] translate-x-[-50%]'>
            <div
              className="relative w-full max-w-7xl h-auto p-4 bg-white/0 backdrop-blur-lg rounded-lg overflow-hidden my-auto mx-auto overflow-x-hidden"
              onTouchStart={handleTouchStart}
              onTouchMove={handleTouchMove}
            >
              <button
                className="absolute left-4 top-4 sm:top-10 px-3 py-2 text-base bg-gray-50 text-gray-900 rounded-xl shadow-xl border-2 border-gray-600"
                onClick={() => setSelectedMediaIndex(null)}
              >
                Close
              </button>
              <div className="mt-14 flex items-center justify-between">
                <button
                  className="relative text-3xl sm:text-5xl #ad337a text-gray-50 p-3 bg-gray-500 rounded-xl"
                  onClick={handlePrev}
                >
                  <FaChevronLeft />
                </button>
                  <img
                    src={mediaItems[selectedMediaIndex].imgUrl}
                    alt={'Selected Media'}
                    className=" w-full h-full max-h-[50vh] sm:max-h-[60vh] object-contain rounded-lg overflow-x-hidden"
                  />
                <button
                  className="relative text-3xl sm:text-5xl text-gray-50 p-3 bg-gray-500 rounded-xl"
                  onClick={handleNext}
                >
                  <FaChevronRight />
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default NewRecap;