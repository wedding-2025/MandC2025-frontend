import React from 'react';
import { NavLink, useNavigate, useLocation } from 'react-router-dom';
import SomeSvg from './SomeSvg';
import { FaEnvelope } from 'react-icons/fa';
import RsvpImg from '../../assets/img/RsvpImg.webp';
import SlideFromLeft from '../../Animations/SlideFromLeft';
import SlideFromRight from '../../Animations/SlideFromRight';

const RsvpNow = ({ scrollToContact }) => {
  // const RsvpImg = 'https://res.cloudinary.com/dzsuia2ia/image/upload/v1733482103/lqlzx6wajpgarq369aa1.jpg';

  const navigate = useNavigate();
  const location = useLocation();

  // function for the contact us location (global)
  const handleContactClick = (e) => {
    e.preventDefault();

    if (location.pathname === '/') {
      // if already on homepage, just scroll
      scrollToContact();
    } else {
      navigate('/', { state: { scrollToContact: true } });
    };
  };

  return (
    <>
      <div style={{ width: '100%', opacity: '1' }}>
        <div className="bg-[#d3c9c9]">
          <div className="mx-auto max-w-7xl py-16 px-4 sm:px-6 sm:py-20 lg:px-8">
            <div className="relative border-black/10 isolate overflow-hidden bg-[#7a0646] px-6 pt-16 shadow-2xl rounded-2xl sm:rounded-3xl sm:px-16 md:pt-24 lg:flex lg:gap-x-20 lg:px-24 lg:pt-0">
              <SomeSvg />
              <div className="mx-auto max-w-md text-center lg:mx-0 lg:flex-auto lg:py-32 lg:text-left">
                <h2 className="text-3xl font-bold tracking-tight text-gray-100/80 sm:text-4xl font-custom">
                  <span>RSVP Now</span>
                </h2>
                <p className="mt-6 text-lg leading-8 text-gray-200/80">
                  <span>
                    Let us know if you will be joining us for our special day. We can't wait to celebrate with you!
                  </span>
                </p>
                <div className="mt-10 flex items-center justify-center gap-x-6 lg:justify-start">
                  <SlideFromLeft>
                    <NavLink to='/rsvp/rsvp-form' className="inline-flex items-center justify-center bg-[#d3d3d3] text-slate-800 font-medium border-0 py-2 xl:py-3 px-6 focus:outline-none hover:bg-[#aca7a7] rounded-lg text-sm sm:text-base 2xl:text-lg transition-colors duration-500">
                      <span>RSVP</span>
                    </NavLink>
                  </SlideFromLeft>
                  <SlideFromRight>
                    <button onClick={handleContactClick} className="group flex items-center justify-center gap-1 text-sm sm:text-base 2xl:text-lg font-semibold leading-6 text-[#d3d3d3]">
                      <span>Contact Us</span>
                      <span className="group-hover:translate-x-1 transition-all duration-300" style={{ position: 'relative', }}>
                        <FaEnvelope />
                      </span>
                    </button>
                </SlideFromRight>
                </div>
              </div>
              <div className="relative mt-16 h-80 lg:mt-8">
                <div className="absolute left-0 top-0 w-[57rem] max-w-none rounded-2xl bg-slate-100 object-cover aspect-[16/9]" style={{ transform: 'none', opacity: '1', objectFit: 'none', background: 'transparent' }}>
                  <img src={ RsvpImg } loading='lazy' alt="Decorated image" className="absolute left-0 top-0 w-[57rem] h-auto max-w-none rounded-2xl bg-slate-100 object-cover aspect-[16/9]" style={{ backgroundColor: 'transparent' }} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default RsvpNow