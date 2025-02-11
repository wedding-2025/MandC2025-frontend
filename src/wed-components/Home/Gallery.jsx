import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { FaArrowRight } from 'react-icons/fa6';
// import Udomimi from '../../assets/images/Udomimi.png';
// import Udomimi3 from '../../assets/images/Udomimi3.jpg';
// import Udomimi4 from '../../assets/images/Udomimi4.png';
// import Udomimi5 from '../../assets/images/Udomimi5.png';
// import Udomimi6 from '../assets/images/Udomimi6.JPG';
// import Udomimi7 from '../../assets/images/Udomimi7.jpg';
// import Udomimi8 from '../../assets/images/Udomimi8.png';
import SlideFromBottom from '../../Animations/SlideFromBottom';
// import SlideFromRight from '../../Animations/SlideFromRight';


const Gallery = () => {
  // checking if selectedCategory is active
  const linkCategory = (isActive) => {
    return isActive ? 'bg-pink-400' : 'bg-red-300/50';
  }


  // storing current selection
  const  [selectedCategory, setSelectedCategory] = useState('Engagement');

  // map of categories to image and text
  const images = {
    Engagement: [
      { 
        src: 'https://res.cloudinary.com/dzsuia2ia/image/upload/v1733482105/lcodkdgnypprtvhm7oep.jpg', 
        title: 'The Proposal', 
        category: 'Engagement' 
      },
      { 
        src:  'https://res.cloudinary.com/dzsuia2ia/image/upload/v1733482106/do9zutipcm3pgl1hir3d.jpg', 
        // src:  'https://res.cloudinary.com/dzsuia2ia/image/upload/v1733482106/tmvfbb2lwuhwbveibrhw.jpg', 
        title: 'Engagement Shoot', 
        category: 'Engagement' 
      }
    ],
    'Pre-Wedding': [
      { 
        // src: 'https://res.cloudinary.com/dzsuia2ia/image/upload/v1733482104/oxaopamjbi7bulpoybhz.jpg', 
        src: 'https://res.cloudinary.com/dzsuia2ia/image/upload/v1733482106/tmvfbb2lwuhwbveibrhw.jpg', 
        title: 'Church Wedding', 
        category: 'Pre-Wedding' 
      },
      { 
        src: 'https://res.cloudinary.com/dzsuia2ia/image/upload/v1733482106/rgquxzmbffrpbkofkjte.jpg', 
        title: 'Cultural Rites', 
        category: 'Pre-Wedding' 
      }
    ],
    'Wedding & Traditional Marriage': [
      { 
        src: 'https://res.cloudinary.com/dzsuia2ia/image/upload/v1733482104/oxaopamjbi7bulpoybhz.jpg', 
        title: 'Preparations', 
        category: 'Wedding & Traditional Marriage' 
      },
      { 
        // src: 'https://res.cloudinary.com/dzsuia2ia/image/upload/v1733482106/tmvfbb2lwuhwbveibrhw.jpg', 
        src: 'https://res.cloudinary.com/dzsuia2ia/image/upload/v1733482105/rxa7qdcirzgl11rfgj0p.jpg', 
        title: 'Bride and Groom', 
        category: 'Wedding & Traditional Marriage' 
      }
    ]
  };

  return (
    <>
      <div style={{ width: '100%', opacity: '1' }}>
        <div className="w-full bg-[#facccf]">
          <div className="w-full max-w-7xl mx-auto py-20 px-4">
          <div>
              <ul className="filter-options flex flex-wrap justify-start gap-2 mb-6">
                <li className="inline-block">
                  <button
                    onClick={() => setSelectedCategory('Engagement')}
                    className={ `${linkCategory(selectedCategory === 'Engagement')} inline-flex items-center justify-center font-medium border py-1.5 px-5 focus:outline-none hover:bg-slate-100 rounded-full text-base sm:text-xl 2xl:text-2xl transition-all ease-in-out duration-0 border-slate-900 shadow-lg shadow-gray-500 text-slate-900 font-gFont1` }
                  >
                    <span>Engagement</span>
                  </button>
                </li>

                <li className="inline-block">
                  <button
                    onClick={() => setSelectedCategory('Pre-Wedding')}
                    className={ `${linkCategory(selectedCategory === 'Pre-Wedding')} inline-flex items-center justify-center font-medium border py-1.5 px-5 focus:outline-none hover:bg-slate-100 rounded-full text-base sm:text-xl 2xl:text-2xl transition-all ease-in-out duration-0 border-slate-900 shadow-lg shadow-gray-500 text-slate-900 font-gFont1` }
                  >
                    <span>Pre-Wedding</span>
                  </button>
                </li>

                <li className="inline-block">
                  <button
                    onClick={() => setSelectedCategory('Wedding & Traditional Marriage')}
                    className={ `${linkCategory(selectedCategory === 'Wedding & Traditional Marriage')} inline-flex items-center justify-center font-medium border py-1.5 px-5 focus:outline-none hover:bg-slate-100 rounded-full text-base sm:text-xl 2xl:text-2xl transition-all ease-in-out duration-0 border-slate-900 shadow-lg shadow-gray-500 text-slate-900 font-gFont1` }
                  >
                    <span>Wedding & Traditional Marriage</span>
                  </button>
                </li>
              </ul>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            {/* Dynamically render images based on the selected category */}
            {images[selectedCategory].map((image, index) => (
              <SlideFromBottom key={index}>
                <div key={index} style={{ opacity: '1', transform: 'none' }}>
                  <div className="relative overflow-hidden rounded-lg group bg-slate-100 shadow-xl shadow-gray-500">
                    <div
                      className="transition-transform object-cover w-full h-auto aspect-[4/4] duration-500 ease-in-out transform group-hover:scale-110 shadow-2xl shadow-gray-500"
                      style={{
                        transform: 'none',
                        opacity: '1',
                        objectFit: 'none',
                        background: 'transparent',
                        position: 'relative',
                        borderRadius: 'inherit'
                      }}>
                      <img
                        src={image.src}
                        alt=""
                        className="transition-transform object-cover w-full h-full aspect-[4/3] duration-500 ease-in-out transform group-hover:scale-110 shadow-2xl shadow-gray-500"
                      />
                    </div>
                    <div className="absolute inset-0 pointer-events-none bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                    <div className="absolute flex pointer-events-none items-center gap-1.5 bottom-0 left-0 p-6 z-10 bg-gradient-to-t from-black w-full"></div>
                    <div className="absolute flex items-center gap-1.5 bottom-0 left-0 p-4 z-20">
                      <p className="text-white text-lg font-semibold">
                        <span>{image.title}</span>
                      </p>
                      <p className="border py-1 px-1 bg-white/20 text-white rounded-lg">
                        <span>{image.category}</span>
                      </p>
                    </div>
                  </div>
                </div>
              </SlideFromBottom>
            ))}
            <div className="relative top-8 sm:top-0 mx-auto sm:ml-[30%] my-auto text-lg sm:text-xl md:text-2xl w-fit px-[20px] py-2 group whitespace-nowrap font-normal text-black flex gap-2 items-center justify-center rounded-full bg-pink-400 hover:bg-pink-500 shadow-xl shadow-gray-700">
              <NavLink to='/recap'>
                <span className='flex flex-row items-center justify-items-center space-x-2 font-serif'>
                  <span>View More</span>
                  <span className=' hover:transition-all hover:duration-300 group-hover:translate-x-1 transition-all'><FaArrowRight /></span>
                </span>
              </NavLink>
            </div>
          </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Gallery;