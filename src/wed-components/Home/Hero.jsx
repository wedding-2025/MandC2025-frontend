import React from 'react';
import heroBg from '../../assets/img/heros copy.webp';
// import CountDown from './CountDown';

//background image is hero-bg

const Hero = () => {

  const HeroBackGround = (localStorage.getItem('hero-img') || heroBg);

  // console.log('Hero rendered')

  // let heroBg3 = 'https://res.cloudinary.com/dzsuia2ia/image/upload/v1733148696/itdzbmvn0zwsxxmcao80.jpg';
  // https://res.cloudinary.com/dzsuia2ia/image/upload/v1733837769/isowgiterxtyb87ixrsz.jpg

  // const optimizeAndPreload = (url) => {
  //   const optimizedUrl = url
  //     .replace("/upload/", "/upload/f_auto,q_auto,w_auto,fl_strip_profile/")
  //     .replace(/\.(png|jpe?g|gif)/i, '.avif' || '.webp');
  
  //   const img = new Image();
  //   img.src = optimizedUrl;
  
  //   return optimizedUrl;
  // };

  return (
    <>
      <div className="block-container overflow-auto font-custom" style={{ width: '100%', opacity: '1' }}>
        <section className="relative overflow-hidden w-full h-[100vh] px-6 py-24 md:px-8 md:py-32 bg-inherit">
          <div className="w-full h-full mx-auto max-w-7xl flex justify-between flex-col gap-16 md:gap-20">
            <div className="z-20 w-full h-full flex flex-col gap-14 justify-between md:items-center md:gap-20">
              <div className="relative w-full h-full flex flex-col md:justify-between gap-10">
                <div className="h-[1px] hidden bg-white/40" style={{ width: '40%' }}></div>
                {/* Count down */}
                <div className="mt-[120%] sm:mt-[0]  flex flex-col sm:flex-row items-center justify-center md:justify-between" style={{ opacity: '1', transform: 'none' }}>
                  <h1 className="text-2xl font-normal xl:text-3xl text-center w-fit">
                    {/* <span> */}
                      <span datatype='text' className='flex items-center font-semibold tracking-[2px] font-custom2 justify-center bg-white/50 text-gray-900 p-2 md:p-3 shadow-gray-50 shadow-2xl rounded-lg border border-gray-900'>
                      Scroll to Explore!
                      </span>
                    {/* </span> */}
                  </h1>
                  {/* COUNTDOWN CLOCK */}
                  {/* <span>
                    <CountDown />
                  </span> */}
                </div>
                {/* Join us and mark you calender */}
                <div className="hidden w-full sm:grid grid-cols-1 gap-10 md:grid-cols-3 text-[20px] md:-mb-10">
                  <p className="w-fit text-black bg-white/50 px-3 py-2 text-center rounded-2xl font-custom2 tracking-[2px] font-normal" style={{ opacity: '1', transform: 'none' }}>
                    <span>
                    Our wedding day was a beautiful celebration of love, joy, and cherished moments with our dear family and friends.
                    </span>
                  </p>
                  <div className="h-[1px] bg-white/40 mt-3.5" style={{ opacity: '1', transform: 'none' }}></div>
                  <p className="w-fit text-black bg-white/50 px-3 py-2 text-center rounded-2xl font-custom2 tracking-[2px] font-normal" style={{ opacity: '1', transform: 'none' }}>
                    <span>
                    Thank you for being part of our journey and making our day truly unforgettable.
                    </span>
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="absolute inset-0 w-full h-full">
            <div className="relative w-full h-full bg-inherit">
              <div className="w-full h-full opacity-70 bg-black/10 object-cover" datatype='image' style={{ transform: 'none', opacity: '1', objectFit: 'none', background: 'transparent', position: 'relative', borderRadius: 'inherit' }}>
                <img src={HeroBackGround} alt="The couple's image background" className="w-full h-full opacity-80 bg-black/10 object-cover" loading='lazy' style={{ background: 'transparent', loading: 'lazy' }}/>
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
