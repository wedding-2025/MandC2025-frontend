import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { FaFacebook, FaInstagram, FaTwitter, FaTiktok, FaCopy, FaLink} from 'react-icons/fa';
import { motion } from 'framer-motion';
import { toast } from 'react-toastify';
import SlideFromBottom from '../../Animations/SlideFromBottom';


const Footer = () => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [isBankOpen, setIsBankOpen] = useState(false);

  // The account details
  const accounts = [
    // { bank: 'Zenith Bank', accountNumber: '2396893309' },
    { bank: 'Zenith Bank', accountNumber: '2289132623' },
    // { bank: 'Access Bank', accountNumber: '2396893309' },
    // { bank: 'MoniePoint', accountNumber: '2396893309' },
  ];

  const otherMethods = {
    PayPal: 'https://paypal.me/dubemumeh',
    USDT: '0x06d9869e0fc43bfd19ed484df0d22146fa483426',
    BTC: '14N3rgP1r6xb9GSv2zhRpqRKx5jsU1R8js',
    ETH: '0x06d9869e0fc43bfd19ed484df0d22146fa483426',
  };

  const [paypalLink, setPaypalLink] = useState(
    'https://paypal.me/dubemumeh'
  );

  // Function to copy text to clipboard
  const copyToClipboard = (text) => {
    navigator.clipboard.writeText(text);
    toast(`Copied: ${text} to clipboard`);
  };

  // The mobile screen Gift button
  const mbGift = () => {
    setIsDrawerOpen(true);
  }

  // Variants for Framer Motion Drawer
  const drawerVariants = {
    open: {
      x: 0,
      transition: { type: 'spring', stiffness: 300, damping: 30 },
    },
    closed: {
      x: '-100%',
      transition: { type: 'spring', stiffness: 300, damping: 30 },
    },
  }; // End of drawer


  return (
    <>
      <div style={{ width: '100%', opacity: '1', height: '100%' }}>
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
                  <a href="">&copy; LuckTwins Inc 2024. All rights reserved.</a>
                  </span>
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>

      {/* Drawer */}
      <motion.div
        className="fixed top-0 left-0 h-full bg-gray-800 text-white w-64 shadow-lg z-[250]"
        initial="closed"
        animate={isDrawerOpen ? 'open' : 'closed'}
        variants={drawerVariants}
      >
        {/* Drawer content */}
        <div className="p-4">
          <h2 className="text-lg font-bold font-custom">Send a Gift 😊</h2>
          <div className="text-gray-400 mt-4">
            <p className="mb-8 text-gray-200 font-gFont1 text-lg">Please choose you desirable method:</p>
            <ul className="space-y-5">
              {/* Bank Transfer Accordion */}
              <li>
                <div
                  className='flex justify-between items-center cursor-pointer'
                  onClick={() => setIsBankOpen(!isBankOpen)}
                >
                  <span className='text-gray-400'>Bank Transfer</span>
                  <span className='text-gray-200 text-[25px]'>{isBankOpen ? '-' : '+'}</span>
                </div>
                {isBankOpen && (
                  <ul className='mt-3 ml-4 space-y-4'>
                    {accounts.map(({ bank, accountNumber }) => (
                      <li
                        key={bank}
                        className='flex justify-between items-center'
                      >
                        <span>
                          {bank}: <span className='font-medium'>{accountNumber}</span>
                        </span>
                        <FaCopy 
                          className='text-gray-200 cursor-pointer hover:text-gray-500'
                          onClick={() => copyToClipboard(accountNumber)}
                        />
                      </li>
                    ))}
                  </ul>
                )}
              </li>
              {/* Other Transfer Methods */}
              {Object.entries(otherMethods).map(([method, address]) => (
                <li
                  key={method}
                  className='flex justify-between items-center'
                >
                  <span className='text-gray-400'>{method}</span>
                  {method === 'PayPal' ? (
                    <div className="flex items-center gap-3">
                      <input
                        type="number"
                        placeholder="Amount"
                        className="border border-gray-300 rounded-md p-2 text-black w-24"
                        onChange={(e) =>
                          setPaypalLink(
                            `https://www.paypal.com/donate?business=umehraphael36@gmail.com&amount=${e.target.value}`
                          )
                        }
                      />
                      <a
                        href={paypalLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-200 cursor-pointer hover:text-gray-500"
                      >
                        <FaLink />
                      </a>
                    </div>
                    ) : (
                    <FaCopy 
                    className='text-gray-50 cursor-pointer hover:text-gray-500'
                    onClick={() => copyToClipboard(address)}
                  />
                  )}
                </li>
              ))}
            </ul>
          </div>
          <button
            onClick={() => setIsDrawerOpen(false)} // Close drawer
            className="bg-red-500 hover:bg-red-700 transition-colors ease-in-out delay-75 text-white pt-3 px-4 py-2 rounded mt-20 font-custom"
          >
            Close
          </button>
        </div>
      </motion.div>
    </>
  )
}

export default Footer;