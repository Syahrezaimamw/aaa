import React from 'react'
import './san.css'
import master1 from "../images/mstr11.png"
import master2 from "../images/mstr22.png"
import master3 from "../images/mstr33.png"
import master4 from "../images/mstr41.png"
// import master4 from "../images/mstr4 .png"
const Sann = () => {
  return (
    <>
      <div className="master">
        <div className="wrapperMaster">
            <h1>Master Tutors dengan Pengalaman Lebih dari 15 Tahun</h1>
            <div className="gmbrMaster">
                <img src={master1} alt=""  className='tu'/>
                <img src={master2} alt="" />
                <img src={master3} alt="" />
                <img src={master4} alt="" />
            </div>
        </div>
      </div>
    </>
  )
}

export default Sann
