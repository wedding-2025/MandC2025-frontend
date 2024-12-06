import React from 'react';
import { 
  FaDoorOpen,
  FaHeart,
} from 'react-icons/fa';
import { FaChampagneGlasses } from 'react-icons/fa6';

const WedTimeLine = () => {
  return (
    <>
      <div style={{ width: '100%', opacity: '1' }}>
        <section className="py-10 bg-[]">
          <div className="px-4 mx-auto max-w-7xl py-10 flex flex-col gap-16">
            <div style={{ opacity: '1', transform: 'none' }}>
              <div className="max-w-3xl mx-auto text-center flex flex-col gap-6">
                <h2 className="text-4xl font-semibold text-slate-900 font-custom2">
                  <span>
                    Wedding / Traditional Marriage Day Timeline
                  </span>
                </h2>
                <p className="max-w-lg mx-auto text-base sm:text-lg md:text-xl font-normal text-slate-600">
                  <span>
                    Here's what to expect on the big day. <span className='text-slate-900'>Jan 4th 2025!</span>
                  </span>
                </p>
              </div>
            </div>
            <div style={{ opacity: '1', transform: 'none' }}>
              <ul className="max-w-md mx-auto space-y-12">
                <li className="relative flex items-start">
                  <div className="-ml-0.5 absolute mt-0.5 top-12 left-8 h-[100%] w-px border-l-4 border-dotted border-black/40"></div>
                  <div className="relative flex items-center justify-center flex-shrink-0 w-16 h-16 bg-white border border-black/15 shadow-md rounded-full">
                    <span className="text-[#e70d8c] text-lg sm:text-xl md:text-3xl">
                      <FaDoorOpen />
                    </span>
                  </div>
                  <div className="ml-6">
                    <h3 className="text-base sm:text-xl font-semibold text-slate-900 font-custom2">
                      <span>
                      Arrival & Welcome
                      </span>
                    </h3>
                    <p className="mt-4 text-base sm:text-lg font-normal text-slate-600">
                      <span>
                        Guests arrive and are welcomed.
                      </span>
                    </p>
                  </div>
                </li>
                <li className="relative flex items-start">
                  <div className="absolute -ml-0.5 mt-0.5 top-14 left-8 h-[100%] w-px border-l-4 border-dotted border-black/40"></div>
                  <div className="relative flex items-center justify-center flex-shrink-0 w-16 h-16 bg-white border border-black/15 shadow-md rounded-full">
                    <span className="text-[#e70d8c] text-lg sm:text-xl md:text-3xl">
                      <FaHeart />
                    </span>
                  </div>
                  <div className="ml-6">
                    <h3 className="text-base sm:text-xl font-semibold text-slate-900 font-custom2">
                      Wedding Ceremony
                    </h3>
                    <p className="mt-4 text-base sm:text-lg font-normal text-slate-600">
                      <span>
                        <span className='text-slate-700 font-semibold'>At 10:00 am, </span> the beautiful wedding ceremony will begin <span className='text-slate-700 font-semibold'>at Holy Name Catholic Church Umuchu.</span>
                      </span>
                    </p>
                  </div>
                </li>
                <li className="relative flex items-start">
                  <div className="relative flex items-center justify-center flex-shrink-0 w-16 h-16 bg-white border border-black/15 shadow-md rounded-full">
                    <span className="text-[#e70d8c] text-lg sm:text-xl md:text-3xl">
                      <FaChampagneGlasses />
                    </span>
                  </div>
                  <div className="ml-6">
                    <h3 className="text-base sm:text-xl font-semibold text-slate-900 font-custom2">
                      Traditional Marriage
                    </h3>
                    <p className="mt-4 text-base sm:text-lg font-normal text-slate-600">
                      <span>
                      <span className='text-slate-700 font-semibold'>At 02:00 pm, </span>Join us for a delightful <span className='font-semibold text-slate-700'>Traditional Marriage @ Ezeifesie Compound Umuojogwo Village Umuchu Aguata L.G.A. Anambra State (Bride's Residence).</span>
                      </span>
                    </p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </section>
      </div>
    </>
  )
}

export default WedTimeLine