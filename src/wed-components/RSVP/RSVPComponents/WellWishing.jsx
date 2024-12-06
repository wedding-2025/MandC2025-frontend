import React, { useState } from 'react';
import { FaCheckCircle, FaArrowCircleUp } from 'react-icons/fa';
import LoadingDots from '../../../LoadingDots';

const WellWishing = ({ 
  WellWishingMessage,
  handleWellWishingMessageChange,
  handlePrevious, 
  handleSubmit }) => {
    
    const [isContinueLoading, setIsContinueLoading] = useState(false);
    const [isBackLoading, setIsBackLoading] = useState(false);
  
    const handleOnContinue = async (event) => { // Accept event here
      event.preventDefault(); // Prevent default form submission
      setIsContinueLoading(true);
      await new Promise(resolve => setTimeout(resolve, 500));
      setIsContinueLoading(false);
      handleSubmit(event); // Pass the event to handleSubmit
    }
  
    const handleOnBack = async () => {
      setIsBackLoading(true);
      await new Promise(resolve => setTimeout(resolve, 500));
      setIsBackLoading(false);
      handlePrevious();
    }
    
    return (
      <>
        <div className="relative h-full">
          <button 
            className="absolute -top-[70px] left-[50%] translate-x-[-50%] px-4 py-2 bg-[#ece8e8] hover:bg-[#dcd8d8] transition-colors shadow-xl text-gray-900 rounded-lg border border-gray-900" 
            onClick={handleOnBack}
            disabled={isBackLoading}
          >
            { isBackLoading ? (
              <LoadingDots />
            ) : (
              <span className='flex flex-row items-center justify-center gap-2'>
                <span><FaArrowCircleUp /></span>
                <span>Back</span>
              </span>
            )}
          </button>
          <div className="space-y-6">
            <p className="text-base sm:text-xl font-medium text-gray-700 tracking-tight">
              <span>
                Before you submit, share a well-wishing message to the new couple 💝
              </span>
            </p>
            
            {/* Well Wishing Message */}
            <div className="">
              <textarea 
                name="wellWishingMessage" 
                id="w-w-message"
                placeholder='Your well-wishing message here...'
                value={WellWishingMessage}
                onChange={handleWellWishingMessageChange}
                className='w-full font-mono p-3 text-base sm:text-lg rounded-lg text-gray-800 columns-10 h-36 border border-black' 
              />
            </div>
            <p className="text-base sm:text-xl font-medium text-gray-700 tracking flex items-center justify-center">
              <span>
                Please check you mail after submission!
              </span>
            </p>

            {/* The Submit Button */}
            <div className="mt-6 flex justify-center relative">
              <button 
                className="absolute bottom-[-71px] left-[50%] translate-x-[-50%] px-4 py-2 bg-[#2fa32b] hover:bg-[#25862a] transition-colors shadow-xl text-gray-900 rounded-lg border border-gray-900 min-w-[120px] h-[40px]"
                onClick={handleOnContinue} // Updated to call handleOnContinue
                disabled={isContinueLoading}
                type='button' // Set to button to avoid default form submission
              >
                {isContinueLoading ? (
                  <LoadingDots />
                ) : (
                  <span className='flex flex-row items-center justify-center gap-2 text-white'>
                    <span><FaCheckCircle /></span>
                    <span>Submit</span>
                  </span>
                )}
              </button>
            </div>
          </div>
        </div>
      </>
    )
}

export default WellWishing;
