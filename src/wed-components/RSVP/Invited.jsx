import React, { useState, useEffect } from 'react';
// import InvitedImg from '../../assets/images/InvitedImg.png';

const Invited = () => {
  const InvitedImg = 'https://res.cloudinary.com/dzsuia2ia/image/upload/v1733482107/ziuecv6cwccb7oj1nkba.png';

  const calculateTimeLeft = () => {
    // Set target date in UTC, then adjust for WAT (UTC+1)
    const targetDateUTC = new Date('2025-01-04T00:00:00Z');
    const targetDateWAT = new Date(targetDateUTC.getTime() + 60 * 60 * 1000); // Adjust to WAT (UTC+1)
    
    // Get current date in WAT
    const now = new Date();
    const currentTimeWAT = new Date(now.toLocaleString('en-US', { timeZone: 'Africa/Lagos' }));

    // Calculate time difference
    const difference = targetDateWAT - currentTimeWAT;

    let timeLeft = {};

    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60)
      };
    }

    return timeLeft;
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setTimeout(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearTimeout(timer);
  });



  return (
    <>
      <div style={{ width: '100%', opacity: '1' }}>
        <div className="relative isolate overflow-hidden bg-[#7a0646] py-24 sm:py-32">
          <div className="absolute inset-0 opacity-20 -z-10 h-full w-full object-cover object-right md:object-center rounded-lg bg-slate-100" style={{ transform: 'none', opacity: '1', objectFit: 'none', background: 'transparent' }}>
            <img src={ InvitedImg } alt="Design Image" className="absolute inset-0 opacity-20 -z-10 h-full w-full object-cover object-right md:object-center rounded-lg bg-slate-100" style={{ backgroundColor: 'transparent' }} />
          </div>

          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto max-w-2xl lg:mx-0">
              <h2 className="text-4xl font-bold tracking-tight text-[#d3d3d3] sm:text-6xl font-custom">
                <span>You're Invited!</span>
              </h2>
              <p className="mt-6 text-lg leading-8 text-gray-300">
                <span>
                  We are thrilled to have you join us in celebrating our love and union. Please RSVP to us know if you can make it.
                </span>
              </p>
            </div>
            <div className="mx-auto mt-10 max-w-2xl lg:mx-0 lg:max-w-none">
                <dl className="mt-16 grid grid-cols-1 gap-8 sm:mt-20 sm:grid-cols-2 lg:grid-cols-4">
                  <div className="flex flex-col-reverse bg-black/20 shadow-xl hover:scale-105 transition-all duration-500 hover:bg-black/40 rounded-xl px-3 py-5 justify-center items-center">
                    <dt className="text-base leading-7 text-gray-300">
                      <span>Date</span>
                    </dt>
                    <dd className="text-2xl font-bold leading-9 tracking-tight text-[#f0eded]">
                      <span>January 04, 2025</span>
                    </dd>
                  </div>
                
                  <div className="flex flex-col-reverse bg-black/20 shadow-xl hover:scale-105 transition-all duration-500 hover:bg-black/40 rounded-xl px-3 py-5 justify-center items-center font-serif">
                    <dt className="text-base leading-7 text-gray-300">
                      <span>Location</span>
                    </dt>
                    <dd className="text-2xl font-bold leading-9 tracking-tight text-[#f0eded]">
                      <span>Umuchu</span>
                    </dd>
                  </div>
                  <div className="flex flex-col-reverse bg-black/20 shadow-xl hover:scale-105 transition-all duration-500 hover:bg-black/40 rounded-xl px-3 py-5">
                    <dt className="text-base leading-7 ml-2 text-gray-300">
                      <span>Countdown</span>
                    </dt>
                    <dd className="text-2xl font-bold leading-9 tracking-tight text-[#f0eded]">
                      <div>
                        <dl className="grid grid-cols-4 gap-x-px justify-center content-center text-center rounded-xl bg-black/10">
                          <div className="flex flex-col-reverse text-center shadow-2xl px-0 py-0">
                          <dt className='text-[13px]'>
                            <span className='border-t border-dotted'>days</span>
                          </dt>
                          <dd className='text-[17px]'>
                            <span> { timeLeft.days || '0' } </span>
                          </dd>
                          </div>
                          <div className="flex flex-col-reverse text-center  shadow-2xl px-0 py-0">
                          <dt className='text-[13px]'>
                            <span className='border-t border-dotted'>hrs</span>
                          </dt>
                          <dd className='text-[17px]'>
                            <span> { timeLeft.hours || '0' } </span>
                          </dd>
                          </div>
                          <div className="flex flex-col-reverse text-center shadow-2xl px-0 py-0">
                          <dt className='text-[13px]'>
                            <span className='border-t border-dotted'>mins</span>
                          </dt>
                          <dd className='text-[17px]'>
                            <span> { timeLeft.minutes || '0' } </span>
                          </dd>
                          </div>
                          <div className="flex flex-col-reverse text-center px-0 py-0">
                          <dt className='text-[13px]'>
                            <span className='border-t border-dotted'>secs</span>
                          </dt>
                          <dd className='text-[17px]'>
                            <span> { timeLeft.seconds || '0' } </span>
                          </dd>
                          </div>
                        </dl>
                      </div>
                    </dd>
                  </div>
                </dl>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Invited;