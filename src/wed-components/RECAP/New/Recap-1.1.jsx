import React, { useState, useEffect, useRef } from 'react';
import { FaChevronLeft, FaChevronRight, FaAngleDown } from 'react-icons/fa';
import axios from 'axios';
import { toast } from 'react-toastify';
// import { Vortex } from 'react-loader-spinner';
import NewCarousel from './Carousel';
import { NewImageCard } from './ImageCard';
import imageJson from '../../../image.json'

const RecapWrapper = () => {
  const [mediaItems, setMediaItems] = useState([]);
  const [selectedMediaIndex, setSelectedMediaIndex] = useState(null);
  const [loading, setLoading] = useState(false);
  const [progress, setProgress] = useState(0);
  const [isFetchingMedia, setIsFetchingMedia] = useState(false);
  const [fetchProgress, setFetchProgress] = useState(0);
  const fileInputRef = useRef(null);
  const sliderRef = useRef(null);
  const touchStartRef = useRef(null);

  // For Drop Down in Upload
  const [isOpen, setIsOpen] = useState(false);
  const [selectValue, setSelectValue] = useState("Upload");

  const updateValue = (value, string) => {
    setSelectValue(value);
    setIsOpen(false);

    // Trigger the previous upload
    if (fileInputRef.current) {
      fileInputRef.current.click();
    }
  };

  // End of Drop Down in Upload


  // For Image Category (Church and Traditional)
  const [selectedCategory, setSelectedCategory] = useState("Traditional");

  // End of Image Category

  const recapImg = 'https://res.cloudinary.com/dzsuia2ia/image/upload/v1733482107/qeoxjv1jmforzrjch0vw.png';

  // Declared fetchMediaItems() to be a global function to make accessible

  const BACKEND_URL = import.meta.env.VITE_RECAP_BACKEND_URL;
  // const BACKEND_URL = 'http://localhost:4000';
  const cache = {}; // Initialize an in-memory cache
  // Fetch media items from the backend on component mount
  const fetchMediaItems = async (category = "") => {
    setIsFetchingMedia(true);
    setFetchProgress(0);

    const cacheKey = `media-items-${category || 'all'}`;
    
    // Check if data is in cache
    if (cache[cacheKey]) {
      setMediaItems(cache[cacheKey]);
      setIsFetchingMedia(false);
      return;
    }

    // Access the imageData array from imageJson
    const filteredData = imageJson.imageData.filter(item => !category || item.category === category);
    setMediaItems(filteredData);
    cache[cacheKey] = filteredData; // Store the filtered data in cache

    setIsFetchingMedia(false);
  };

  // Retrieving of uploaded image urls
  useEffect(() => {
    fetchMediaItems(selectedCategory);
  }, [selectedCategory]);

  const uploadFile = async (file) => {
    const data = new FormData();
    data.append('file', file);
    data.append('upload_preset', 'mandc_default_img'); // Ensure this upload preset is correctly set up in Cloudinary

    try {
      const cloudName = import.meta.env.VITE_CLOUDINARY_CLOUD_NAME; // Ensure this is correctly set in your environment variables
      console.log(cloudName);
      const api = `https://api.cloudinary.com/v1_1/${cloudName}/image/upload`;

      const res = await axios.post(api, data, {
        onUploadProgress: (event) => {
          const percent = Math.round((event.loaded * 100) / event.total);
          setProgress(percent);
        },
      });

      const { secure_url } = res.data;
      console.log(secure_url);
      return secure_url;
    } catch (error) {
      console.error('Cloudinary upload error:', error.response ? error.response.data : error);
      return null;
    }
  };

  const handleFileUpload = async (event) => {
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
            await axios.post(`${BACKEND_URL}/api/upload-url`, { imgUrl, category: selectValue });
            try {
              console.log('Updating image.json with:', { imgUrl, category: selectValue });
              await axios.post(`${BACKEND_URL}/api/update-image-json`, { imgUrl, category: selectValue }); // Update image.json
              toast.success(`Uploaded: ${file.name}`);
            } catch (error) {
              console.error('Error updating image.json:', error);
              toast.error('Failed to update image.json');
            }
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

  // Optimized Images from Cloudinary
  const optimizedImage = (url) => {
    return url.replace("/upload/", "/upload/f_webp,q_auto,w_auto/");
  };  


  // Category button
  const selectCat = (isActive) => {
    return isActive ? 'bg-[#e70d8c] text-gray-50 hover:text-gray-800' : 'bg-[#f1ecec]';
  };

  return (
    <div
      className='w-full h-full z-10' 
      style={{ 
        width: '100%', 
        height: '100vh', 
        backgroundImage: `url(${optimizedImage(recapImg)})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        backgroundColor: '#500850c8',
        opacity: '0.8'
      }}
    >
      <div className="p-6 flex flex-col mx-auto items-center mt-0 bg-white/40 backdrop-blur-lg !z-20 mb-0 h-full w-full" style={{ opacity: '1', height: '100%' }}>
        <div className="hidden flex-row-reverse items-center justify-center space-x-6 mb-5 mx-auto">{/* Remove hidden to add flex (vise-versa) */}
          <input
            type="file"
            id="file-upload"
            ref={fileInputRef}
            multiple
            accept="image/*"
            className="hidden"
            onChange={handleFileUpload}
          />
          {/* <label
            onClick={() => fileInputRef.current && fileInputRef.current.click()}
            className="cursor-pointer bg-[#e70d8c] text-white rounded px-5 py-3 hover:bg-pink-400 transition-colors duration-200 hidden"
          >
            Upload
          </label> */}


          <div className="Select py-2 bg-[#e70d8c] text-white rounded-lg">
            <div 
              className='child flex items-center justify-between'
              onClick={() => setIsOpen(!isOpen)}>
                { selectValue }
                <span>
                  <FaAngleDown className={ isOpen ? 'rotate-180 transition-all delay-75' : 'rotate-0' } />
                </span>
              </div>
              {isOpen && (
                <div>
                  <ul className="flex flex-col divide-y border-t">
                    <li className='child' onClick={() => { updateValue('Church') }}>Church</li>
                    <li className='child' onClick={() => { updateValue('Traditional') }}>Traditional</li>
                  </ul>
                </div>
              )}
          </div>

          <button className='cursor-help bg-[#e70d8c] text-white rounded-lg px-5 py-3 transition-colors duration-200 border-slate-300'>
            <span>Images</span>
          </button>
        </div>
        {loading && (
          <div className="w-full max-w-md mt-2 flex flex-col items-center">
            <div className="bg-gray-200 rounded-full h-2.5 mb-2 w-full">
              <div className="bg-pink-300 h-2.5 rounded-full" style={{ width: `${progress}%` }}></div>
            </div>
            <p className="text-center text-sm text-gray-100">{`Uploading... ${progress}%`}</p>
          </div>
        )}
        <div className="relative w-full max-w-7xl h-[80vh] md:h-[500px] md:max-h-none px-4 pt-5 bg-pink-300 rounded-lg shadow-xl overflow-y-auto hide-scroll-bar ">
          <div className='flex flex-row items-center justify-center gap-20 p-0 pb-4'>
            <button 
              className={`${selectCat(selectedCategory === 'Church')} inline-flex items-center justify-center font-medium border py-1.5 px-5 focus:outline-none hover:bg-slate-300 rounded-lg text-base sm:text-xl 2xl:text-2xl transition-all ease-in-out duration-0 border-slate-900 shadow-md shadow-gray-500 font-gFont1`}
              onClick={() => {
                setSelectedCategory("Church");
              }}
            >
              Church
            </button>
            <button
              className={`${selectCat(selectedCategory === 'Traditional')} inline-flex items-center justify-center font-medium border py-1.5 px-5 focus:outline-none hover:bg-slate-300 rounded-lg text-base sm:text-xl 2xl:text-2xl transition-all ease-in-out duration-0 border-slate-900 shadow-md shadow-gray-500 font-gFont1`}
              onClick={() => {
                setSelectedCategory("Traditional");
              }}
            > Traditional
            </button>
          </div>
          {isFetchingMedia ? (
            <div className="flex flex-col justify-center items-center h-full" style={{ height: '50vh' }}>
              <div className="w-full max-w-md mt-2 flex flex-col items-center">
                <div className="bg-gray-200 rounded-full h-2.5 mb-2 w-full">
                  <div className="bg-pink-300 h-2.5 rounded-full" style={{ width: `${fetchProgress}%` }}></div>
                </div>
                <p className="text-center text-sm text-gray-600">{`Fetching... ${fetchProgress}%`}</p>
              </div>
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
                      src={optimizedImage(item.imgUrl)}
                      alt={`media-${index}`}
                      className="w-full h-16 sm:h-32 object-contain rounded-lg bg-gray-400/50"
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
              <NewCarousel ref={sliderRef} initialSlide={selectedMediaIndex}>
                {mediaItems.map((item, index) => (
                  <NewImageCard
                    key={index}
                    imageUrl={optimizedImage(item.imgUrl)} // Use Optimized imgUrl property from the fetched media items
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