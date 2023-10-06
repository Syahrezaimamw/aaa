import React from 'react'
import './three.css'
import { FaDownload } from 'react-icons/fa';
import { FaArrowRightToBracket } from "react-icons/fa6";
// import 
import atas from '../images/tee.png'
import atas2 from '../images/tee2.png'
import atas3 from '../images/tee3.png'
import atas4 from '../images/tee4.png'
import bawah1 from '../images/teeb1.png'
import bawah2 from '../images/teeb2.png'
import bawah3 from '../images/teeb3.png'
import bawah4 from '../images/teeb4.png'

// import atas2 from '../images/Three2.png/'
// import atas3 from '../images/Three3.png/'
// import atas4 from '../images/Three4.png/'
// import bawah1 from '../images/Three2Satu.png/'
// import bawah2 from '../images/three2Dua.png/'
// import bawah3 from '../images/Three2Tiga.png/'
// import bawah4 from '../images/three2Empat.png/'
const Three = () => {
  return (
    <div className='containerThree'>
      <div className="wrapperThree">
        <div className="a">
            <h1>ZenUTBK</h1>
            <button>
                <h4><FaArrowRightToBracket/></h4>
                <p>Download PDF Soal-soal UTBK</p>
            </button>
        </div>
        <div className="b">
            <ul>
                <li>Materi UTBK</li>
            </ul>
            <div className="gmbr">
                <div className="r">
                    <img src={atas} alt="" />
                    <p>Penalaran Umum</p>
                </div>
                <div className="r">
                    <img src={atas2} alt="" />
                    <p>PK & Penalaran</p>
                    <p className="dua">Matematika</p>
                </div>
                <div className="r">
                    <img src={atas3} alt="" />
                    <p>PBM, PPU, dan</p>
                    <p className='dua'>Literasi B.</p>
                    <p className='dua'>Indonesia</p>
                </div>
                <div className="r">
                    <img src={atas4} alt="" />
                    <p>Literasi Bahasa</p>
                    <p className="dua">Inggris</p>
                </div>
            </div>
        </div>
        <div className="b">
        
            <ul>
                <li>Latihan UTBK</li>
            </ul>
            <div className="gmbr">
                <div className="r">
                    <img src={bawah1} alt="" />
                    <p>Soal-soal</p>
                    <p className="dua">Penalaran Umum</p>
                </div>
                <div className="r">
                <img src={bawah2} alt="" />
                <p>Soal-soal PK &</p>
                <p className="dua">Penalaran</p>
                <p className="dua">Matematika</p>
                </div>
                <div className="r">
                <img src={bawah3} alt="" />
                <p>Soal-soal PBM,</p>
                <p className="dua">PPU, dan Literasi</p>
                <p className="dua">B. Indonesia</p>
                </div>
                <div className="r">
                <img src={bawah4} alt="" />
                <p>Soal-soal Literasi</p>
                <p className="dua">Bahasa Inggris</p>
                </div>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Three
