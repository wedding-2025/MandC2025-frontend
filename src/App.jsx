import React, { useEffect, useRef, useState } from 'react';
import ScrollToTop, { scrollToTopManually } from './ScrollToTop.jsx';

import {
  Outlet,
  Route,
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
  useLocation,
  // useNavigate,
  // Navigate
} from 'react-router-dom';
import MainLayout from './layouts/MainLayout';
import HomePage from './pages/HomePage';
import DetailsPage from './pages/DetailsPage';
import RsvpPage from './pages/RsvpPage';
import RsvpFormPage from './pages/RsvpFormPage';
import PageNotFound from './pages/PageNotFound';
import RecapPage from './pages/RecapPage';
import { ToastContainer } from 'react-toastify';
import './App.css';
import WelcomeScreen from './Animations/WelcomeScreen';
import HeroBg from './assets/img/heros copy.webp';


// import NewPicture from './wed-components/RECAP/Test/NewPicture.jsx'; // Remove later
// import TestWrapper from './wed-components/RECAP/Test/TestWrapper.jsx'; // Remove Later



// Wrapper component to handle route refreshing
const RouteWrapper = ({ children })  => {
  const location = useLocation();
  // const navigate = useNavigate();


  // console.log(import.meta.env.VITE_MY_NAME)
  // console.log(import.meta.env); // Logs all available env variables


  const handleNavigation = (e) => {
    // if clicking a link to the  current path, refresh the  page
    const clickedPath = e.target.getAttribute('to') || e.target.getAttribute('href');
  if (clickedPath === location.pathname) {
    e.preventDefault();

    // scroll to the top before  refreshing
    scrollToTopManually();


    // Allow a short delay before reloading, for smooth UX
    setTimeout(() => {
      window.location.reload();
    }, 5); 
    // 5ms delay
  }
  };

  return (
    <div onClick={ handleNavigation }>
      { children }
    </div>
  );
};





const App = () => {
  const contactRef = useRef(null);
  const [isLoading, setIsLoading] = useState(true);
  const [showWelcome, setShowWelcome] = useState(true);

  const scrollToContact = () => {
    if (contactRef.current) {
      contactRef.current.scrollIntoView({ behavior: 'smooth' })
    }
  };

  // Typing Complete Effect
  const handleTypingComplete = () => {
    setTimeout(() => {
      setShowWelcome(false);
    }, 500);
  };

  useEffect(() => {
    // Only keep the loading timer
    const loadingTimer = setTimeout(() => {
      setIsLoading(false);
    }, 300);

    localStorage.setItem('hero-img', HeroBg);

    return () => clearTimeout(loadingTimer);
  }, []);

  // const scrollToContact = () => {
  //   // Dispatch a custom event that can be caught by Homepage
  //   window.dispatchEvent(new CustomEvent('scrollToContact'));
  // };

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path='/' element={ 
        <RouteWrapper>
          <ScrollToTop />
          <MainLayout scrollToContact={scrollToContact} />
        </RouteWrapper> 
      }>
        
        <Route index element={ <HomePage contactRef={contactRef} /> } />
        <Route path='/details' element={ <DetailsPage /> } />

        <Route path='/rsvp' element={ <Outlet /> } >

        {/* <Route path='/picture' element={ <NewPicture /> } > Remove Later */}
        {/* <Route path='/picture' element={ <TestWrapper /> } > Remove Later */}


          <Route index element={ <RsvpPage scrollToContact={scrollToContact} /> } />
          <Route path='rsvp-form' element={ <RsvpFormPage /> } />
        </Route>
        <Route path='/recap' element={ <RecapPage /> } />
        <Route path='*' element={ <PageNotFound /> } />
      </Route>
    )
  );

  return (
    <div>
      <ToastContainer />
      {showWelcome && (
        <WelcomeScreen isVisible={showWelcome} onTypingComplete={handleTypingComplete} />
      )}
      <div style={{ visibility: isLoading || showWelcome ? 'hidden' : 'visible' }}>
        <RouterProvider router={router} />
      </div>
    </div>
  );
}


export default App