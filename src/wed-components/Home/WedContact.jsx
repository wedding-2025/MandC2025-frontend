import React, { forwardRef } from 'react';
import { FaLocationDot } from 'react-icons/fa6';
import { FaEnvelope } from 'react-icons/fa';
import { FaPhone } from 'react-icons/fa6';

const WedContact = forwardRef((props, ref) => {
  return (
    <>
      <div ref={ref} style={{ width: '100%', opacity: '1' }}>
        <section className="py-10 bg-[#eedcde] sm:py-16 lg:py-20 shadow-inner">
          <div className="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
            <div className="grid justify-items-center grid-cols-1 lg:grid-cols-3 gap-y-12 lg:gap-x-8 xl:gap-x-20">
              <div>
                <h3 className="text-2xl font-semibold text-slate-900">
                  <span>
                  M & C 2025 Contact
                  </span>
                </h3>
                <p className="mt-3 text-base sm:text-lg font-normal text-slate-800">
                  <span>
                  Reach out to us for any questions or additional information.
                  </span>
                </p>
                <div className="mt-10 space-y-5">
                  {/* LOCATION */}
                  <div className="flex items-center">
                    <span className='text-[#7a0646] text-base sm:text-lg'>
                    <FaLocationDot />
                    </span>
                    <span className="block ml-3 text-base sm:text-lg font-medium text-slate-900 underline underline-offset-4">
                      <span>
                      <a href="https://maps.app.goo.gl/vCcLLUoLynrBaVbc7" target='_blank' rel="noopener noreferrer" className="hover:text-[#7a0646] hover:underline hover:opacity-90 transition-all duration-200">Umuojogwo Village, Umuchu</a>
                      </span>
                    </span>
                  </div>
                  {/* CONTACT PHONE */}
                  <div className="flex items-center">
                    <span className='text-[#7a0646] text-base sm:text-lg'>
                    <FaPhone />
                    </span>
                    <span className="block ml-3 text-base sm:text-lg font-medium text-slate-900">
                      <span>
                      <a href="tel:+2348068983123" className='contact-tel'>(+234) 8068983123</a>, <a href="tel:+2347026740751" className='contact-tel'>(+234) 7010631147</a>
                      </span>
                    </span>
                  </div>
                  {/* EMAIL */}
                  <div className="flex items-center">
                    <span className='text-[#7a0646] text-base sm:text-lg'>
                      <a href="mailto:mj.charles2025@gmail.com">
                        <FaEnvelope />
                      </a>
                    </span>
                    <span className="block ml-3 text-base sm:text-lg font-medium text-slate-900 underline underline-offset-4 hover:text-[#7a0646] hover:underline hover:opacity-90 transition-all duration-200">
                      <span>
                      <a href="mailto:mj.charles2025@gmail.com">mj.charles2025@gmail.com</a>
                      </span>
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
});

export default WedContact;