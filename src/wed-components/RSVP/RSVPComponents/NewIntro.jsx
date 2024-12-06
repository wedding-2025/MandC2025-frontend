import React, { useState, useEffect } from 'react';
import { FaCheckCircle } from 'react-icons/fa';
import LoadingDots from '../../../LoadingDots';
import { NavLink, useNavigate } from 'react-router-dom';
// import { FaArrowCircleUp } from 'react-icons/fa';

const NewIntro = ({ IntroNext }) => {
  const [isLoading, setIsLoading] = useState(false);
  const [isHomeLoading, setIsHomeLoading] = useState(false)
  const navigate = useNavigate();

  // handle the continue button
  const handleTheOnContinue = async () => {
    setIsLoading(true);
    await new Promise(resolve => setTimeout(resolve, 500));
    setIsLoading(false);
    IntroNext();
  };

  const goHome = async () => {
    setIsHomeLoading(true);
    await new Promise(res => setTimeout(res, 1000));
    setIsHomeLoading(false)
    navigate('/');
  };
  

  // handle Enter key press for continue button
  const handleKeyPres = (e) => {
    if (e.key === 'Enter') {
      handleTheOnContinue();
    }
  };

  useEffect(() => {
    // add event listener to capture keypress
    window.addEventListener('keydown', handleKeyPres);

    // remove event listener when component unmounts
    return () => {
      window.removeEventListener('keydown', handleKeyPres)
    };

  },[]);

  return (
    <>
      <div className="text-center relative -mt-8 pt-0">
        <button
          className="absolute -top-[40px] left-[50%] translate-x-[-50%] px-4 py-2 bg-[#ece8e8] hover:bg-[#dcd8d8] transition-colors shadow-xl text-gray-900 rounded-lg border border-gray-900"
          disabled={isHomeLoading}
          onClick={goHome}
          to='/'
          type='button'
        >
          {isHomeLoading ? (
            <LoadingDots />
          ) : (
            <span className="flex flex-row items-center justify-center gap-2">
              <span>
                Go Home
              </span>
            </span>
          )}
        </button>
        <div className='w-full mx-auto relative my-auto isolate overflow-hidden text-center'>
          <h2 className="text-3xl font-semibold mb-6 tracking-tight mt-4">
            <span>
              We're Tying The Knot and You're invited!
            </span>
          </h2>
          <p className="mb-4 mx-auto mt-8 text-lg font-medium leading-8">
            <span>
              Please press enter on your keyboard or click the button below to begin your RSVP.
            </span>
          </p>
        </div>
        <div className="absolute -bottom-[71px] left-[50%] translate-x-[-50%]">
          <button className="bg-[#ece8e8] hover:bg-[#dcd8d8] transition-colors shadow-xl mt-20 px-4 py-2 text-gray-900 rounded-lg border border-gray-900" 
            onClick={ handleTheOnContinue }
            disabled={ isLoading }
          >
            { isLoading ? (
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
    </>
  )
}

export default NewIntro;