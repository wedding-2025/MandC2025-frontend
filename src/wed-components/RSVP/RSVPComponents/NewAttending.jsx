import React, { useState } from 'react';
import { FaCheckCircle, FaArrowCircleUp } from 'react-icons/fa';
import LoadingDots from '../../../LoadingDots';

const NewAttending = ({
  cantMakeIt,
  guests,
  email,
  errors,
  guestNames,
  handleCantMakeItChange,
  handleDecrement,
  handleIncrement,
  setEmail,
  handleGuestNameChange,
  handleNext,
  handlePrevious,
}) => {
  const [isBackLoading, setIsBackLoading] = useState(false);
  const [isContinueLoading, setIsContinueLoading] = useState(false);

  const handleOnBack = async () => {
    setIsBackLoading(true);
    await new Promise(resolve => setTimeout(resolve, 500));
    setIsBackLoading(false);
    handlePrevious();
  };


  // handle the continue button
  const handleOnContinue = async () => {
    setIsContinueLoading(true);
    await new Promise(resolve => setTimeout(resolve, 500));
    setIsContinueLoading(false);
    handleNext();
  }

  return (
    <div className='w-52 sm:w-full h-full box-border'>
      <div className="relative h-full flex text-center items-center justify-center">
        {/* Back Button */}
        <button
          className="absolute -top-[70px] left-[50%] translate-x-[-50%] px-4 py-2 bg-[#ece8e8] hover:bg-[#dcd8d8] transition-colors shadow-xl text-gray-900 rounded-lg border border-gray-900"
          onClick={handleOnBack}
          disabled={isBackLoading}
          type='button'
        >
          {isBackLoading ? (
            <LoadingDots />
          ) : (
            <span className="flex flex-row items-center justify-center gap-2">
              <span>
                <FaArrowCircleUp />
              </span>
              <span>Back</span>
            </span>
          )}
        </button>

        <div className="text-center mt-0 isolate">
          <h2 className="text-base sm:text-xl font-semibold mb-4 flex items-center justify-center flex-col">
            <span className="text-3xl">RSVP</span>
            <span className="bg-black h-px w-full"></span>
          </h2>

          {/* Conditional Rendering Based on cantMakeIt */}
          {cantMakeIt ? (
            <div className="mt-4 flex flex-col space-y-4">
              <div className="flex justify-between">
                <input
                  type="text"
                  placeholder="First Name"
                  value={guestNames[0]?.firstName || ''}
                  onChange={(e) => handleGuestNameChange(0, 'firstName', e.target.value)}
                  className={`w-1/2 rounded-lg border ${
                    errors.guestNames ? 'border-red-500' : 'border-gray-400'
                  } p-2 italic text-black text-lg`}
                />
                <input
                  type="text"
                  placeholder="Last Name"
                  value={guestNames[0]?.lastName || ''}
                  onChange={(e) => handleGuestNameChange(0, 'lastName', e.target.value)}
                  className={`w-1/2 rounded-lg border ${
                    errors.guestNames ? 'border-red-500' : 'border-gray-400'
                  } p-2 ml-2 italic text-black text-lg`}
                />
              </div>
              <input
                type="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className={`w-full rounded-lg border ${
                  errors.email ? 'border-red-500' : 'border-gray-400'
                } p-2 italic text-black text-lg`}
              />
              {errors.email && <p className="text-red-500 text-sm">{errors.email}</p>}
              {errors.guestNames && <p className="text-red-500 text-sm">{errors.guestNames}</p>}
            </div>
          ) : (
            <>
              {/* Attendees selection */}
              <div className="flex flex-row items-center justify-between mb-4 relative sm:space-x-20">
                <label>
                  <span className="text-lg sm:text-2xl w-1/2">Attending</span>
                </label>
                <div className="flex items-center w-1/2">
                  <button
                    className="border text-lg sm:text-4xl text-black rounded-full bg-gray-100 w-6 h-6 py-4 px-4 my-auto flex items-center justify-center"
                    type='button'
                    onClick={handleDecrement}
                    disabled={guests === 0}
                  >
                    <span>-</span>
                  </button>
                  <input
                    className="mx-2 text-center text-lg sm:text-3xl py-3 w-10 h-10 sm:h-16 sm:w-16 rounded-2xl bg-gray-100 text-black border border-gray-900"
                    type="text"
                    value={guests}
                    readOnly
                  />
                  <button
                    className="border text-lg sm:text-3xl text-black rounded-full bg-gray-100 px-2 py-0 my-auto"
                    type='button'
                    onClick={handleIncrement}
                  >
                    <span>+</span>
                  </button>
                </div>
              </div>

              {/* Guest information section */}
              {guests > 0 && (
                <div className="flex flex-col space-y-4 mb-4">
                  <div className="mt-4 w-full">
                    <input
                      type="email"
                      placeholder="Email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className={`w-full rounded-lg border ${
                        errors.email ? 'border-red-500' : 'border-gray-400'
                      } p-2 italic text-black text-lg`}
                    />
                    {errors.email && <p className="text-red-500 text-sm">{errors.email}</p>}
                  </div>
                  <h3 className="text-lg font-medium text-gray-700">Attendees:</h3>
                  {guestNames.map((guest, index) => (
                    <div key={index} className="flex justify-between">
                      <input
                        type="text"
                        placeholder="First Name"
                        value={guest.firstName}
                        onChange={(e) => handleGuestNameChange(index, 'firstName', e.target.value)}
                        className={`w-1/2 rounded-lg border ${
                          errors.guestNames ? 'border-red-500' : 'border-gray-400'
                        } p-2 italic text-black text-lg`}
                      />
                      <input
                        type="text"
                        placeholder="Last Name"
                        value={guest.lastName}
                        onChange={(e) => handleGuestNameChange(index, 'lastName', e.target.value)}
                        className={`w-1/2 rounded-lg border ${
                          errors.guestNames ? 'border-red-500' : 'border-gray-400'
                        } p-2 ml-2 italic text-black text-lg`}
                      />
                    </div>
                  ))}
                  {errors.guestNames && <p className="text-red-500 text-sm">{errors.guestNames}</p>}
                </div>
              )}
            </>
          )}

          {/* Can't make it section */}
          <div className="flex justify-between items-center my-4 mx-0">
            <label>
              <span className="text-lg sm:text-2xl">Can't make it ?</span>
            </label>
            <input
              type="checkbox"
              checked={cantMakeIt}
              onChange={handleCantMakeItChange}
              className="w-7 h-7 rounded-full accent-[#8b4513] cursor-pointer"
            />
          </div>

          {/* Error messages for selection */}
          {errors.selection && <p className="text-red-500 text-sm mt-4">{errors.selection}</p>}

          {/* Continue button */}
          <div className="mt-6 flex justify-center relative">
          <button
              className="absolute bottom-[-71px] left-[50%] translate-x-[-50%] px-4 py-2 bg-[#ece8e8] hover:bg-[#dcd8d8] transition-colors shadow-xl text-gray-900 rounded-lg border border-gray-900 h-[40px]"
              onClick={handleOnContinue}
              disabled={isContinueLoading}
              type='button'
            >
              { isContinueLoading ? (
                <LoadingDots />
              ) : (
                <span className="flex flex-row items-center justify-center gap-2">
                <span>
                  <FaCheckCircle />
                </span>
                <span>Continue</span>
              </span>
              )}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewAttending;