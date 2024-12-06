import React from 'react';
import JoinUs from '../wed-components/Details/JoinUs';
import WedTimeLine from '../wed-components/Details/WedTimeLine';
import FindYourWay from '../wed-components/Details/FindYourWay';
import FAQ from '../wed-components/Details/FAQ';
import EventCategories from '../wed-components/Details/EventCategories';
import LoveStory from '../wed-components/Details/LoveStory';

const DetailsPage = () => {
  return (
    <>
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