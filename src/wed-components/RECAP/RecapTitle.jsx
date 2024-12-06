import React from 'react';

const RecapTitle = () => {
  return (
    <>
      <div style={{ width: '100%', opacity: '1' }}>
        <div className="bg-[#b8b5b5] px-6 py-24 sm:py-32 lg:px-8">
          <div className="mx-auto my-6 max-w-4xl text-center">
            <h2 className="text-4xl font-bold tracking-tight text-slate-900 sm:text-6xl font-custom">
              <span>Missed the Wedding ?</span>
            </h2>
            <div>
              <p className="mt-6 text-lg sm:text-2xl text-slate-800 leading-8">
                <span>Don't worry, here you can watch and as well <span className="font-semibold font-mono">share</span><span className='font-semibold font-mono'>(</span><span className='tracking-tighter font-light leading-4 text-[#832e60]'>with the Upload button below</span><span className='font-semibold font-mono'>)</span> the <span className="font-semibold font-mono">Summary</span> of what happened at the wedding!</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default RecapTitle;