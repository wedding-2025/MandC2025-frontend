import React, { useState, useEffect, useRef } from 'react';
import axios from 'axios';
import NewCarousel from './NewCarousel';
import { NewImageCard } from './NewImageCard';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';

function NewPicture() {
  const [mediaItems, setMediaItems] = useState([]);
  const sliderRef = useRef(null);

  // Retrieving of uploaded image urls
  useEffect(() => {
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

  const handleNext = () => {
    if (sliderRef.current) {
      sliderRef.current.slickNext();
    }
  };

  const handlePrev = () => {
    if (sliderRef.current) {
      sliderRef.current.slickPrev();
    }
  };

  return (
    <div
      className="min-h-screen flex flex-col items-center justify-center relative"
    >
      <div className="absolute inset-0 bg-black/50 backdrop-blur-sm z-0"></div>  {/* Ensure the overlay is behind the content */}
      <div className="w-[100%] max-w-none h-full bg-transparent p-4 rounded-lg relative">
        <FaChevronLeft onClick={handlePrev} className='text-4xl absolute top-[50%] left-[5%] z-30 cursor-pointer sm:text-5xl text-gray-50 py-3 bg-gray-700 rounded-lg' />
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
        <FaChevronRight onClick={handleNext} className='text-4xl absolute top-[50%] right-[5%] z-30 cursor-pointer sm:text-5xl text-gray-50 py-3 bg-gray-700 rounded-lg' />
      </div>
    </div>
  )
}

export default NewPicture;