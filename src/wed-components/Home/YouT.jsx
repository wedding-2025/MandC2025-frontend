import React from 'react'
import { Link } from 'react-router-dom';

const YouT = () => {
  return (
    <section id='youtube-link' className='bg-[#facccf]'>
      <div className='w-full h-full flex items-center justify-between'>
        <div className='w-full h-full flex items-center justify-center py-5'>
          <iframe 
            className='rounded-lg shadow-lg shadow-gray-500 w-full max-w-[400px] h-[250px] md:max-w-2xl md:h-[400px] lg:max-w-5xl lg:h-[520px] xl:max-w-6xl'
            src="https://www.youtube.com/embed/4k0qWbsXxhM?si=towBFtfBdbQiCjkd"
            title="YouTube video player" 
            frameborder="0" 
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
            referrerpolicy="strict-origin-when-cross-origin" 
            allowfullscreen>
          </iframe>
        </div>
        {/* <div className='my-3 flex items-center justify-center'>
          <Link to='/recap' className='text-white bg-[#f7568c] font-medium border-0 py-2 xl:py-3 px-6 focus:outline-none hover:bg-[#fa86ac] rounded-lg text-base sm:text-lg 2xl:text-2xl transition-colors duration-500">'>
            View Image Gallery
          </Link>
        </div> */}
      </div>
    </section>
  )
}

export default YouT;