import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Hero from '../wed-components/Home/Hero';
import WedHighlights from '../wed-components/Home/WedHighlights';
import Gallery from '../wed-components/Home/Gallery';
import OurJourney from '../wed-components/Home/OurJourney';
import RsvpOurWed from '../wed-components/Home/RsvpOurWed';
import WedContact from '../wed-components/Home/WedContact';

const HomePage = ({ contactRef }) => {
  // const contactRef = useRef(null);
  const location = useLocation();

  useEffect(() => {
    // Check if navigated here with the scrollToContact state
    if (location.state?.scrollToContact && contactRef.current) {
      // Add small delay to ensure the page has rendered
      setTimeout(() => {
        contactRef.current.scrollIntoView({ behavior: 'smooth' });
      }, 100);

      // Clean up the state to prevent scrolling on refresh
      window.history.replaceState({}, document.title);
    }
  }, [location, contactRef]);

  // const handleScrollToContact = () => {
  //   if (contactRef.current) {
  //     // Use scrollInto
  //   }
  // };

  return (
    <>
      <Hero />
      <WedHighlights />
      <Gallery />
      <OurJourney />
      <RsvpOurWed />
      <div ref={contactRef}>
        <WedContact />
      </div>
    </>
  )
}

export default HomePage;