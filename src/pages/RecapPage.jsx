import React /* { useState, useEffect } */ from 'react';
import RecapTitle from '../wed-components/RECAP/RecapTitle';
import NewRecap from '../wed-components/RECAP/recap';
// import CountDown from '../wed-components/Home/CountDown';
// // import recapImg from '../assets/images/recapImg2.png';
// import { Link } from 'react-router-dom';
// import { FaHouse } from 'react-icons/fa6';

const RecapPage = () => {
  // const recapImg = 'https://res.cloudinary.com/dzsuia2ia/image/upload/v1733482107/qeoxjv1jmforzrjch0vw.png';

  // const [isShowRecap, setIsShowRecap] = useState(false);

  // useEffect(() => {
  //   const targetDate = new Date('2025-01-04T12:00:00.000Z');
  //   const currentDate = new Date();

  //   if (currentDate <= targetDate) {
  //     const interValid = setInterval(() => {
  //       const currentDate = new Date();
  //       if (currentDate >= targetDate) {
  //         setIsShowRecap(true);
  //         clearInterval(interValid);
  //       }
  //     }, 1000);

  //     return () => clearInterval(interValid);
  //   } else {
  //     setIsShowRecap(true);
  //   }
  // }, []);


  // if (!isShowRecap) {
  //   return ( 
  //     <div>
  //       <div 
  //         className='w-full h-full flex items-center justify-center' 
  //         style={{ 
  //           width: '100%', 
  //           height: '100vh', 
  //           backgroundImage: `url(${recapImg})`,
  //           backgroundSize: 'cover',
  //           backgroundPosition: 'center',
  //           backgroundRepeat: 'no-repeat',
  //           backgroundColor: '#500850c8'
  //         }}
  //       >
  //         <div className="w-[100%] h-[100%] relative bg-white/0 backdrop-blur-3xl rounded-none shadow-none">
  //           <div className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2">
  //             <span className='flex flex-col items-center justify-center space-y-8'>
  //               <span className='text-xl sm:text-2xl ml-6 md:mx-auto font-bold font-gFont1 text-gray-300 cursor-pointer hover:text-[#f7f4f4] transition-colors duration-500'>
  //                 This page will be available in...
  //               </span>
  //               <CountDown className='cursor-pointer' />
  //               <Link 
  //                 to='/' 
  //                 className='border py-2 px-3 rounded-lg bg-[#f7f4f4] hover:bg-[#d3d3d3] text-base sm:text-lg 2xl:text-2xl transition-colors duration-500 text-gray-800 cursor-pointer' 
  //                 aria-label='Go Back Home'
  //               >
  //                 <span className='flex items-center justify-center space-x-2'>
  //                   <span>Go Back</span>
  //                   <span><FaHouse /></span>
  //                 </span>
  //               </Link>
  //             </span>
  //           </div>
  //         </div>
  //       </div>
  //     </div>
  //   );
  // } 

  return (
    <div className='bg-[#b8b5b5]'>
      <RecapTitle />
      <NewRecap className='overflow-x-hidden' style={{ width: '100vw', height: '100vh' }} />
    </div>
  );
};

export default RecapPage;
