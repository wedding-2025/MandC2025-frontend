import React from 'react';
import SlideFromLeft from '../../Animations/SlideFromLeft';

const FAQ = () => {
  return (
    <>
      <div style={{ width: '100%', opacity: '1' }} className=''>
        <section className="py-4 bg-inherit mt-[70%] md:mt-0">
          <div className="px-4 mx-auto max-w-7xl py-10 flex flex-col gap-20 shadow-2xl shadow-black/50 rounded-lg">
            <div style={{ opacity: '1', transform: 'none' }}>
              <h2 className="text-4xl font-semibold text-center text-slate-900 font-custom">
                <span>
                  Frequently Asked Questions
                </span>
              </h2>
            </div>
            <div className="max-w-5xl mx-auto flex flex-col gap-14">
              <SlideFromLeft>
                <div style={{ opacity: '1', transform: 'none' }}>
                  <div className="border-b border-black/20 shadow-sm">
                    <p className="text-2xl font-semibold text-slate-900 font-custom2">
                      <span>What should I wear?</span>
                    </p>
                    <p className="my-8 text-lg sm:text-xl font-normal text-slate-600">
                      <span>Formal attire is recommended. Feel free to dress comfortably for the occasion.</span>
                    </p>
                  </div>
                </div>
              </SlideFromLeft>
              <SlideFromLeft>
                <div style={{ opacity: '1', transform: 'none' }}>
                  <div className="border-b border-black/20 shadow-sm">
                    <p className="text-2xl font-semibold text-slate-900 font-custom2">
                      <span>Is there parking available?</span>
                    </p>
                    <p className="my-8 text-lg sm:text-xl font-normal text-slate-600">
                      <span>Yes, ample parking is available at the venue. Follow the sign for guest parking.</span>
                    </p>
                  </div>
                </div>
              </SlideFromLeft>
              <SlideFromLeft>
                <div style={{ opacity: '1', transform: 'none' }}>
                  <div className="border-b border-black/20 shadow-sm">
                    <p className="text-2xl font-semibold text-slate-900 font-custom2">
                      <span>Can I bring guest?</span>
                    </p>
                    <p className="my-8 text-lg sm:text-xl font-normal text-slate-600">
                      <span>Certainly! We would be delighted for you to bring a guest to share in our special day.</span>
                    </p>
                  </div>
                </div>
              </SlideFromLeft>
            </div>
          </div>
        </section>
      </div>
    </>
  )
}

export default FAQ;