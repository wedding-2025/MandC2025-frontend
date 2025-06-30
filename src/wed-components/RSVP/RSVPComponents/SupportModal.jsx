import React, { useState } from 'react';
import { FaGift, FaTimes, FaCopy, FaLink } from 'react-icons/fa';
import { motion, AnimatePresence } from 'framer-motion';
import 'react-toastify/dist/ReactToastify.css';
import GiftDrawer from '../../../components/GiftDrawer';

const SupportModal = ({ isOpen, handleClose }) => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  // const [isBankOpen, setIsBankOpen] = useState(false);

  // The account details
  // const accounts = [
  //   { bank: 'Zenith Bank', accountNumber: '2289132623' },
  //   // { bank: 'FirstBank', accountNumber: '2396893309' },
  //   // { bank: 'Access Bank', accountNumber: '2396893309' },
  //   // { bank: 'MoniePoint', accountNumber: '2396893309' },
  // ];

  // const otherMethods = {
  //   PayPal: 'https://paypal.me/dubemumeh',
  //   USDT: '0x06d9869e0fc43bfd19ed484df0d22146fa483426',
  //   BTC: '14N3rgP1r6xb9GSv2zhRpqRKx5jsU1R8js',
  //   ETH: '0x06d9869e0fc43bfd19ed484df0d22146fa483426',
  // };

  // const [paypalLink, setPaypalLink] = useState(
  //   'https://paypal.me/dubemumeh'
  // );

  // // Function to copy text to clipboard
  // const copyToClipboard = (text) => {
  //   navigator.clipboard.writeText(text);
  //   toast(`Copied: ${text} to clipboard`);
  // };

  // // Variants for Framer Motion Drawer
  // const drawerVariants = {
  //   open: {
  //     x: 0,
  //     transition: { type: 'spring', stiffness: 300, damping: 30 },
  //   },
  //   closed: {
  //     x: '-100%',
  //     transition: { type: 'spring', stiffness: 300, damping: 30 },
  //   },
  // };

  const handleDrawerClose = () => {
    setIsDrawerOpen(false);
  }

  return (
    <>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="fixed inset-0 bg-black/70 flex items-center justify-center !z-[200]"
            onClick={handleClose}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            {/* Modal Content */}
            <motion.div
              className="bg-[#bebea8e8] rounded-lg p-9 w-11/12 h-auto max-w-2xl shadow-2xl"
              onClick={(e) => e.stopPropagation()}
              initial={{ y: -100, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: 100, opacity: 0 }}
              transition={{ type: 'spring', stiffness: 300, damping: 30 }}
            >
              {/* Close Button */}
              <div className="flex justify-end relative -top-5 left-5">
                <button
                  className="text-gray-600 hover:text-gray-800 border border-black w-10 h-10 rounded-full flex text-center justify-center relative"
                  onClick={() => { handleClose(); setIsDrawerOpen(true); }}
                >
                  <span className="text-2xl absolute top-[50%] translate-y-[-50%]">
                    <FaTimes />
                  </span>
                </button>
              </div>

              {/* Heading */}
              <h2 className="text-2xl font-bold text-center mb-10 -mt-8 to-gray-800 tracking-tighter leading-9 font-custom">
                <span>Thank You for your RSVP</span>
              </h2>

              {/* Message */}
              <p className="text-xl font-gFont1 text-center text-black tracking-normal">
                <span>
                  We're so grateful to celebrate this special day with you! If
                  you'd like to send a gift or contribution, we truly appreciate
                  your love and support. Click below to find out how you can
                  contribute, or contact us.
                </span>
              </p>

              {/* Call-to-Action Button */}
              <div className="flex justify-center items-center mt-10 relative">
                <span>
                  <button
                    className="bg-[#64003c] text-gray-200 px-6 py-2 rounded-md hover:bg-[#6e204f] transition-colors delay-100 flex items-center justify-center gap-2 font-custom2"
                    onClick={() => { setIsDrawerOpen(true); handleClose() }} // Open drawer
                  >
                    <FaGift />
                    <span className='mt-1'>Send a Gift</span>
                  </button>
                </span>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Drawer */}
      <GiftDrawer isOpen={isDrawerOpen} onClose={() => handleDrawerClose()} setIsDrawerOpen={setIsDrawerOpen} />
    </>
  );
};

export default SupportModal;
