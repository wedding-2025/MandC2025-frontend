import React, { useState, useEffect, useRef } from 'react';
import { FaChevronLeft, FaChevronRight, FaAngleDown } from 'react-icons/fa';
import axios from 'axios';
import { toast } from 'react-toastify';
import { InfinitySpin } from 'react-loader-spinner';
import NewCarousel from './Carousel';
import { NewImageCard } from './ImageCard';
import imageJson from '../../../image.json'

const RecapWrapper = () => {
  const [mediaItems, setMediaItems] = useState([]);
  const [selectedMediaIndex, setSelectedMediaIndex] = useState(null);
  const [loading, setLoading] = useState(false);
  const [progress, setProgress] = useState(0);
  const [isFetchingMedia, setIsFetchingMedia] = useState(false);
  const fileInputRef = useRef(null);
  const sliderRef = useRef(null);
  const touchStartRef = useRef(null);
  const [showAnimation, setShowAnimation] = useState(false);
  const [imagesLoaded, setImagesLoaded] = useState(0);
  const [totalImages, setTotalImages] = useState(0);
  const [categoryCounts, setCategoryCounts] = useState({
    Church: 0,
    Traditional: 0
  });
  const [placeholderContainers, setPlaceholderContainers] = useState([]);
  
  // Debounce timeout ref
  const debounceTimeoutRef = useRef(null);
  // Track if category switch is in progress
  const [isSwitchingCategory, setIsSwitchingCategory] = useState(false);

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

  // For Image Category (Church and Traditional)
  const [selectedCategory, setSelectedCategory] = useState("Traditional");

  const recapImg = 'https://res.cloudinary.com/dzsuia2ia/image/upload/v1733482107/qeoxjv1jmforzrjch0vw.png';

  const BACKEND_URL = import.meta.env.VITE_RECAP_BACKEND_URL;
  const CACHE_VERSION = 'v1'; // Update this when your image structure changes
  
  // Count images in each category and create placeholder containers
  const processImageData = (data) => {
    // Count images by category
    const counts = data.reduce((acc, item) => {
      acc[item.category] = (acc[item.category] || 0) + 1;
      return acc;
    }, {});
    
    // Store counts in state
    setCategoryCounts(prevCounts => ({
      ...prevCounts,
      ...counts
    }));
    
    // Save category counts to localStorage for faster subsequent loads
    try {
      localStorage.setItem('category-counts', JSON.stringify(counts));
    } catch (e) {
      console.error('Error saving category counts to localStorage:', e);
    }
    
    return counts;
  };
  
  // Create placeholders based on category counts
  const createPlaceholders = (count) => {
    const placeholders = Array(count).fill(null).map((_, index) => ({
      id: `placeholder-${index}`,
      isPlaceholder: true
    }));
    setPlaceholderContainers(placeholders);
    return placeholders;
  };
  
  // This function preloads all images for faster display
  const preloadImages = (imageUrls) => {
    setTotalImages(imageUrls.length);
    setImagesLoaded(0);
    
    return Promise.all(imageUrls.map(item => {
      return new Promise((resolve, reject) => {
        const img = new Image();
        img.onload = () => {
          setImagesLoaded(prev => prev + 1);
          resolve();
        };
        img.onerror = reject;
        img.src = optimizedImage(item.imgUrl);
      });
    }));
  };
  
  // Check localStorage for category counts on component mount
  useEffect(() => {
    try {
      const storedCounts = localStorage.getItem('category-counts');
      if (storedCounts) {
        const counts = JSON.parse(storedCounts);
        setCategoryCounts(prevCounts => ({
          ...prevCounts,
          ...counts
        }));
      }
    } catch (e) {
      console.error('Error loading category counts from localStorage:', e);
    }
  }, []);
  
  // Function to fetch media items from localStorage or image.json
  const fetchMediaItems = async (category = "") => {
    setShowAnimation(true);
    setIsFetchingMedia(true);

    const cacheKey = `media-items-${category || 'all'}-${CACHE_VERSION}`;
    const storageTimestampKey = `media-items-timestamp-${CACHE_VERSION}`;
    const CACHE_EXPIRY = 48 * 60 * 60 * 1000; // 48 hours in milliseconds
    
    try {
      // Before fetching, create placeholders based on either:
      // 1. Current category count if available, or
      // 2. A default number
      const categoryCount = categoryCounts[category] || 0;
      if (categoryCount > 0) {
        createPlaceholders(categoryCount);
      }
      
      // Check localStorage first
      const cachedData = localStorage.getItem(cacheKey);
      const cachedTimestamp = localStorage.getItem(storageTimestampKey);
      const now = new Date().getTime();
      
      // If we have valid cached data that's not expired
      if (cachedData && cachedTimestamp && (now - parseInt(cachedTimestamp) < CACHE_EXPIRY)) {
        const parsedData = JSON.parse(cachedData);
        
        // Create placeholders with accurate count
        createPlaceholders(parsedData.length);
        
        // Process image data to update category counts
        processImageData(parsedData);
        
        // Set the media items from cache
        setMediaItems(parsedData);
        
        // Preload the images in the background for smoother experience
        preloadImages(parsedData).catch(err => console.error('Error preloading images:', err));
        
        setIsFetchingMedia(false);
        setShowAnimation(false);
        return;
      }
      
      // If no cache or expired, filter data from imageJson
      const filteredData = imageJson.imageData.filter(item => !category || item.category === category);
      
      // Create placeholders with accurate count
      createPlaceholders(filteredData.length);
      
      // Process image data to update category counts
      processImageData(imageJson.imageData);
      
      // Store in localStorage for future use
      localStorage.setItem(cacheKey, JSON.stringify(filteredData));
      localStorage.setItem(storageTimestampKey, new Date().getTime().toString());
      
      // Preload images before setting the media items
      await preloadImages(filteredData);
      
      setMediaItems(filteredData);
      setIsFetchingMedia(false);
      setShowAnimation(false);
      
    } catch (error) {
      console.error('Error fetching or caching media items:', error);
      // Fallback to the original data fetching
      const filteredData = imageJson.imageData.filter(item => !category || item.category === category);
      processImageData(imageJson.imageData);
      createPlaceholders(filteredData.length);
      setMediaItems(filteredData);
      setIsFetchingMedia(false);
      setShowAnimation(false);
    } finally {
      // Ensure we reset the switching state
      setIsSwitchingCategory(false);
    }
  };

  // Modified version: Load media items with debouncing when category changes
  useEffect(() => {
    // Only trigger fetch if switching is in progress
    if (isSwitchingCategory) {
      // Clear any existing timeout
      if (debounceTimeoutRef.current) {
        clearTimeout(debounceTimeoutRef.current);
      }
      
      // Set a timeout before fetching to debounce rapid category changes
      debounceTimeoutRef.current = setTimeout(() => {
        fetchMediaItems(selectedCategory);
      }, 100); // 100ms debounce time
    }
    
    // Clean up timeout on unmount or when dependency changes again
    return () => {
      if (debounceTimeoutRef.current) {
        clearTimeout(debounceTimeoutRef.current);
      }
    };
  }, [selectedCategory, isSwitchingCategory]);

  // Initial load
  useEffect(() => {
    // Trigger initial fetch
    setIsSwitchingCategory(true);
  }, []);

  // Preload the background image
  useEffect(() => {
    const bgImg = new Image();
    bgImg.src = optimizedImage(recapImg);
  }, []);

  const uploadFile = async (file) => {
    const data = new FormData();
    data.append('file', file);
    data.append('upload_preset', 'mandc_default_img');

    try {
      const cloudName = import.meta.env.VITE_CLOUDINARY_CLOUD_NAME;
      const api = `https://api.cloudinary.com/v1_1/${cloudName}/image/upload`;

      const res = await axios.post(api, data, {
        onUploadProgress: (event) => {
          const percent = Math.round((event.loaded * 100) / event.total);
          setProgress(percent);
        },
      });

      const { secure_url } = res.data;
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
            continue;
          }
      
          if (imgUrl) {
            uploadedMediaItems.push({ type: 'image', imgUrl, category: selectValue });
            await axios.post(`${BACKEND_URL}/api/upload-url`, { imgUrl, category: selectValue });
            try {
              await axios.post(`${BACKEND_URL}/api/update-image-json`, { imgUrl, category: selectValue });
              
              // Update category counts
              setCategoryCounts(prev => ({
                ...prev,
                [selectValue]: (prev[selectValue] || 0) + 1
              }));
              
              // Clear localStorage cache after uploading new images
              for (const key of Object.keys(localStorage)) {
                if (key.startsWith('media-items-')) {
                  localStorage.removeItem(key);
                }
              }
              
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
      fileInputRef.current.value = '';
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
    return url
      .replace("/upload/", "/upload/f_auto,q_auto,w_auto,fl_strip_profile/")
      .replace(/\.(png|jpe?g|gif)/i, '.avif' || '.webp');
  }; 

  // Enhanced category switching function with debouncing
  const handleCategorySwitch = (category) => {
    // Don't do anything if it's the same category or we're already in the process of switching
    if (category === selectedCategory || isSwitchingCategory) {
      return;
    }
    
    // Set the category but also trigger the loading state
    setSelectedCategory(category);
    setIsSwitchingCategory(true);
    setIsFetchingMedia(true);
    setShowAnimation(true);
    
    // Create placeholders based on known category count
    const categoryCount = categoryCounts[category] || 0;
    if (categoryCount > 0) {
      createPlaceholders(categoryCount);
    }
  };

  // Category button style
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
        <div className="hidden flex-row-reverse items-center justify-center space-x-6 mb-5 mx-auto"> {/* Change from hidden to flex, vise-versa */}
          <input
            type="file"
            id="file-upload"
            ref={fileInputRef}
            multiple
            accept="image/*"
            className="hidden"
            onChange={handleFileUpload}
          />

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

        <div className='flex flex-row items-center justify-center gap-20 p-0 pb-4'>
          <button 
            className={`${selectCat(selectedCategory === 'Church')} inline-flex items-center justify-center font-medium border py-1.5 px-5 focus:outline-none rounded-lg text-base sm:text-xl 2xl:text-2xl transition-all ease-in-out duration-300 border-slate-900 shadow-md shadow-gray-500 font-gFont1`}
            onClick={() => handleCategorySwitch('Church')}
            disabled={isSwitchingCategory}
          >
            Church {/* ({categoryCounts.Church || 0}) */}
          </button>
          <button
            className={`${selectCat(selectedCategory === 'Traditional')} inline-flex items-center justify-center font-medium border py-1.5 px-5 focus:outline-none rounded-lg text-base sm:text-xl 2xl:text-2xl transition-all ease-in-out duration-300 border-slate-900 shadow-md shadow-gray-500 font-gFont1`}
            onClick={() => handleCategorySwitch('Traditional')}
            disabled={isSwitchingCategory}
          > Traditional {/* ({categoryCounts.Traditional || 0}) */}
          </button>
        </div>

        <div className="relative w-full max-w-7xl h-[80vh] md:h-full md:max-h-none px-4 pt-5 bg-pink-300 rounded-lg shadow-xl overflow-y-auto hide-scroll-bar">
          {isFetchingMedia ? (
            <div>
              {/* Show placeholder containers while images are loading */}
              <div className="grid grid-cols-3 sm:grid-cols-4 lg:grid-cols-5 gap-2 mt-1 overflow-x-hidden">
                {placeholderContainers.map((item, index) => (
                  <div key={`placeholder-${index}`} className='border border-gray-700 rounded-lg bg-gray-400/50 animate-pulse'>
                    <div className="w-full h-24 sm:h-32 rounded-lg"></div>
                  </div>
                ))}
              </div>
              
              <div className="flex flex-col justify-center items-center mt-4">
                <InfinitySpin
                  visible={true}
                  width="200"
                  color='#920859'
                  ariaLabel="infinity-spin-loading"
                />
                {totalImages > 0 && (
                  <p className="mt-4 text-gray-700">Loading images: {imagesLoaded} of {totalImages}</p>
                )}
              </div>
            </div>
          ) 
          : 
          (
            <div className="grid grid-cols-3 sm:grid-cols-4 lg:grid-cols-5 gap-2 my-2 overflow-x-hidden">
              {mediaItems.length === 0 ? (
                <p className="text-gray-500 text-center w-full col-span-full">
                  No media items available in this category.
                </p>
              ) : (
                mediaItems.map((item, index) => (
                  <div key={index} className='border border-gray-700 rounded-lg bg-gray-400/50'>
                    <div
                      className="w-full h-auto cursor-pointer mx-auto overflow-hidden"
                      onClick={() => setSelectedMediaIndex(index)}
                    >
                      <img
                        src={optimizedImage(item.imgUrl)}
                        alt={`media-${index}`}
                        className="w-full h-24 sm:h-max object-contain rounded-lg border border-b-gray-900"
                        loading='lazy'
                      />
                    </div>
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
              className="relative w-full h-full p-4 rounded-lg overflow-hidden my-auto mx-auto flex items-center justify-center"
              onTouchStart={handleTouchStart}
              onTouchMove={handleTouchMove}
            >
              <button
                className="absolute left-4 top-20 sm:top-[5rem] px-3 py-2 text-base bg-gray-50 text-gray-900 rounded-xl shadow-xl border-2 border-gray-600 cursor-pointer z-20"
                onClick={() => setSelectedMediaIndex(null)}
              >
                Close
              </button>
              <button
                className="relative left-[77px] text-3xl sm:text-5xl cursor-pointer text-gray-50 py-3 bg-gray-700 rounded-lg mr-2 sm:mr-0 z-20"
                onClick={handlePrev}
              >
                <FaChevronLeft />
              </button>
              <NewCarousel ref={sliderRef} initialSlide={selectedMediaIndex}>
                {mediaItems.map((item, index) => (
                  <NewImageCard
                    key={index}
                    className="w-full full"
                    imageUrl={optimizedImage(item.imgUrl)}
                    altText="Placeholder image"
                    objectFit="contain"
                  />
                ))}
              </NewCarousel>
              <button
                className="relative right-[77px] text-3xl sm:text-5xl cursor-pointer text-gray-50 py-3 bg-gray-700 rounded-lg ml-2 sm:mr-0"
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