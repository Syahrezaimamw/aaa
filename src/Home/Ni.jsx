import React from 'react'
import './ni.css'
import satu from '../images/satu.png'
import dua from '../images/dua.png'
import tiga from '../images/tiga.png'
import yt from '../images/yt.jpeg'
import { FaPlay } from "react-icons/fa6";
const Ni = () => {
  return (
    <>
    <div className='containerNi'>
        <div className="wrapperNi" >
            <div className="satu">
                <h1>Gimana Zenius Bisa #BikinCerdasBeneran</h1>
                <div className="seemore">See More</div>
            </div>
            <div className="dua" id='y'>
                <img src={satu} alt="" />
                <img src={dua} alt="" />
                <img src={tiga} alt="" />
            </div>
        </div>
      
    </div>
    <div className="containerNiTwo">
        <div className="wrapperNiTwo">
            <h1>Tonton Kisah Inspiratif Para Alumni Zenius</h1>
            <div className="gm">
            <img src={yt} alt="" />
            <div className="bulet">
                <div className="segitiga"><FaPlay/>
                <a href="#rtt">X</a>
                
                </div>
            </div>
            </div>
            <div className="ee" id='rtt'>
                <iframe width="700" height="400" src='https://www.youtube.com/embed/OUywzVJw_Z4?si=ZtZ873tRnl9peLqV' ></iframe>
                </div>
        </div>
        
    </div>
    </>
  )
}

export default Ni
