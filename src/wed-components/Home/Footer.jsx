import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { FaFacebook, FaInstagram, FaTwitter, FaTiktok } from 'react-icons/fa';
import { motion } from 'framer-motion';
import { toast } from 'react-toastify';
import { useUI } from '../../context/UIContext';
// import SlideFromBottom from '../../Animations/SlideFromBottom';
import PopUp from '../../Animations/PopUp';
// import { FaX } from 'react-icons/fa6';
import DevProfile from '../../components/DevProfile';
import GiftDrawer from '../../components/GiftDrawer';

const Footer = () => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const { isFooterHidden } = useUI();
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  // const handlePopup = () => {
  //   setIsPopupOpen(true);
  // }

  const mbGift = () => {
    setIsDrawerOpen(true);
  }

  const handleClose = () => {
    setIsDrawerOpen(false);
  }

  return (
    <>
      <div style={{ width: '100%', opacity: '1', height: '100%' }} className={`${isFooterHidden ? 'hidden' : 'block'}`}>
        <section className="bg-black/90 px-6 py-20 md:px-8 font-gFont1">
          <div style={{ opacity: '1', transform: 'none' }}>
            <div className="mx-auto max-w-7xl flex flex-col gap-16">
              <ul className="w-full flex items-center justify-center gap-8 text-lg">
                <li>
                  <NavLink to='/' className="footer-btn">
                    <span>Home</span>
                  </NavLink>
                </li>
                <li>
                  <NavLink to='/details' className="footer-btn">
                    <span>Details</span>
                  </NavLink>
                </li>
                <li>
                  <NavLink to='/rsvp' className="footer-btn">
                    <span>RSVP</span>
                  </NavLink>
                </li>
                <li className='footer-btn cursor-pointer' onClick={mbGift}>
                  <span>Gift</span>
                </li>
                <li>
                  <NavLink to='/recap' className="footer-btn">
                    <span>RECAP</span>
                  </NavLink>
                </li>
              </ul>
              <div className="flex flex-col items-center gap-8 md:justify-between md:flex-row">
                <ul className="flex items-center gap-8 text-lg">
                  <li>
                    <a className='footer-i' href="https://facebook.com/dubem.umehraphael" target='_blank'><FaFacebook /></a>
                  </li>
                  <li>
                    <a className='footer-i' href="https://x.com/dubem_umeh" target='_blank'><FaTwitter /></a>
                  </li>
                  <li>
                    <a className='footer-i' href="https://instagram.com/i_amraphael.dubem" target='_blank'><FaInstagram /></a>
                  </li>
                  <li>
                    <a className='footer-i' href="https://tiktok.com/@dubem.umeh" target='_blank'><FaTiktok /></a>
                  </li>
                </ul>
                <p className="text-base lg:mt-0 text-white font-thin">
                  <span>
                  <a href="">&copy; M & C 2025. All rights reserved.</a>
                  </span>
                </p>

                <button onClick={() => setIsPopupOpen(true)} className='text-lg text-white'>
                  Built by <span className='border p-2 rounded-2xl bg-white/30 text-gray-50'>Dubem Umeh</span> with ❤
                </button>
              </div>
            </div>
          </div>
        </section>
      </div>

      {/* Drawer */}
      <GiftDrawer isOpen={isDrawerOpen} onClose={() => handleClose()} setIsDrawerOpen={setIsDrawerOpen} />

      {/* Profile PopUp */}
      <PopUp isOpen={isPopupOpen} onClose={setIsPopupOpen}>
        {/* <section id='Dev-Profile' className='flex items-center justify-center'>
          <div className='bg-white rounded-3xl shadow-2xl py-6 w-full max-w-[350px] relative flex flex-col items-center'>
              <span className='cursor-pointer absolute right-5 top-4'>
                <FaX onClick={() => setIsPopupOpen(false)} />
              </span>
            <div className='w-full h-full flex items-center justify-between mt-5'>
              <div className='w-[300px] h-[300px] object-fill'>
                <img src={devPic} alt="" className='w-[300px] h-[300px] object-scale-down' />
              </div>
              <div className='w-full h-full'>
                <span>
                  Dubem Umeh
                </span>
                <div>
                  <ul>
                    <li>Twitter</li>
                    <li>Instagram</li>
                    <li>FaceBook</li>
                    <li>LinkedIn</li>
                    <li>Whatsapp</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section> */}
        <DevProfile setIsPopupOpen={setIsPopupOpen} />
      </PopUp>
    </>
  )
}

export default Footer;