import React, { useState, useEffect, useRef } from 'react';
import { FaChevronLeft, FaChevronRight, FaFolder } from 'react-icons/fa';
import axios from 'axios';
import { toast } from 'react-toastify';
import recapImg from '../../assets/images/recapImg2.png';

const ARecap = () => {
  const [mediaItems, setMediaItems] = useState([]);
  const [selectedMediaIndex, setSelectedMediaIndex] = useState(null);
  const [expandedFolder, setExpandedFolder] = useState(false);
  const [loading, setLoading] = useState(false);
  const [progress, setProgress] = useState(0);
  const fileInputRef = useRef(null);
  const touchStartRef = useRef(null);

  // Retrieving of uploaded image urls
  useEffect(() => {
    // const BACKEND_URL = 'http://localhost:4000';
    const BACKEND_URL = import.meta.env.VITE_RECAP_BACKEND_URL;
    // Fetch media items from the backend on component mount
    const fetchMediaItems = async () => {
      try {
        const res = await axios.get(`${BACKEND_URL}/api/media-items`);
        setMediaItems(res.data);
      } catch (error) {
        console.error('Error fetching media items: ', error);
      }
    };

    fetchMediaItems();
  }, []);

  const uploadFile = async (file) => {
    const data = new FormData();
    data.append('file', file);
    data.append('upload_preset', 'mandc_default_img');

    try {
      const cloudName = VITE_CLOUDINARY_CLOUD_NAME=dzsuia2ia; // Your Cloudinary Cloud Name
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
    // const BACKEND_URL = 'http://localhost:4000';
    const BACKEND_URL = import.meta.env.VITE_RECAP_BACKEND_URL;

    const files = event.target.files;
    if (!files) return;

    setLoading(true);
    setProgress(0);
    const uploadedMediaItems = [];

    try {
      const imgFile = Array.from(files).find((file) => file.type.startsWith('image/'));

      if (imgFile) {
        const imgUrl = await uploadFile(imgFile);
        if (imgUrl) {
          uploadedMediaItems.push({ type: 'image', imgUrl });
          await axios.post(`${BACKEND_URL}/api/upload-url`, { imgUrl });
          toast.success('Image uploaded successfully!');
        }
      }

      setMediaItems((prevItems) => [...prevItems, ...uploadedMediaItems]);
    } catch (error) {
      // console.error('Error uploading files', error);
      console.error('Error uploading files', error.response?.data || error.message);
      toast.error('Failed to upload image. Please try again.');
    } finally {
      setLoading(false);
      setProgress(0);
      fileInputRef.current.value = '';
      // toast('Image uploaded successfully')
    }

    // if (fileInputRef.current) {
    //   fileInputRef.current.value = '';
    // }
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
      <div className="bg-pink-50 min-h-screen p-6 flex flex-col items-center mx-auto mt-24 bg-white/0 backdrop-blur-3xl !z-20" style={{ opacity: '1' }}>
        <div className="flex flex-row-reverse items-center justify-center space-x-6 mb-4">
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
          <div className="relative w-full h-auto p-4 bg-red-300 rounded-lg shadow-xl overflow-y-auto">
            <button
              className="absolute left-4 top-4 px-3 py-2 text-base bg-gray-50 text-pink-500 rounded shadow-lg"
              onClick={() => setExpandedFolder(false)}
            >
              Collapse
            </button>
            <div className="flex flex-wrap mb-4 mt-14">
              {mediaItems.length === 0 ? (
                <p className="text-gray-500 text-center w-full">
                  No media items available.
                </p>
              ) : (
                mediaItems.map((item, index) => (
                  <div
                    key={index}
                    className="w-24 h-24 m-1 cursor-pointer"
                    onClick={() => handleMediaClick(index)}
                  >
                    <img
                      src={item.imgUrl}
                      alt={`media-${index}`}
                      className="w-full h-full object-cover rounded-lg shadow-lg"
                    />
                  </div>
                ))
              )}
            </div>
          </div>
        )}
        {/* Display Selected Media */}
        {selectedMediaIndex !== null && (
          <div
            className="relative w-full h-auto -mt-52 p-4 bg-red-300 rounded-lg shadow-xl overflow-hidden"
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
          >
            <button
              className="absolute left-4 top-4 sm:top-10 px-3 py-2 text-base bg-gray-50 text-pink-500 rounded-lg shadow-md"
              onClick={() => setSelectedMediaIndex(null)}
            >
              Close
            </button>
            <div className="mt-14 flex items-center justify-center">
              <button
                className="absolute left-4 sm:left-10 text-3xl sm:text-5xl text-pink-700"
                onClick={handlePrev}
              >
                <FaChevronLeft />
              </button>
                <img
                  src={mediaItems[selectedMediaIndex].imgUrl}
                  alt={'Selected Media'}
                  className="max-w-[80%] max-h-[70%] object-cover rounded-lg"
                />
              <button
                className="absolute right-4 sm:right-10 text-3xl sm:text-5xl text-pink-700"
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

export default ARecap;