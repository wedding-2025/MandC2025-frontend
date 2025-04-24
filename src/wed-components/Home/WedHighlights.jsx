import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import SlideFromBottom from '../../Animations/SlideFromBottom';
import DSC_0662 from '../../assets/img/DSC_0662.webp';
import DSC_0748 from '../../assets/img/DSC_0748.webp';

const WedHighlights = () => {
  const [imageLoaded, setImageLoaded] = useState({ church: false, traditional: false });
  const [imageError, setImageError] = useState({ church: false, traditional: false });

  const handleImageLoad = (type) => {
    setImageLoaded(prev => ({ ...prev, [type]: true }));
  };

  const handleImageError = (type) => {
    setImageError(prev => ({ ...prev, [type]: true }));
    console.error(`Failed to load ${type} image`);
  };

  const images = [
    {
      church: DSC_0662,
      traditional: DSC_0748,
    }
  ];

  return (
    <>
      <div style={{ width: '100%', opacity: '1' }}>
        <section className="py-12 bg-[#f5b7cc]/50 sm:py-16 lg:py-20">
          <div className="px-4 mx-auto max-w-7xl flex flex-col sm:px-6 lg:px-8">
            <div className="max-w-2xl mx-auto text-center">
              <p className="text-lg font-medium text-slate-700 mb-8 underline underline-offset-4">
                Discover the key moments that will make our wedding unforgettable.
              </p>
              <h2 className="text-3xl font-bold text-slate-900 sm:text-4xl xl:text-5xl font-custom">
                Wedding Highlights
              </h2>
            </div>

            <SlideFromBottom>
              <div className="flex flex-col md:flex-row mt-10 md:mt-20 gap-10 md:gap-16 text-center md:text-left">
                {/* CHURCH WEDDING */}
                <Link to="/recap" className="w-full">
                  <div className="flex flex-col items-center md:items-start p-4 bg-red-300 border-2 border-gray-200 rounded-3xl shadow-md shadow-slate-600 w-full">
                    <h3 className="text-2xl font-bold text-slate-900 font-custom">Church Wedding</h3>
                    <p className="mt-4 text-lg leading-7 text-slate-900">
                      A heartfelt church wedding where we exchange our vows.
                    </p>
                    <div className="mt-6">
                      <img
                        src={images[0].church}
                        alt="Church Wedding"
                        className={`object-cover w-full rounded-lg aspect-[4/3] bg-slate-100 ${!imageLoaded.church ? 'animate-pulse' : ''}`}
                        onLoad={() => handleImageLoad('church')}
                        onError={() => handleImageError('church')}
                        loading='lazy'
                      />
                    </div>
                    <p className="text-base leading-7 text-slate-800 mt-4">
                      Join us as we promise to love and cherish each other forever.
                    </p>
                  </div>
                </Link>
                {/* TRADITIONAL MARRIAGE */}
                <Link to="/recap" className="w-full">
                  <div className="flex flex-col items-center md:items-start p-4 bg-red-300 border-2 border-gray-200 rounded-3xl shadow-md shadow-slate-600 w-full">
                    <h3 className="text-2xl font-bold text-slate-900 font-custom">Traditional Marriage</h3>
                    <p className="mt-4 text-lg leading-7 text-slate-900">
                      Traditional Rites/Marriage at the bride's residence.
                    </p>
                    <div className="mt-6">
                      <img
                        src={images[0].traditional}
                        alt="Traditional Marriage"
                        className={`object-cover w-full rounded-lg aspect-[4/3] bg-slate-100 ${!imageLoaded.traditional ? 'animate-pulse' : ''}`}
                        onLoad={() => handleImageLoad('traditional')}
                        onError={() => handleImageError('traditional')}
                        loading='lazy'
                      />
                    </div>
                    <p className="text-base leading-7 text-slate-800 mt-4">
                      Dance, dine, and celebrate our love.
                    </p>
                  </div>
                </Link>
              </div>
            </SlideFromBottom>
          </div>
        </section>
      </div>
    </>
  );
};

export default WedHighlights;