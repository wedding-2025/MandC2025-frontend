import React from 'react';

const SomeSvg = () => {
  return (
    <div>
      <svg viewBox="0 0 1024 1024" className="absolute left-1/2 top-1/2 -z-10 h-[64rem] w-[64rem] -translate-y-1/2 [mask-image:radial-gradient(closest-side,white,transparent)] sm:left-full sm:-ml-80 lg:left-1/2 lg:ml-0 lg:-translate-x-1/2 lg:translate-y-0" aria-hidden="true">
        <circle cx="512" cy="512" r="512" fill="url(#759c1415-0410-454c-8f7c-9a820de03641)" fillOpacity="0.7"></circle>
        <defs>
          <radialGradient id="759c1415-0410-454c-8f7c-9a820de03641">
            <stop stopColor="#FFD700"></stop>
            <stop offset="1" stopColor="#FF69B4"></stop>
          </radialGradient>
        </defs>
      </svg>
    </div>
  )
}

export default SomeSvg;
