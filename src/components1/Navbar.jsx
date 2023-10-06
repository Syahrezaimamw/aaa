import React from 'react'
import "./navbar.css"
import { FaHome } from 'react-icons/fa';
import { FaChevronDown } from 'react-icons/fa';
import { FaSearch } from 'react-icons/fa';
import { FaDownload } from 'react-icons/fa';
import navbar from "../images/navbar.png"
// import titik from '../images/aa.jpg'
// import {GrLinkBottom} from "react-icons/gr";
import { useNavigate } from 'react-router-dom';

const Navbar = () => {
    const nnavi= useNavigate()
    const navi= useNavigate()
  return (
    <div className='container'>
        <div className="wraperNavbar">
            <div className="menu">
                <ul> 
                    <li><a href="" className='home' onClick={() => nnavi('/')}><FaHome/></a></li>
                    <li><a href="" className='yaass' onClick={() => nnavi('./dua')}>Belajar</a></li>
                    <li><a href="">Primagama</a></li>
                    <li><a href="">ZeniusLand</a></li>
                    <li><a href="" onClick={() => nnavi('./tiga')}>Profesional</a></li>
                </ul>
            </div>
            <div className="nav">
               <div className="one">
                <ul>
                    <img src={navbar} alt=""  c/>
                    <li><a href="" className='fitur'>Fitur <span><FaChevronDown/></span> </a></li>
                    <li><a href="" onClick={() => nnavi('./paketBelajar')}>Paket Belajar</a></li>
                    <li><a href="" >Promo</a></li>
                    <li><a href="">Blog</a></li>
                    <li><a href="">Testimonal</a></li>
                    <li><a href="">Paduan <span><FaChevronDown/></span> </a></li>
                </ul>
               </div>
               <div className="two">
                <ul>
                    <li><a href=""><FaSearch/></a></li>
                    <li><a href=""><FaDownload/></a></li>
                    <li><a href="" className='sign'>Masuk/Daftar</a></li>
                </ul>
               </div>
            </div>
        </div>
        {/* <img src={titik} alt="" /> */}
      
    </div>
  )
}

export default Navbar
