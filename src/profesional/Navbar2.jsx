import React from 'react'
import pro from '../images/zenpro.png'
import './navbar2.css'
const Navbar2 = () => {
  return (
    <div className='navbarDua'>
      <div className="wrapperNavbar2">
        <div className="satu">
            <img src={pro} alt="" />
            <ul>
                <li className='t'><a href="" className='home'>Home</a></li>
                <li className='r'><a href="">Daftar Paket</a></li>
                <li  className='r' ><a href="">Blog</a></li>
                <li className='r'><a href="">Prakerja</a></li>
            </ul>
        </div>
        <div className="dua">
            <button className='login'>Login</button>
            <button className='sign'>Sign up</button>
        </div>
      </div>
    </div>
  )
}

export default Navbar2
