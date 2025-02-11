import React from 'react';
import { Outlet } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import Invited from '../wed-components/RSVP/Invited';
import Excited from '../wed-components/RSVP/Excited';
import RsvpNow from '../wed-components/RSVP/RsvpNow';

const RsvpPage = ({ scrollToContact }) => {
  return (
    <>

      <Helmet>
        <title>RSVP - M & C 2025</title>
        <meta name="description" content="Let us know if you'll be attending Charles and Maryjane’s wedding in 2025. RSVP now and join the celebration!" />
        
        {/* Open Graph Meta Tags */}
        <meta property="og:title" content="RSVP - M & C 2025" />
        <meta property="og:description" content="Let us know if you'll be attending Charles and Maryjane’s wedding in 2025. RSVP now and join the celebration!" />
        <meta property="og:image" content="https://res.cloudinary.com/dzsuia2ia/image/upload/w_1000,ar_3:2,c_fill,g_auto,/v1733837836/aggwqocfwgsjfvannbxe.jpg" />
        <meta property="og:url" content="https://mandc2025.org/rsvp/rsvp-form" />
        <meta property="og:type" content="website" />
        <link rel="preload" type="image/png" href="https://res.cloudinary.com/dzsuia2ia/image/upload/v1733482107/ziuecv6cwccb7oj1nkba.png" as="image" />
      </Helmet>


      <div className='bg-[#e9e6e6] overflow-x-hidden'>
        <Invited />
        <Excited />
        <RsvpNow scrollToContact={scrollToContact} />
        <Outlet />
      </div>
    </>
  )

}

export default RsvpPage;