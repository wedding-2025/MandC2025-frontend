import React from 'react';
import { NavLink } from 'react-router-dom';
import { useState } from 'react';
import { FaArrowRight, FaBars, FaTimes } from 'react-icons/fa';
import navLogo from '../assets/images/navLogo.png';
import { FaBarsStaggered } from 'react-icons/fa6';
// import styled from 'styled-components';



function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
    
  const toggleMenu = (value) => {
    value  ? setIsOpen(true) : setIsOpen(false);

  };

  return (
    <div>
      <div className="!top-0 !fixed !z-40" id='block-container' role='navigation'>
        <section className="fixed top-5 z-40 left-8 right-8 rounded-3xl rounded-bl-3xl md:border md:border-black/10 md:rounded-full bg-white/80 backdrop-blur-xl md:pl-8 md:transition-all 2xl:w-[1536px] m-auto" style={{ transitionTimingFunction: 'cubic-bezier(0.165, 0.84, 0.44, 1)', transitionDuration: '600ms' }}>
          <div className="w-full mx-auto max-w-7xl h-full hidden gap-5 md:flex md:items-center" style={{ paddingTop: '12px', paddingBottom: '12px' }}>
            {/* LOGO */}
              <div className="w-full h-full flex items-center justify-start cursor-pointer wed-title">
                <div className="!w-auto object-cover" style={{ transform: 'none', opacity: '1', objectFit: 'none', background: 'transparent', position: 'relative', borderRadius: 'inherit'}}>
                  <NavLink to="/">
                    <img src={navLogo} alt="logo" className='!w-auto object-cover' style={{ height: '40px', backgroundColor: 'transparent' }} />
                  </NavLink>
                </div>
                <NavLink className='mc-spans' to="/">
                  <div className='text-black text-[20px] font-semibold ml-2'>
                    <span>M</span>
                    <span>&</span>
                    <span>C</span>
                    <span className='ml-1'>2025</span>
                  </div>
                </NavLink>
              </div>
            {/*  NAVIGATION */}
            <div className="w-full h-full flex items-center justify-center text-sm leading-[17px]">
              <nav className="w-full h-full flex items-center justify-center gap-8 text-[15px]">
                <button className='nav-btn'><span><NavLink to="/">Home</NavLink></span></button>
                <button className='nav-btn'><span><NavLink to="/details">Details</NavLink></span></button>
                <button className='nav-btn'><span><NavLink to="/rsvp">RSVP</NavLink></span></button>
                <button className='nav-btn text-rose-950 font-semibold'><span><NavLink to="/recap">RECAP</NavLink></span></button>
              </nav>
            </div>
            <div className="w-full h-full flex items-center justify-end overflow-hidden gap-3 mr-3">
              <NavLink to="/join-us">
                <button className="w-fit px-5 group text-[15px] whitespace-nowrap font-normal text-black flex gap-2 items-center rounded-full hover:bg-black/15 hover:transition-all hover:duration-300" style={{ height: '40px' }}>
                  <span>Join us</span>
                  <span><FaArrowRight className='right-Arrow' /></span>
                </button>
              </NavLink>
              <NavLink to="/contact-us">
                <button className="w-fit px-[20px] group text-[15px] whitespace-nowrap font-normal text-black flex gap-2 items-center rounded-full bg-[#ffb6c1] hover:bg-[#b65b69] hover:transition-all hover:duration-300" style={{ height: '40px' }}>
                  <span>Contact us</span>
                  <span><FaArrowRight className='right-Arrow'/></span>
                </button>
              </NavLink>
            </div>
          </div>

          {/*  RESPONSIVE NAVIGATION */}
          <div className="relative z-40 w-full h-full flex items-center md:hidden" style={{ paddingTop: '12px', paddingBottom: '12px' }}>
            <NavLink to="/">
              <div className="!w-auto px-3 object-cover" datatype='image' style={{ transform: 'none', opacity: '1', objectFit: 'none',  background: 'transparent', position: 'relative', borderRadius: 'inherit'}}>
                <img src={navLogo} alt="logo" className='!w-auto px-2 object-cover' style={{ height:  '40px', backgroundColor: 'transparent' }} />
              </div>
            </NavLink>
            <NavLink className='mc-spans' to="/">
                  <div className='text-black text-[20px] font-semibold mr-auto ml-auto'>
                    <span>M</span>
                    <span>&</span>
                    <span>C</span>
                    <span className='ml-1'>2025</span>
                  </div>
            </NavLink>
            <button onClick={ toggleMenu }>
              {isOpen ? <FaTimes className='absolute right-6 top-5 size-6' style={{ transform: 'none' }} /> : <FaBarsStaggered className='absolute right-6 top-5 size-6' style={{ transform: 'none' }} />}
            </button>
          </div>

          {/* MOBILE VIEW */}
          <div className="">
            <div className='relative z-50 w-full flex flex-col gap-3 rounded-b-3xl shadow-xl'>
              <nav className={`transition-all duration-300 ease-in-out ${isOpen ? "w-full gap-[8px] px-2 flex flex-col rounded-b-3xl text-[15px]" : "h-0 overflow-hidden"}`} style={isOpen ? { paddingTop: '20px', paddingBottom: '20px', opacity: '1', transform: 'none' } : {}}>
                <button className="mb-nav" style={{ height: '72px' }}>
                  <span><NavLink to="/">Home</NavLink></span>
                </button>
                <button className="mb-nav" style={{ height: '72px' }}>
                  <span><NavLink to="/details">Details</NavLink></span>
                </button>
                <button className="mb-nav" style={{ height: '72px' }}>
                  <span><NavLink to="/rsvp">RSVP</NavLink></span>
                </button>
                <button className="mb-nav text-rose-950 font-semibold" style={{ height: '72px' }}>
                  <span><NavLink to="/recap">RECAP</NavLink></span>
                </button>
                <div className="mb-nav">
                  <NavLink to="join-us" className="w-fit px-5 group text-[15px] whitespace-nowrap font-normal text-black flex gap-2 items-center rounded-full hover:bg-black/15 hover:transition-all hover:duration-300" style={{ height: '40px' }}>
                    <span>Join us</span>
                    <span><FaArrowRight className='right-Arrow' /></span>
                  </NavLink>
                </div>
                <div className="mb-nav">
                  <NavLink to="contact-us" className="w-fit px-[20px] group text-[15px] whitespace-nowrap font-normal text-black flex gap-2 items-center rounded-full bg-[#ffb6c1] hover:bg-[#b65b69] hover:transition-all hover:duration-300" style={{ height: '40px' }}>
                    <span>Contact us</span>
                    <span><FaArrowRight className='right-Arrow'/></span>
                  </NavLink>
                </div>
              </nav>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}


export default Navbar;