import React from 'react';
import { Helmet } from 'react-helmet-async';
import JoinUs from '../wed-components/Details/JoinUs';
import WedTimeLine from '../wed-components/Details/WedTimeLine';
import FindYourWay from '../wed-components/Details/FindYourWay';
import FAQ from '../wed-components/Details/FAQ';
import EventCategories from '../wed-components/Details/EventCategories';
import LoveStory from '../wed-components/Details/LoveStory';

const DetailsPage = () => {
  return (
    <>

      <Helmet>
        <title>Wedding Details - M and C 2025</title>
        <meta name="description" content="Get all the details for Charles and Maryjane’s wedding in 2025. Venue, date, time, and everything you need to know!" />
        
        {/* Open Graph Meta Tags */}
        <meta property="og:title" content="Wedding Details - M and C 2025" />
        <meta property="og:description" content="Get all the details for Charles and Maryjane’s wedding in 2025. Venue, date, time, and everything you need to know!" />
        <meta property="og:image" content="https://res.cloudinary.com/dzsuia2ia/image/upload/v1738675949/ltp5g4sbaivqm6onloq2.jpg" />
        <meta property="og:url" content="https://mandc2025.org/details" />
        <meta property="og:type" content="website" />
      </Helmet>


    
      <div className='bg-[#fadadd] overflow-x-hidden'>
        <JoinUs />
        <WedTimeLine />
        <FindYourWay />
        <FAQ />
        <EventCategories />
        <LoveStory />
      </div>
    </>
  )
}

export default DetailsPage