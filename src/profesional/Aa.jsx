import React from 'react'
import './aa.css'
import baner from '../images/baner1.png'
import baner2 from '../images/baner2.png'
import baner3 from '../images/baner3.png'
import aro from '../images/Arrow.jpg'
const Aa = () => {
  return (
    <div className='containerAa'>
        <div className="wrapperAa">
            <div className="gambar">
               
               <img src={baner} alt="" />
               <img src={baner2} alt="" className='bt2' id='trrr'/>
               <div className='arrow '><a href="#trrr" className='ui'>X</a></div>
               <div className='arrow rw'><a href="#trrrr">X</a></div>
                {/* <div className="img r"></div> */}
                {/* <div className="img a"></div> */}
               
                {/* <img src={baner} alt="" className='r'/>
                <img src={baner2} alt=""  className='w a'/>
                <img src={baner3} alt="" className='w b'/> */}
            </div>
        </div>
      
    </div>
  )
}

export default Aa
