import React from 'react';
// import heroBg3 from '../../assets/images/heroBg3.jpeg';
import CountDown from './CountDown';

//background image is hero-bg

const Hero = () => {

  const heroBg3 = 'https://res.cloudinary.com/dzsuia2ia/image/upload/v1733148696/itdzbmvn0zwsxxmcao80.jpg';

  return (
    <>
      <div className="block-container overflow-auto font-custom" style={{ width: '100%', opacity: '1' }}>
        <section className="relative overflow-hidden w-full h-[100vh] px-6 py-24 md:px-8 md:py-32 bg-inherit">
          <div className="w-full h-full mx-auto max-w-7xl flex justify-between flex-col gap-16 md:gap-20">
            <div className="z-20 w-full h-full flex flex-col gap-14 justify-between md:items-center md:gap-20">
              <div className="relative w-full h-full flex flex-col md:justify-between gap-10">
                <div className="h-[1px] bg-white/40" style={{ width: '40%' }}></div>
                {/* Count down */}
                <div className="mt-[100%] sm:mt-[0]  sm:flex flex-col sm:flex-row sm:items-center md:justify-between" style={{ opacity: '1', transform: 'none' }}>
                  <h1 className="text-2xl font-extrabold text-white md:text-2xl xl:text-5xl md:w-max-3/5">
                    <span>
                      <span datatype='text'>
                        Countdown to Our Big Day
                      </span>
                    </span>
                  </h1>
                  {/* COUNTDOWN CLOCK */}
                  <span>
                    <CountDown />
                  </span>
                </div>
                {/* Join us and mark you calender */}
                <div className="hidden w-full sm:grid grid-cols-1 gap-10 md:grid-cols-3 text-[20px]">
                  <p className="w-full text-white font-light" style={{ opacity: '1', transform: 'none' }}>
                    <span>
                    Join us in celebrating our love story as we count down to the most special day of our lives
                    </span>
                  </p>
                  <div className="h-[1px] bg-white/40 mt-3.5" style={{ opacity: '1', transform: 'none' }}></div>
                  <p className="w-full text-white font-light" style={{ opacity: '1', transform: 'none' }}>
                    <span>
                    Mark your calenders and get ready to witness a beautiful union.
                    </span>
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="absolute inset-0 w-full h-full">
            <div className="relative w-full h-full bg-inherit">
              <div className="w-full h-full opacity-70 bg-black/10 object-cover" datatype='image' style={{ transform: 'none', opacity: '1', objectFit: 'none', background: 'transparent', position: 'relative', borderRadius: 'inherit' }}>
                <img src={ heroBg3 } alt="The couple's image background" className="w-full h-full opacity-80 bg-black/10 object-cover" style={{ background: 'transparent' }}/>
              </div>
            </div>
          </div>

          <div className="absolute w-full flex justify-center items-center bottom-3 md:bottom-8 h-[10%] left-[-50%] translate-x-[50%]">
            <div className="w-4 h-10 py-2.5 flex justify-center items-center border-2 border-white rounded-full">
              <div className="w-1 h-2.5 bg-white rounded-full animate-bounceCustom">&nbsp;</div>
            </div>
          </div>
        </section>
      </div>
    </>
  )
}

export default Hero;