import React from 'react';
import { FaLocationDot } from 'react-icons/fa6';
import SlideFromBottom from '../../Animations/SlideFromBottom';

const FindYourWay = () => {
  return (
    <div>
      <div style={{ width: '100%', opacity: '1' }} className=''>
        <div className="relative w-full h-full">
          <SlideFromBottom>
            <div className="w-fit md:w-1/2 gap-8 bg-white backdrop:blur-lg shadow-xl shadow-black/70 rounded-2xl mx-2 sm:ml-10 py-6 px-6 !z-20" style={{ opacity: '1' }}>
                <h2 className="text-3xl font-semibold text-black mb-4 font-custom">
                  <span>Find Your Way</span>
                </h2>
                <p className="text-lg sm:text-xl font-semibold text-black mb-4 font-gFont1">
                  <span>
                    <span>Our wedding will be held at <a href="https://maps.app.goo.gl/PQrqnmtmYnceX5hs7" target='_blank'>St Mathew's Catholic Church, Umuchu</a> <strong>whilst </strong></span>
                    <span>The Traditional marriage commence by 2pm at the bride's compound at Umuojogwo village, Umuchu. Use the map below to get the directions and explore more.</span>
                  </span>
                </p>
                  <span className='flex flex-col'>
                    <span className='flex flex-row items-center justify-start space-x-3 sm:space-x-6'>
                      <a href="https://maps.app.goo.gl/PQrqnmtmYnceX5hs7" target='_blank'>
                        <p className="flex items-center text-base sm:text-lg text-[#e70d8c]">
                          <span className="text-[#e70d8c] mr-2"><FaLocationDot /></span>
                          <span className='underline underline-offset-4'>Wedding Venue</span>
                        </p>
                      </a>
                      <a href="https://maps.app.goo.gl/vCcLLUoLynrBaVbc7" target='_blank'>
                        <p className="flex items-center text-base sm:text-lg text-[#e70d8c]">
                          <span className="text-[#e70d8c] mr-2"><FaLocationDot /></span>
                          <span className='underline underline-offset-4'>Traditional Venue</span>
                        </p>
                      </a>
                    </span>
                    <p className='text-base sm:text-lg mt-3'>
                      <span>The map below shows the venue for the Traditional Marriage</span>
                    </p>
                  </span>
            </div>
          </SlideFromBottom>
          <div className="max-w-7xl py-28 px-4">
            {/* TODO: Check the height and adjust */}
            <div className="relative w-full z-10 backdrop:blur-lg shadow-md shadow-black/70 mx-auto" style={{ height: '500px' }}>
              <iframe src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d1412.1480895180514!2d7.120772607762302!3d5.939274943406961!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zNcKwNTYnMjIuMiJOIDfCsDA3JzE2LjgiRQ!5e1!3m2!1sen!2sgh!4v1731927269012!5m2!1sen!2sgh" width={ '100%' } height={ '100%' } style={{ border: '0', filter: 'grayscale(1)) contrast(1.1)', opacity: '0.52', overflow: 'auto', boxShadow: 'inherit', position: 'relative' }} allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default FindYourWay;

/* 
  <iframe src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d1412.1480895180514!2d7.120772607762302!3d5.939274943406961!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zNcKwNTYnMjIuMiJOIDfCsDA3JzE2LjgiRQ!5e1!3m2!1sen!2sgh!4v1731927269012!5m2!1sen!2sgh" width="800" height="600" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
*/
