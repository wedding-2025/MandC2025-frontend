import React, { useState, useEffect } from 'react';

const CountDown = () => {
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
    <div className="mt-4 md:mt-0 text-white px-5 focus:outline-none md:text-3xl font-bold">
      <dl className="grid grid-cols-2 md:grid-cols-4 justify-center content-center gap-x-4 gap-y-2 text-center">
        <div className="flex flex-col-reverse gap-y-3 text-center px-3 rounded-xl bg-[#274d60] shadow-2xl">
          <dt className="text-base leading-7 text-gray-200 border-t border-dotted">
            <span>days</span>
          </dt>
          <dd className="text-3xl font-semibold tracking-tight text-white pt-[4px]">
            <span>{timeLeft.days || '0'}</span>
          </dd>
        </div>

        <div className="flex flex-col-reverse gap-y-3 text-center px-3 rounded-xl bg-[#274d60] shadow-2xl">
          <dt className="text-base leading-7 text-gray-200 border-t border-dotted">
            <span>hrs</span>
          </dt>
          <dd className="text-3xl font-semibold tracking-tight text-white pt-[4px]">
            <span>{timeLeft.hours || '0'}</span>
          </dd>
        </div>

        <div className="flex flex-col-reverse gap-y-3 text-center px-3 rounded-xl bg-[#274d60] shadow-2xl">
          <dt className="text-base leading-7 text-gray-200 border-t border-dotted">
            <span>mins</span>
          </dt>
          <dd className="text-3xl font-semibold tracking-tight text-white pt-[4px]">
            <span>{timeLeft.minutes || '0'}</span>
          </dd>
        </div>

        <div className="flex flex-col-reverse gap-y-3 text-center px-3 rounded-xl bg-[#274d60] shadow-2xl">
          <dt className="text-base leading-7 text-gray-200 border-t border-dotted">
            <span>secs</span>
          </dt>
          <dd className="text-3xl font-semibold tracking-tight text-white pt-[4px]">
            <span>{timeLeft.seconds || '0'}</span>
          </dd>
        </div>
      </dl>
    </div>

  );
};

export default CountDown;


{/* <dl className="grid grid-cols-1 gap-x-2 gap-y-2">
  <div className="flex flex-col-reverse gap-y-3 border-l border-white/20 pl-6">
    <dt className="text-base leading-7 text-gray-300">
      <span>days</span>
    </dt>
    <dd className="text-3xl font-semibold tracking-tight text-white">
      <span>{timeLeft.days || '0'}</span>
    </dd>
  </div>

  <div className="flex flex-col-reverse gap-y-3 border-l border-white/20 pl-6">
    <dt className="text-base leading-7 text-gray-300">
      <span>hrs</span>
    </dt>
    <dd className="text-3xl font-semibold tracking-tight text-white">
      <span>{timeLeft.hours || '0'}</span>
    </dd>
  </div>

  <div className="flex flex-col-reverse gap-y-3 border-l border-white/20 pl-6">
    <dt className="text-base leading-7 text-gray-300">
      <span>mins</span>
    </dt>
    <dd className="text-3xl font-semibold tracking-tight text-white">
      <span>{timeLeft.minutes || '0'}</span>
    </dd>
  </div>

  <div className="flex flex-col-reverse gap-y-3 border-l border-white/20 pl-6">
    <dt className="text-base leading-7 text-gray-300">
      <span>secs</span>
    </dt>
    <dd className="text-3xl font-semibold tracking-tight text-white">
      <span>{timeLeft.seconds || '0'}</span>
    </dd>
  </div>
</dl> */}

