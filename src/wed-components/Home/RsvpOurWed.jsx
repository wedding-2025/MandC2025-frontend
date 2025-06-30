import React from 'react';
import { FaArrowRight } from 'react-icons/fa6';
import { NavLink } from 'react-router-dom';
import SlideFromLeft from '../../Animations/SlideFromLeft';
import SlideFromRight from '../../Animations/SlideFromRight';

const RsvpOurWed = () => {
  return (
    <>
      <div className="" style={{ width: '100%', opacity: '1' }}>
        <div className="w-full bg-[#fcf2f3]">
          <div className="max-w-7xl mx-auto py-10 px-4">
            <div className="relative my-auto py-20 isolate overflow-hidden bg-[#7a0646] px-6 text-center shadow-2xl rounded-3xl sm:px-16">
              <h2 className="mx-auto max-w-2xl text-3xl font-bold tracking-tight text-white/90 sm:text-4xl font-custom">
                <span>
                RSVP to Our Wedding
                </span>
              </h2>
              <p className="mx-auto mt-6 max-w-xl text-lg md:text-xl font-medium leading-8 text-gray-100/90">
                <span>
                  We would be honored to have you join us on our special day. Please confirm your attendance.
                </span>
              </p>
              <div className="mt-10 flex items-center justify-center gap-x-6">
                <SlideFromLeft>
                  <NavLink to='/rsvp/rsvp-form'>
                    <button className="flex items-center justify-center text-white bg-[#f7568c] font-medium border-0 py-2 xl:py-3 px-6 focus:outline-none hover:bg-[#fa86ac] rounded-lg text-base sm:text-lg 2xl:text-2xl transition-colors duration-500">
                      <span>
                      RSVP Now
                      </span>
                    </button>
                  </NavLink>
                </SlideFromLeft>
                <SlideFromRight>
                  <NavLink to='/details'>
                    <button className="text-base group flex items-center justify-center flex-row gap-1 font-semibold leading-7 text-white">
                      <span>
                      Learn More
                      </span>
                      <span>
                        <div className='group-hover:translate-x-1 transition-all duration-300' style={{ position: 'relative' }}>
                          <FaArrowRight />
                        </div>
                      </span>
                    </button>
                  </NavLink>
                </SlideFromRight>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default RsvpOurWed