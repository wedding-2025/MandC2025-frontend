import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
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

     {/* SEO Metadata */}
      <Helmet>
        <title>M & C 2025</title>
        <meta name="description" content="Join us in celebrating the wedding of Charles and Maryjane’s in 2025. Find all the details about the event, our journey, and how to RSVP." />
        <meta name="keywords" content="wedding, Charles, Maryjane, mandc2025, m and c 2025, m&c2025, 2025, celebration, RSVP, journey, gallery" />
        <link rel="canonical" href="https://mandc2025.org" />
      </Helmet>

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