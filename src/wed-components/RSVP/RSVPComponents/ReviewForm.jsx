import React, { useState } from 'react';
import { FaCheckCircle, FaArrowCircleUp } from 'react-icons/fa';
import LoadingDots from '../../../LoadingDots';

const ReviewForm = ({ 
    handleNext, 
    handlePrevious,
    email, 
    guestNames,
    cantMakeIt
}) => {
  const [isContinueLoading, setIsContinueLoading] = useState(false);
  const [isBackLoading, setIsBackLoading] = useState(false);

  const handleOnContinue = async () => {
    setIsContinueLoading(true);
    await new Promise(resolve => setTimeout(resolve, 500));
    setIsContinueLoading(false);
    handleNext();
  }

  const handleOnBack = async () => {
    setIsBackLoading(true);
    await new Promise(resolve => setTimeout(resolve, 500));
    setIsBackLoading(false);
    handlePrevious();
  }

  return (
    <>
      <div className="relative h-full w-full box-border">
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
        
        {/* Review title */}
        <div className="text-center mt-0 relative mx-0">
          <h2 className="text-base sm:text-xl font-semibold mb-2 flex items-center justify-center flex-col">
            <span className='text-3xl'>Review Your Information</span>
            <span className='bg-black h-px w-full'></span>
          </h2>

          {/* Status Section - New! */}
          <div className="mb-4">
            <p className="text-lg font-semibold text-gray-800">
              Status: <span className="text-red-600">{cantMakeIt ? "Can't Make It" : "Attending"}</span>
            </p>
          </div>

          {/* Person Information Section */}
          {cantMakeIt && guestNames.length > 0 && (
            <div className="mb-4">
              <p className="text-base sm:text-lg font-semibold tracking-tighter font-mono text-gray-800">
                Name: {guestNames[0].firstName} {guestNames[0].lastName}
              </p>
            </div>
          )}

          {/* Email Display Section */}
          <div className="mb-4">
            <p className="text-base sm:text-lg font-semibold tracking-tighter font-mono text-gray-800">
              <span>Email: {email}</span>
            </p>
            <p className="text-sm sm:text-base md:text-lg tracking-tighter text-gray-600">
              <span>
                {cantMakeIt 
                  ? "You'll receive a confirmation email of your response."
                  : "You'll be contacted through this email for further updates and details."}
              </span>
            </p>
          </div>

          {/* Guest Information Display Section (Names of Attendees) */}
          {!cantMakeIt && (
            <div className="name-title mb-7">
              {guestNames.length > 0 && (
                <div>
                  <h3 className='text-lg font-medium text-gray-700 mt-2'>
                    <span>Attendees:</span>
                  </h3>
                  {guestNames.map((guest, index) => (
                    <div key={index} className='flex items-center border py-2 px-2 bg-gray-400/50 rounded-lg text-xl tracking-tight flex-grow'>
                      <span className='tracking-tighter'>
                        <span className='text-gray-900/90 mr-2'>Guest {index + 1}:</span>
                        <span className='pr-0'>{guest.firstName} {guest.lastName}</span>
                      </span>
                    </div>
                  ))}
                </div>
              )}
            </div>
          )}

          {/* Continue button */}
          <div className="mt-6 flex justify-center relative">
            <button 
              className="absolute bottom-[-71px] left-[50%] translate-x-[-50%] px-4 py-2 bg-[#ece8e8] hover:bg-[#dcd8d8] transition-colors shadow-xl text-gray-900 rounded-lg border border-gray-900 min-w-[120px] h-[40px]"
              onClick={handleOnContinue}
              disabled={isContinueLoading}
            >
              {isContinueLoading ? (
                <LoadingDots />
              ) : (
                <span className='flex flex-row items-center justify-center gap-2'>
                  <span><FaCheckCircle /></span>
                  <span>Continue</span>
                </span>
              )}
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default ReviewForm;