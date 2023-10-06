import React from 'react'
import './cc.css'
import { FaAngleDown } from "react-icons/fa6";

const Cc = () => {
  return (
    <div className='containerCc'>
        <div className="wrapperCc">
            <div className="text">   <h1>FAQ</h1></div>
         
            <div className="panjang first">
                <p>Apa itu ZenPro?</p>
                <p className="down"><FaAngleDown/></p>
            </div>
            <div className="panjang gr">
                <p>Dimana saya bisa mengakses ZenPro?</p>
                <p className="down"><FaAngleDown/></p>
            </div>
            <div className="panjang gr">
                <p>Mengapa saya tidak bisa login?</p>
                <p className="down"><FaAngleDown/></p>
            </div>
            <div className="panjang gr">
                <p>Bagaimana jika saya lupa sandi?</p>
                <p className="down"><FaAngleDown/></p>
            </div>
            <div className="panjang gr">
                <p>Metode pembayaran apa saja yang digunakan untuk berlanggan ZenPro?</p>
                <p className="down"><FaAngleDown/></p>
            </div>
        </div>
    </div>
    //  font-family: 'Poppins', sans-serif;
  )
}

export default Cc
