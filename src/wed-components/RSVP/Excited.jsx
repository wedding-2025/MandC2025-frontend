import React from 'react';
// import Udomimi4 from '../../assets/images/Udomimi4.png';
import BigQuote from './BigQuote';
import SlideFromRight from '../../Animations/SlideFromRight';

const Excited = () => {
  const Udomimi4 = 'https://res.cloudinary.com/dzsuia2ia/image/upload/v1733482104/oxaopamjbi7bulpoybhz.jpg';

  return (
    <>
      <div style={{ width: '100%', opacity: '1' }}>
        <div className="w-full bg-[#e0d8d8] pb-16 pt-16 sm:pb-24 sm:pt-20 xl:pb-20">
          <div className="bg-[#7a0646] pb-20 sm:pb-24 xl:pb-0">
            <div className="mx-auto flex max-w-7xl flex-col items-center gap-x-8 gap-y-10 px-6 sm:gap-y-8 lg:px-8 xl:flex-row xl:items-stretch">
              <div className="-mt-8 w-full max-w-2xl xl:-mb-8 xl:w-96 xl:flex-none">
                <div className="relative aspect-[2/1] h-full md:-mx-8 xl:mx-0 xl:aspect-auto">
                  <div className="absolute inset-0 h-full w-full rounded-2xl bg-slate-100 object-cover shadow-2xl" style={{ transform: 'none', opacity: '1', objectFit: 'none', background: 'transparent' }}>
                    <img src={ Udomimi4 } alt="The couple" loading='lazy' className="absolute inset-0 h-full w-full rounded-2xl bg-slate-100 object-cover shadow-2xl " style={{ backgroundColor: 'transparent' }} />
                  </div>
                </div>
              </div>
              <div className="w-full max-w-2xl xl:max-w-none xl:flex-auto xl:px-16 xl:py-24">
                <figure className="relative isolate pt-6 sm:pt-12">
                  <BigQuote />
                  <blockquote className="text-xl font-semibold leading-8 text-gray-300/90 sm:text-2xl sm:leading-9 font-custom3">
                    <SlideFromRight>
                      <span>
                        We are so excited to celebrate this special day with our closest friends and families. Your presence means the world to us!
                      </span>
                    </SlideFromRight>
                  </blockquote>
                  <figcaption className="mt-8 text-base">
                    <div className="font-semibold text-gray-100">
                      <span>Charles & Maryjane</span>
                    </div>
                    <div className="mt-1 text-gray-100/60">
                      <span>The Happy Couple</span>
                    </div>
                  </figcaption>
                </figure>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Excited;