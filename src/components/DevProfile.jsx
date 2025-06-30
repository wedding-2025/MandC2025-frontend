import React from 'react';
import { XCircle, Globe, MapPin, Mail, Phone } from 'lucide-react';
import { FaXTwitter, FaLinkedinIn, FaGithub } from 'react-icons/fa6';
import fav from '../assets/fav.jpg';
// import DubemResume from '../assets/res/DubemResume.pdf';


const DevProfile = ({ 
  setIsPopupOpen,
  name = 'Dubem Umeh',
  title = 'Full Stack Developer',
  location = 'Takoradi, Ghana',
  avatar = fav,
  bio = 'Passionate Developer with 3+ years of experience building scalable web applications. I love creating elegant solutions to complex problems',
  email = 'raphaelumeh21@gmail.com',
  phone = '(233) 559 6394',
  website = 'https://dev.mandc2025.org',
  twitter = 'https://dubem_umeh',
  github = 'https://github.com/dubemUmeh',
  linkedIn = 'https://linkedin.com/in/duben-umeh-raphael'
  }) => {
  /* className='max-h-screen w-full max-w-fit bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 flex justify-center items-center' */

  const socialLinks = [
    { icon: Globe, label: 'website', url: website, color: 'hover:bg-blue-500' },
    { icon: FaXTwitter, label: 'Twitter', url: twitter, color: 'hover:bg-sky-500' },
    { icon: FaGithub, label: 'GitHub', url: github, color: 'hover:bg-gray-500' },
    { icon: FaLinkedinIn, label: 'LinkedIn', url: linkedIn, color: 'hover:bg-blue-600' }
  ]

  // function to download CV

  const downloadCV = () => {
    const link = document.createElement('a');
    link.href = '../assets/res/DubemResume.pdf';
    link.download = 'DubemResume.pdf';
    link.click();
  };

  const sendWhatsappMessage = () => {
    let message = 'Hello Dubem, I would love to inquire more about your web development services';
    if (message.trim()) {
      const phoneNumber = "233559956394";
      const encodedMessage = encodeURIComponent(message); // Encode message for URL
      window.open(`https://wa.me/${phoneNumber}?text=${encodedMessage}`, "_blank");
      
      onSend(message); // Call onSend prop to trigger parent component's handler
      setMessage(''); // Clear textarea after sending
    }
  };

  return (
    <section id='Dev-Profile-Card' className='flex items-center justify-center px-4 md:px-0 py-4'>
      <div className='bg-sky-800/50 backdrop-blur-sm border border-slate-700/50 rounded-3xl py-4 px-4 max-w-md w-full h-full shadow-xl hover:shadow-2xl transition-all duration-500 hover:scale-[1.02]'>
      {/* Header Section */}
        <div className='text-center mb-4'>
          <div className='relative inline-block mb-0'>
            <div className='w-32 h-32 rounded-full bg-gradient-to-br from-blue-400 to-purple-500 p-1 shadow-lg'>
              <img 
                src={avatar} 
                alt={name} 
                className='w-full h-full rounded-full object-cover border-4 border-slate-800'
              />
            </div>
            <div className='absolute bottom-0 -right-0 w-6 h-6 bg-green-500 rounded-full border-slate-800 shadow-lg animate-pulse'></div>
          </div>

          <h1 className='text-2xl font-bold text-white mb-2 tracking-tight'>{name}</h1>
          <p className='text-blue-400 font-medium text-lg mb-2'>{title}</p>
          <div className='flex items-center justify-center text-slate-400 text-sm mb-4'>
            <MapPin className='w-4 h-4 mr-1' />
            {location}
          </div>
        </div>

        {/* Bio Section  */}
        <div className='mb-6'>
          <p className='flex text-center text-slate-300 text-[17px] hover:text-blue-400 transition-colors'>
            {bio}
          </p>
        </div>

        {/* Contact Info */}
        <div className='space-y-3 mb-4'>
          <div className='flex items-center text-slate-300 text-[16px] hover:text-blue-400 transition-colors'>
            <Mail className='w-4 h-4 mr-3 text-blue-400' />
            <a href={`mailto:${email}`} className='hover:underline underline-offset-4'>{email}</a>
          </div>
          <div className='flex items-center text-slate-300 text-[16px] hover:text-blue-400 transition-colors'>
            <Mail className='w-4 h-4 mr-3 text-blue-400' />
            <a href={`tel:${phone}`} className='hover:underline underline-offset-4'>{phone}</a>
          </div>
        </div>

        {/* Action Buttons */}
        <div onClick={sendWhatsappMessage} className='flex gap-3 mb-4'>
          <button className='flex-1 bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white font-semibold py-2 px-4 rounded-xl transition-all duration-300 hover:scale-100 hover:shadow-lg'>
            Hire Me
          </button>
          <button onClick={downloadCV} className='flex-1 bg-slate-700 hover:bg-slate-600 text-white font-semibold py-3 px-4 rounded-xl transition-all duration-300 hover:scale-100 border border-slate-600'>
            Download CV
          </button>
        </div>

        {/* Social Links */}
        <div className='grid grid-cols-4 gap-4'>
          {socialLinks.map(({ icon: Icon, label, url, color }) => (
            <a 
              key={label}
              href={url}
              target='_blank'
              rel='noopener noreferrer'
              className={`group flex flex-col items-center gap-2 p-4 rounded-xl bg-slate-700 transition-all duration-300 hover:scale-100 hover:shadow-lg ${color}`}
            >
              <div className='p-2 rounded-full bg-slate-600 group-hover:bg-slate-500 transition-colors'>
                <Icon className='w-5 h-5 text-white' />
              </div>
              <span className='text-xs text-slate-400 group-hover:text-white font-medium'>
                {label}
              </span>
            </a>
          ))}
        </div>

        {/* Decorative Elements */}
        <div className='absolute top-4 right-6 text-white'>
          <XCircle size={28} className='cursor-pointer' onClick={() => setIsPopupOpen(false)} />
        </div>
      </div>
    </section>
  )
}

export default DevProfile;