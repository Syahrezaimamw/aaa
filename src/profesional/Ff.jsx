import React from 'react'
import './ff.css'
import { FaFacebook } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa6";
import { FaTwitter } from "react-icons/fa6";
import { FaDiscord } from "react-icons/fa6";
import { FaYoutube } from "react-icons/fa6";
const Ff = () => {
  return (
    <div className='containerFf'>
        <div className="wrapperFf">
            <p className='pt'>© PT Zona Edukasi Nusantara, 2023</p>
            <div className="icon">
                <p><FaFacebook/></p>
                <p><FaInstagram/></p>
                <p><FaTwitter/></p>
                <p><FaDiscord/></p>
                <p><FaYoutube/></p>
            </div>
        </div>
      
    </div>
  )
}

export default Ff
