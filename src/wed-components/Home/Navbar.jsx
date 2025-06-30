import React from 'react';
import { NavLink, Link, useNavigate, useLocation } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { FaArrowRight, FaTimes, FaCopy, FaLink } from 'react-icons/fa';
import navLogo from '../../assets/img/navLogo.webp';
import { useUI } from '../../context/UIContext';
import { FaBarsStaggered } from 'react-icons/fa6';
import GiftDrawer from '../../components/GiftDrawer';


function Navbar({ scrollToContact }) {
  // const navLogo = 'https://res.cloudinary.com/dzsuia2ia/image/upload/v1733482107/qgbmvx17ijxjheu8ddq9.png';

  // Navbar state
  const [isOpen, setIsOpen] = useState(false);

  // Hide Navbar for Recap when viewing single image
  const { isNavbarHidden } = useUI();

  // Drawer
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const handleClose = () => {
    setIsDrawerOpen(false);
  }

  
  // The mobile screen Gift button
  const mbGift = () => {
    setIsDrawerOpen(true);
    setIsOpen(false);
  }

  // Navbar scroll behavior
  const [prevScrollPos,  setPrevScrollPos] = useState(0);
  const [visible,  setVisible] = useState(true);

  // Contact use ref location (global)
  const navigate = useNavigate();
  const location = useLocation();

  // Effect for scroll behavior
  useEffect(() => {
    let timeOutId;

    // const  handleScroll = () => {
    //   const currentScrollPos = window.scrollY;
    //   const isScrolledUp = prevScrollPos > currentScrollPos;

    //   setVisible(isScrolledUp || currentScrollPos < 50);
    //   setPrevScrollPos(currentScrollPos);
    // };

    // window.addEventListener('scroll', handleScroll);
    // return () => window.removeEventListener('scroll', handleScroll)



    // Second option
    const  handleScroll = () => {
      const currentScrollPos = window.scrollY;
      const isScrolledUp = prevScrollPos > currentScrollPos;

      clearTimeout(timeOutId);
      timeOutId = setTimeout(() => {
        setVisible(isScrolledUp || currentScrollPos < 50);
      }, 100);

      if (isScrolledUp && isOpen) {
        setIsOpen(false);
      }

      setPrevScrollPos(currentScrollPos)
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll)

  }, [prevScrollPos]);

  // End of scroll behavior

  const toggleMenu = () => {
    setIsOpen(!isOpen)

  };

  const handleNavClick = (e) => {
    if (e.target.tagName === 'A' || e.currentTarget === e.target) {
      setIsOpen(false);
    }
  };

  // function for the contact us location (global)
  const handleContactClick = (e) => {
    e.preventDefault();

    if (location.pathname === '/') {
      // if already on homepage, just scroll
      scrollToContact();
    } else {
      navigate('/', { state: { scrollToContact: true } });
    };

    setIsOpen(false);
  };

  return (
    <div>
      <nav className={`${isNavbarHidden ? 'hidden' : 'top-0 block !fixed !z-40 w-full font-gFont1 font-bold'}`} id='block-container' role='navigation'>
        <section className={`fixed !top-5 z-40 left-8 right-8 rounded-3xl rounded-bl-3xl md:border md:border-black/10 md:rounded-2xl bg-white/80 backdrop-blur-xl md:pl-8 md:transition-all 2xl:w-[1536px] m-auto transition-transform duration-300 ${ visible ? 'translate-y-0 shadow-lg' : '-translate-y-[calc(100%+20px)] shadow-none' }`} style={{ transitionTimingFunction: 'cubic-bezier(0.165, 0.84, 0.44, 1)', transitionDuration: '600ms', transitionProperty: 'transform, box-shadow' }}>
          <div className="w-full mx-auto max-w-7xl h-full hidden gap-5 md:flex md:items-center" style={{ paddingTop: '12px', paddingBottom: '12px' }}>
            {/* LOGO */}
              <div className="w-full h-full flex items-center justify-start cursor-pointer" onClick={() => { window.location.reload() }}>
                <div className="!w-auto object-cover" style={{ transform: 'none', opacity: '1', objectFit: 'none', background: 'transparent', position: 'relative', borderRadius: 'inherit'}}>
                  <Link to="/">
                    <img src={navLogo} alt="logo" className='!w-auto object-cover' style={{ height: '40px', backgroundColor: 'transparent' }} />
                  </Link>
                </div>
                <Link className='mc-spans' to="/">
                  <div className='text-black text-[20px] font-semibold ml-2 font-custom wed-title'>
                    <span>M</span>
                    <span>&</span>
                    <span>C</span>
                    <span className='ml-1'>2025</span>
                  </div>
                </Link>
              </div>
            {/*  NAVIGATION */}
            <div className="w-full h-full flex items-center justify-center leading-[17px]">
              <nav className="w-full h-full flex items-center justify-center gap-8 text-[18px]">
                <button className='nav-btn'><span><NavLink to="/">Home</NavLink></span></button>
                <button className='nav-btn'><span><NavLink to="/details">Details</NavLink></span></button>

                <button className='nav-btn'><span><NavLink to="/rsvp">RSVP</NavLink></span></button>

                {/* <button className='nav-btn'><span><NavLink to="/picture">Pics</NavLink></span></button> Remove Later */}


                <button className='nav-btn' onClick={() => setIsDrawerOpen(true)}>Gift</button>
                <button className='nav-btn text-rose-950 font-semibold'><span><NavLink to="/recap">RECAP</NavLink></span></button>
              </nav>
            </div>
            <div className="w-full h-full flex items-center justify-end overflow-hidden gap-3 mr-3">
              <button onClick={handleContactClick} className="w-fit px-[20px] group text-[18px] whitespace-nowrap font-normal text-black flex gap-2 items-center rounded-xl bg-[#ffb6c1] hover:bg-[#b65b69] hover:transition-all hover:duration-300" style={{ height: '40px' }}>
                <span>Contact us</span>
                <span><FaArrowRight className='right-Arrow'/></span>
              </button>
            </div>
          </div>

          {/*  RESPONSIVE NAVIGATION */}
          <div className="relative z-40 w-full h-full flex items-center md:hidden" style={{ paddingTop: '12px', paddingBottom: '12px' }}>
            <Link to="/" onClick={() => { window.location.reload() }}>
              <div 
                className="!w-auto px-3 object-cover" 
                datatype='image' 
                style={{ 
                  transform: 'none', 
                  opacity: '1', 
                  objectFit: 'none',  
                  background: 'transparent', 
                  position: 'relative', 
                  borderRadius: 'inherit'
                }} onClick={ handleNavClick }>
                <img src={navLogo} alt="logo" className='!w-auto px-2 object-cover' style={{ height:  '40px', backgroundColor: 'transparent' }} />
              </div>
            </Link>
            <Link className='mc-spans' to="/" onClick={() => { window.location.reload() }}>
                  <div className='text-black text-[20px] font-semibold mr-auto ml-auto font-custom' onClick={ handleNavClick }>
                    <span>M</span>
                    <span>&</span>
                    <span>C</span>
                    <span className='ml-1'>2025</span>
                  </div>
            </Link>
            <button onClick={ toggleMenu }>
              {isOpen ? <FaTimes className='absolute right-6 top-5 size-6' style={{ transform: 'none' }} /> : <FaBarsStaggered className='absolute right-6 top-5 size-6' style={{ transform: 'none' }} />}
            </button>
          </div>

          {/* MOBILE VIEW */}
          <div className="">
            <div className='relative z-50 w-full flex flex-col gap-3 rounded-b-3xl shadow-xl' onClick={ handleNavClick }>
              <nav 
                className={`transition-all duration-300 ease-in-out ${isOpen 
                ? "w-full gap-[8px] px-2 flex flex-col rounded-b-3xl text-[18px]" : "h-0 overflow-hidden"}`} 
                style={isOpen 
                  ? { 
                    paddingTop: '20px', 
                    paddingBottom: '20px', 
                    opacity: '1', 
                    transform: 'none' 
                  } 
                : 
                {}}
              >
                <button className="mb-nav" style={{ height: '50px' }}>
                  <span><NavLink to="/">Home</NavLink></span>
                </button>
                <button className="mb-nav" style={{ height: '50px' }}>
                  <span><NavLink to="/details">Details</NavLink></span>
                </button>


                <button className="mb-nav" style={{ height: '50px' }}>
                  <span><NavLink to="/rsvp">RSVP</NavLink></span>
                </button>

                {/* <button className="mb-nav" style={{ height: '50px' }}>
                  <span><NavLink to="/picture">Pics</NavLink></span>
                </button> Remove Later */}

                
                <button className="mb-nav" style={{ height: '50px' }} onClick={mbGift}>
                  <span>Gift</span>
                </button>
                <button className="mb-nav text-rose-950 font-semibold" style={{ height: '50px' }}>
                  <span><NavLink to="/recap">RECAP</NavLink></span>
                </button>
                <div className="flex gap-0 items-center justify-center flex-row">
                  <div className="mb-nav">
                    <button onClick={handleContactClick} className="w-fit px-5 group text-[15px] whitespace-nowrap font-normal text-black flex gap-2 items-center rounded-full bg-[#ffb6c1] hover:bg-[#b65b69] hover:transition-colors hover:duration-300" style={{ height: '40px' }}>
                      <span>Contact us</span>
                      <span><FaArrowRight className='right-Arrow'/></span>
                    </button>
                  </div>
                </div>
              </nav>
            </div>
          </div>
        </section>
      </nav>

      {/* Drawer */}
      <GiftDrawer isOpen={isDrawerOpen} onClose={() => handleClose()} setIsDrawerOpen={setIsDrawerOpen} />
    </div>
  );
}


export default Navbar;
