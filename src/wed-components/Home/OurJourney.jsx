import React from 'react';
import Udomimi4 from '../../assets/img/Udomimi4.webp';
import { FaCircle } from 'react-icons/fa6';

const OurJourney = () => {
  // const Udomimi4 = 'https://res.cloudinary.com/dzsuia2ia/image/upload/w_1000,ar_1:1,c_fill,g_auto/v1733482104/oxaopamjbi7bulpoybhz.jpg';

  return (
    <>
      <div style={{ width: '100%', opacity: '1' }}>
        <section className="relative isolate overflow-hidden bg-[#f5e7e9] px-6 py-24 sm:py-28 lg:px-8 shadow-inner">
          {/* Background with radial gradient */}
          <div className="absolute inset-0 -z-10 bg-[radial-gradient(45rem_50rem_at_top,theme(colors.pink.200),white)] opacity-1"></div>

          {/* Skewed background element */}
          <div className="absolute inset-y-0 right-[55%] -z-10 mr-16 w-[200%] origin-bottom-left skew-x-[-30deg] bg-[#f5e7e9] shadow-xl shadow-pink-500 ring-1 ring-sky-50 sm:mr-28 lg:mr-0 xl:origin-center"></div>

          {/* Main content */}
          <div className="mt-0 mx-auto max-w-2xl lg:max-w-4xl">
            <figure>
              <blockquote className="text-center text-xl font-semibold leading-9 text-gray-900 sm:text-2xl sm:leading-10 font-custom">
                <span>
                  We learn to love not by finding a perfect person, but by loving an imperfect person perfectly. 
                  May God bless our union and make it his own pride.
                </span>
              </blockquote>
              
              <figcaption className="mt-10">
                {/* Image with adjustments */}
                <div className="mx-auto h-20 w-20 rounded-full bg-slate-100 object-cover aspect-[1/1] transition-all hover:scale-100" style={{ position: 'relative' }}>
                  <img src={ Udomimi4 } alt="Charles & Maryjane" className="h-full w-full rounded-full bg-slate-110 object-cover aspect-[1/1] transition-all hover:scale-110" />
                </div>

                {/* Names and description with flex adjustments */}
                <div className="mt-4 flex items-center justify-center space-x-4 text-base">
                  <span className='font-semibold text-gray-900'>
                  Charles & Maryjane
                  </span>
                  
                  {/* Icon with size adjustment */}
                  <FaCircle className="text-[4px] text-[#000]" />
                  
                  <span className='text-gray-600'>
                  The Happy Couple
                  </span>
                </div>
              </figcaption>
            </figure>
          </div>
        </section>
      </div>
    </>
  )
}

export default OurJourney;
