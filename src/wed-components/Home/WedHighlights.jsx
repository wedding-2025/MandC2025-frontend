import React from 'react';
// import ceremony from '../../assets/images/ceremony.png';
// import reception from '../../assets/images/reception.png';
// import afterParty from '../../assets/images/afterParty.png';
import SlideFromBottom from '../../Animations/SlideFromBottom';

const WedHighlights = () => {
  const images = [
    {
      ceremony: 'https://res.cloudinary.com/dzsuia2ia/image/upload/v1733482107/ozrldmdetbhsnttzwgds.png',
      reception: 'https://res.cloudinary.com/dzsuia2ia/image/upload/v1733482103/zkfqtnxdszoxsril7m6f.png',
      afterParty: 'https://res.cloudinary.com/dzsuia2ia/image/upload/v1733482107/rcmn3totn81svhowksaw.png'
    }
  ]

  return (
    <>
      <div style={{ width: '100%', opacity: '1' }}>
        <section className="py-12 bg-[#f5b7cc]/50 sm:py-16 lg:py-20">
          <div className="px-4 mx-auto max-w-7xl flex flex-col sm:px-6 lg:px-8">
            <div className="max-w-2xl mx-auto text-center">
              <p className="text-lg font-medium text-slate-700">
                Discover the key moments that will make our wedding unforgettable.
              </p>
              <h2 className="mt-5 text-3xl font-bold text-slate-900 sm:text-4xl xl:text-5xl font-custom">
                Wedding Highlights
              </h2>
            </div>

            <SlideFromBottom>
              <div className="flex flex-col md:flex-row mt-10 md:mt-20 gap-10 md:gap-16 text-center md:text-left">
                {/* CHURCH WEDDING */}
                <div className="flex flex-col items-center md:items-start">
                  <h3 className="text-2xl font-bold text-slate-900 font-custom">Church Wedding</h3>
                  <p className="mt-4 text-lg leading-7 text-slate-900">
                    A heartfelt church wedding where we exchange our vows.
                  </p>
                  <div className="mt-6">
                    <img
                      src={images[0].ceremony}
                      alt="Church Wedding"
                      className="object-cover w-full rounded-lg aspect-[4/3] bg-slate-100"
                    />
                  </div>
                  <p className="text-base leading-7 text-slate-700 mt-4">
                    Join us as we promise to love and cherish each other forever.
                  </p>
                </div>
                {/* TRADITIONAL MARRIAGE */}
                <div className="flex flex-col items-center md:items-start">
                  <h3 className="text-2xl font-bold text-slate-900 font-custom">Traditional Marriage</h3>
                  <p className="mt-4 text-lg leading-7 text-slate-900">
                    Traditional Rites/Marriage at the bride's residence.
                  </p>
                  <div className="mt-6">
                    <img
                      src={images[0].reception}
                      alt="Traditional Marriage"
                      className="object-cover w-full rounded-lg aspect-[4/3] bg-slate-100"
                    />
                  </div>
                  <p className="text-base leading-7 text-slate-700 mt-4">
                    Dance, dine, and celebrate our love.
                  </p>
                </div>
                {/* AFTER PARTY */}
                <div className="flex flex-col items-center md:items-start">
                  <h3 className="text-2xl font-bold text-slate-900 font-custom">After Party</h3>
                  <p className="mt-4 text-lg leading-7 text-slate-900">
                    An unforgettable evening of fun and laughter.
                  </p>
                  <div className="mt-[50px]">
                    <img
                      src={images[0].afterParty}
                      alt="After Party"
                      className="object-cover w-full rounded-lg aspect-[4/3] bg-slate-100"
                    />
                  </div>
                  <p className="text-base leading-7 text-slate-700 mt-4">
                    Let's continue the celebration with music and joy.
                  </p>
                </div>
              </div>
            </SlideFromBottom>
          </div>
        </section>
      </div>
    </>
  );
};

export default WedHighlights;