import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { motion } from 'framer-motion';
import NewFormWrapper from './RSVPComponents/NewFormWrapper';
import NewIntro from './RSVPComponents/NewIntro';
import NewAttending from './RSVPComponents/NewAttending';
import ReviewForm from './RSVPComponents/ReviewForm';
import WellWishing from './RSVPComponents/WellWishing';
import SupportModal from './RSVPComponents/SupportModal';

const NewRsvpForm = () => {
  const [currentQuestion, setCurrentQuestion] = useState(1);
  const [direction, setDirection] = useState(1);
  const [cantMakeIt, setCantMakeIt] = useState(false);
  const [guests, setGuests] = useState(0);
  const [email, setEmail] = useState('');
  const [guestNames, setGuestNames] = useState([]); // Start with empty array
  const [errors, setErrors] = useState({});
  const [wellWishingMessage, setWellWishingMessage] = useState(''); // Well wishing message
  const [isModalOpen, setIsModalOpen] = useState(false); // control the Support Modal
  const [subMiteError, setSubmitError] = useState('');

  // Update guest names array when number of guests changes
  useEffect(() => {
    if (!cantMakeIt) {
      // Create a new array with length exactly matching the guest count
      const newGuestNames = Array.from({ length: guests }, (_, index) => {
        // Preserve existing guest names if they exist
        return guestNames[index] || { firstName: '', lastName: '' };
      });
      setGuestNames(newGuestNames);
    }
  }, [guests, cantMakeIt]);

  const handleCantMakeItChange = (e) => {
    setCantMakeIt(e.target.checked);
    
    if (e.target.checked) {
      setGuests(0);
      setGuestNames([{ firstName: '', lastName: '' }]); // Reset to empty array
    } else {
      setGuests(0);
      setGuestNames([]);
    }
  };

  const handleIncrement = () => {
    setGuests(prevGuests => prevGuests + 1);
  };

  const handleDecrement = () => {
    if (guests > 0) {
      setGuests(prevGuests => prevGuests - 1);
    }
  };

  const handleGuestNameChange = (index, field, value) => {
    const updatedGuests = [...guestNames];
    updatedGuests[index][field] = value;
    setGuestNames(updatedGuests);
  };

  const handleNext = async () => {
    const newErrors = {};
    if (!cantMakeIt && guests === 0) {
      newErrors.selection = 'Please specify the number of guests or check "Can\'t make it".';
    }
    if (!email) {
      newErrors.email = 'Please enter your email.';
    }
    if (!cantMakeIt && guests > 0) {
      const missingNames = guestNames.some(
        (guest) => !guest.firstName.trim() || !guest.lastName.trim()
      );
      if (missingNames) {
        newErrors.guestNames = 'Please provide the names of all guests.';
      }
    }

    setErrors(newErrors);
    if (Object.keys(newErrors).length === 0) {
      setDirection(1);
      setCurrentQuestion(prev => prev + 1);
    }
  };

  const IntroNext = () => {
    setDirection(1);
    setCurrentQuestion(prev => prev + 1);
  };

  const handlePrevious = () => {
    setDirection(-1);
    setCurrentQuestion(prev => prev - 1);
  };

  const handleSubmit = async (event) => {
    // const BACKEND_URL = 'http://localhost:3500';
    const BACKEND_URL = import.meta.env.VITE_EMAIL_BACKEND_URL;
    
    event.preventDefault(); // Prevent default form behavior
    const startTime = performance.now(); // Start timing
    setIsModalOpen(true); // Open modal if submission succeeds
  
    setSubmitError(''); // Clear any previous error message
  
    const RsvpData = {
      email,
      guestNames,
      cantMakeIt,
      wellWishingMessage,
    };
  
    try {
      const response = await axios.post(`${BACKEND_URL}/send-rsvp`, RsvpData, {
        headers: {
          'Content-Type': 'application/json',
        },
      });

      const endTime = performance.now(); // End timing
      console.log(`API call took ${endTime - startTime} milliseconds`)

      console.log('RSVP Data:', RsvpData) // Log the data being sent
  
      if (response.data.success) {
        
        // Optionally reset the form fields
        setEmail('');
        setGuestNames([]);
        setWellWishingMessage('');
        setCantMakeIt(false);
        setGuests(0);
      } else {
        console.error('Error submitting form: ', response.data.message);
        setSubmitError(response.data.message || 'Submission failed. Please try again.');
      }
    } catch (error) {
      console.error('Error submitting form: ', error);
      setSubmitError(
        error.response?.data?.message || 
        error.message || 
        'There was a problem submitting your RSVP. Please try again later.'
      );
    }

  };
  
  

  // Close the Support Modal
  const handleCloseModal = () => {
    setIsModalOpen(false);
    // Redirect to the Intro page 
    setCurrentQuestion(1);
  };

  // Handling the WellWishing Message
  const handleWellWishingMessageChange = (e) => {
    setWellWishingMessage(e.target.value);
  };


  const slideVariant = {
    hidden: (direction) => ({
      opacity: 0,
      y: direction === 1 ? 100 : -100,
    }),
    visible: { opacity: 1, y: 0 },
    exit: (direction) => ({
      opacity: 0,
      y: direction === 1 ? -100 : 100
    }),
  };

  return (
    <div>
      <motion.div 
        className="w-full relative flex justify-center items-center"
        key={currentQuestion}
        custom={direction} 
        variants={slideVariant} 
        initial="hidden" 
        animate="visible" 
        exit="exit" 
        transition={{ duration: 0.5 }}
      >
        <NewFormWrapper>
          {currentQuestion === 1 && (
            <NewIntro 
              IntroNext={IntroNext}
              handlePrevious={handlePrevious}
            />
          )}
          {currentQuestion === 2 && (
            <NewAttending
              cantMakeIt={cantMakeIt}
              guests={guests}
              email={email}
              errors={errors}
              guestNames={guestNames}
              handleCantMakeItChange={handleCantMakeItChange}
              handleDecrement={handleDecrement}
              handleIncrement={handleIncrement}
              setEmail={setEmail}
              handleGuestNameChange={handleGuestNameChange}
              handleNext={handleNext}
              handlePrevious={handlePrevious}
            />
          )}
          {currentQuestion === 3 && (
            <ReviewForm
              email={email}
              guestNames={guestNames}
              cantMakeIt={cantMakeIt}
              handlePrevious={handlePrevious}
              handleNext={handleNext}
            />
          )}
          {currentQuestion === 4 && (
            <WellWishing
            wellWishingMessage={wellWishingMessage}
            handleWellWishingMessageChange={handleWellWishingMessageChange}
            handlePrevious={handlePrevious}
            handleSubmit={handleSubmit}
            />
          )}
        </NewFormWrapper>
      </motion.div>

      <SupportModal
        isOpen={isModalOpen}
        handleClose={handleCloseModal}
      />
    </div>
  );
};

export default NewRsvpForm;