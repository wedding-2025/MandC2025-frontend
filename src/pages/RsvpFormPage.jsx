import React from 'react';
import { Helmet } from 'react-helmet-async';
import NewRsvpForm from '../wed-components/RSVP/NewRsvpForm';
// import RsvpBg from '../assets/images/RsvpBg.png';

const RsvpFormPage = () => {
  const RsvpBg = 'https://res.cloudinary.com/dzsuia2ia/image/upload/v1733482103/roxfysaaqpcy4e6z6smb.webp';

  return (
    <>

      <Helmet>
        <link rel="preload" type="image/webp" href="https://res.cloudinary.com/dzsuia2ia/image/upload/v1733482103/roxfysaaqpcy4e6z6smb.webp" as="image" />
      </Helmet>


      <div className="bg-cover flex items-center justify-center p-6 hide-scroll-bar overflow-auto"
        style={{
          backgroundImage: `url(${RsvpBg})`,
          opacity: '1',
          width: '100%',
          height: '100vh',
          overflow: 'auto'
        }}>
        <div className="">
          <div className="w-full max-w-screen-sm">
            <div className="font-serif -z-10 overflow-Y-hidden h-full">
              <div id='form-wrapper' className="flex flex-col items-center justify-center h-full max-w-screen-sm">
                <NewRsvpForm />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default RsvpFormPage;