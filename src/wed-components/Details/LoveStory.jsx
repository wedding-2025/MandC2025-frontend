import React from 'react';
import StoryImage from '../../assets/img/StoryImg.webp';
import NumberCounter from '../../Animations/NumberCount';

const LoveStory = () => {
  // const StoryImage = 'https://res.cloudinary.com/dzsuia2ia/image/upload/v1733482103/vp3rnobexljdtlbt9aeq.png';

  return (
    <>
      <div style={{ width: '100%', opacity: '1' }}>
        <section className="bg-[#64003c] py-16 sm:py-20">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto max-w-2xl lg:mx-0 lg:max-w-none">
              <p className="text-base font-semibold leading-7 text-[#ffc0cb]">
                <span>A Love Story</span>
              </p>
              <h1 className="mt-2 text-3xl font-bold tracking-tight text-white sm:text-4xl font-custom">
                <span>Our Journey in Numbers</span>
              </h1>
              <div className="mt-10 grid max-w-xl grid-cols-1 gap-8 text-base leading-7 text-slate-300 lg:max-w-none lg:grid-cols-2 font-serif">
                <div>
                  <p>
                    <span>
                      From the moment we met to our engagement, here are the numbers that tell our story.
                    </span>
                  </p>
                  <p className="mt-8">
                    <span>
                      We can't wait to add more milestones with you by our side.
                    </span>
                  </p>
                </div>
                <div>
                  <div className="w-full h-auto md:h-48 object-cover rounded-lg bg-slate-100 aspect-[4/3]" style={{ transform: 'none', opacity: '1', background: 'transparent', position: 'relative' }}>
                    <img src={ StoryImage } alt="StoryImage" className='w-full h-auto md:h-48 object-cover rounded-lg bg-slate-100 aspect-[4/3]'/>
                  </div>
                </div>
              </div>
              <dl className="mt-16 grid grid-cols-1 gap-x-8 gap-y-12 sm:grid-cols-2 sm:gap-y-16 lg:mt-28 lg:grid-cols-4 font-custom">
                <div className="flex flex-col-reverse gap-y-3 border-l border-white/20 pl-6">
                  <dt className="text-base leading-7 text-gray-300">
                    <span>Year(s) Together</span>
                  </dt>
                  <dd className="text-3xl font-semibold tracking-tight text-white">
                    <span>1+</span>
                  </dd>
                </div>

                <div className="flex flex-col-reverse gap-y-3 border-l border-white/20 pl-6">
                  <dt className="text-base leading-7 text-gray-300">
                    <span>Days Engaged</span>
                  </dt>
                  <dd className="text-3xl font-semibold tracking-tight text-white">
                    <span>
                      <NumberCounter from={0} to={365} duration={3} />
                    </span>
                  </dd>
                </div>

                <div className="flex flex-col-reverse gap-y-3 border-l border-white/20 pl-6">
                  <dt className="text-base leading-7 text-gray-300">
                    <span>Guests Invited</span>
                  </dt>
                  <dd className="text-3xl font-semibold tracking-tight text-white">
                    <span>?</span>
                  </dd>
                </div>

                <div className="flex flex-col-reverse gap-y-3 border-l border-white/20 pl-6">
                  <dt className="text-base leading-7 text-gray-300">
                    <span>Events Planned</span>
                  </dt>
                  <dd className="text-3xl font-semibold tracking-tight text-white">
                    <span>2</span>
                  </dd>
                </div>
              </dl>
            </div>
          </div>
        </section>
      </div>
    </>
  )
}

export default LoveStory;