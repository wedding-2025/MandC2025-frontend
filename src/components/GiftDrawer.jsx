import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { toast } from 'react-toastify';
import { FaCopy, FaLink } from 'react-icons/fa';
import PopUp from '../Animations/PopUp';
import DevProfile from './DevProfile';

const GiftDrawer = ({ isOpen, onClose }) => {
  // const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [isBankOpen, setIsBankOpen] = useState(false);

  // Dev Profile PopUp
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  // The account details
    const accounts = [
      { bank: 'Zenith Bank', accountNumber: '2289132623' },
      { bank: 'Zenith Bank', accountNumber: '2396893309' },
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
    };

  return (
    <div className=''>
      {/* Drawer */}
      <AnimatePresence>
        {isOpen && (
        <motion.div
        className="fixed top-0 left-0 h-full bg-gray-800 text-white w-64 md:w-[30%] shadow-lg z-[250]"
        initial="closed"
        animate={isOpen ? 'open' : 'closed'}
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
          <div className='flex flex-col gap-10'>
            <button
              onClick={onClose} // Close drawer
              className="bg-red-500 hover:bg-red-700 transition-colors ease-in-out delay-75 text-white pt-3 px-4 py-2 rounded mt-20 font-custom"
            >
              Close
            </button>
            <button onClick={() => { setIsPopupOpen(true); onClose() }} className='text-lg text-white'>
              Built by <span className='border p-2 rounded-2xl bg-white/30 text-gray-50 flex items-center flex-col sm:block'>Dubem Umeh</span> with ❤
            </button>
          </div>
        </div>
      </motion.div>
        )}
      </AnimatePresence>

      {/* Profile PopUp */}
      <PopUp isOpen={isPopupOpen} onClose={setIsPopupOpen}>
        <DevProfile setIsPopupOpen={setIsPopupOpen} />
      </PopUp>
    </div>
  )
}

export default GiftDrawer