import React from 'react'
import { FaWhatsapp,FaFacebook,FaInstagram, FaTwitter } from "react-icons/fa";
const Footer = () => {
  return (
    <div className='w-full flex items-center justify-center bg-black h-[25vh]'>
        <div className='flex h-[25vh] w-[50vh] py-8 flex-col gap-2'><div className='flex gap-2 text-3xl justify-center text-white'><FaWhatsapp/><FaFacebook/><FaInstagram/><FaTwitter/></div><div className='text-white text-2xl text-center'>Made in India</div></div>
    </div>
  )
}

export default Footer