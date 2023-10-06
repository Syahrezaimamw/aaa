import React from 'react'
import'./one.css'
import arow from '../images/ara.jpg'
import { FaChevronDown } from "react-icons/fa6"
// import Empat from '../components1/Empat'
const One = () => {
  return (
    <div className='yaya'>
      <div className="wrapperOne">
        <div className="ktk1">
          <p className='txt1'>Kelas 12</p>
          <h1 className="txt2"><FaChevronDown/></h1>
        </div>
        <div className="ktk2">
          <p className='u'>Mau belajar apa hari ini?</p>
          {/* <input type='text' value=' belajar apa hari ini?' className='u'/> */}
          <img src={arow} alt="" />
          
        </div>
      </div>
      
    </div>
  )
}

export default One
