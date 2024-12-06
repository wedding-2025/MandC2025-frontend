import React from 'react';
import { Outlet } from 'react-router-dom';
import Invited from '../wed-components/RSVP/Invited';
import Excited from '../wed-components/RSVP/Excited';
import RsvpNow from '../wed-components/RSVP/RsvpNow';

const RsvpPage = ({ scrollToContact }) => {
  return (
    <div className='bg-[#e9e6e6] overflow-x-hidden'>
      <Invited />
      <Excited />
      <RsvpNow scrollToContact={scrollToContact} />
      <Outlet />
    </div>
  )

}

export default RsvpPage;