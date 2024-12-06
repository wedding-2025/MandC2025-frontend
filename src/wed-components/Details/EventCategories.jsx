import React from 'react';
import { FaCalendarDays } from 'react-icons/fa6';
import { FaChurch } from 'react-icons/fa';
import TradIcon from '../../assets/images/TradIcon.png';
import SlideFromRight from '../../Animations/SlideFromRight';

const EventCategories = () => {
  return (
    <>
      <div style={{ width: '100%', opacity: '1' }}>
        <section className="px-4 py-10 bg-[#f3e4e6] sm:py-16 lg:py-20 shadow-none">
          <div className="mx-aut0 px-6 py-10 max-w-7xl shadow-xl rounded-2xl shadow-black/70">
            <div className="text-center">
              <h2 className="text-4xl font-semibold text-slate-900 font-custom">
                <span>Event Categories</span>
              </h2>
            </div>
            <div className="grid gap-5 mt-12 sm:grid-cols-2 xl:grid-cols-3 sm:gap-8 xl:gap-12">
              <SlideFromRight>
                <div style={{ opacity: '1', transform: 'none' }}>
                  <div className="relative overflow-hidden transition-all duration-500 rounded-lg bg-[#e7949c] hover:bg-[#ee7783]">
                    <div className="p-6 lg:px-10 lg:py-8">
                      <div className="flex items-center space-x-8">
                        <span>
                          <span className="text-2xl text-[#7a0646]" style={{ position: 'relative' }}>
                            <span><FaCalendarDays /></span>
                          </span>
                        </span>
                        <div className="w-px h-12 bg-black/30"></div>
                        <div>
                          <h3 className="text-lg font-semibold text-slate-900 font-sans">
                            <span>Pre-Wedding Functions</span>
                          </h3>
                          <p className="mt-2 text-lg font-normal text-slate-800">
                            <span>1</span>
                          </p>
                        </div>
                      </div>
                    </div>
                </div>
                </div>
              </SlideFromRight>
              <SlideFromRight>
                <div style={{ opacity: '1', transform: 'none' }}>
                  <div className="relative overflow-hidden transition-all duration-500 rounded-lg bg-[#e7949c] hover:bg-[#ee7783]">
                    <div className="p-6 lg:px-10 lg:py-8">
                      <div className="flex items-center space-x-8">
                        <span>
                          <span className="text-2xl text-[#7a0646]" style={{ position: 'relative' }}>
                            <span><FaChurch /></span>
                          </span>
                        </span>
                        <div className="w-px h-12 bg-black/30"></div>
                          <div>
                            <h3 className="text-lg font-semibold text-slate-900 underline underline-offset-4 font-sans">
                              <span><a href="https://maps.app.goo.gl/PQrqnmtmYnceX5hs7" target='_blank'>Church Wedding</a></span>
                            </h3>
                            <p className="mt-2 text-lg font-normal text-slate-900">
                              <span>Time - 10:00 am</span>
                            </p>
                          </div>
                      </div>
                    </div>
                  </div>
                </div>
              </SlideFromRight>
              <SlideFromRight>
                <div style={{ opacity: '1', transform: 'none' }}>
                  <div className="relative overflow-hidden transition-all duration-500 rounded-lg bg-[#e7949c] hover:bg-[#ee7783]">
                    <div className="p-6 lg:px-10 lg:py-8">
                      <div className="flex items-center space-x-8">
                        <span>
                          <span className="text-[#7a0646]" style={{ position: 'relative', width: '25px', height: '25px', lineHeight: '32px', objectFit: 'contain' }}>
                            <span><img src={ TradIcon } alt="TradLogo" style={{ width: '25px', height: '25px', lineHeight: '32px', objectFit: 'contain' }} /></span>
                          </span>
                        </span>
                        <div className="w-px h-12 bg-black/30"></div>
                        <div>
                          <h3 className="text-lg font-semibold text-slate-900 underline underline-offset-4 font-sans">
                            <span><a href="https://maps.app.goo.gl/vCcLLUoLynrBaVbc7" target='_blank'>Traditional Marriage</a></span>
                          </h3>
                          <p className="mt-2 text-lg font-normal text-slate-900">
                            <span>Time - 2:00 pm</span>
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </SlideFromRight>
            </div>
          </div>
        </section>
      </div>
    </>
  )
}

export default EventCategories;