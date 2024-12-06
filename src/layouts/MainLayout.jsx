import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from '../wed-components/Home/Navbar';
import Footer from '../wed-components/Home/Footer'

const MainLayout = ({ scrollToContact }) => {
  return (
    <>
      <Navbar scrollToContact={scrollToContact} />
      <Outlet />
      <Footer />
    </>
  )
}

export default MainLayout;