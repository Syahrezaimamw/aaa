import React from 'react'
import './four.css'
import { FaArrowRightToBracket } from "react-icons/fa6";
import boc from '../images/loaySatu.png'
import boc2 from '../images/loayDua.png'

import s from '../images/s.png'
import y from '../images/y.png'
import a from '../images/a.png'
import h from '../images/h.png'
import r from '../images/r.png'
import math from '../images/math.jpg'
import bul1 from '../images/bultu.png'
import bul2 from '../images/bultudua.png'
import bul3 from '../images/bultiga.png'
import bul4 from '../images/bulempat.png'
import bul5 from '../images/bullima.png'
const Four = () => {
  return (
    <div className='containerFour'>
      <div className="wrapperFour">
        <div className="satu">
            <h1>AKM SMA</h1>
            <div className="gmbr">
              <div className="satuSatu">
                <img src={boc2} alt="" />
                <p>Materi Numerasi</p>
                </div>
                
                <div className="satuDua">
                <img src={boc} alt="" className='rr' />
                <p>Materi Literasi</p>
                </div>
            </div>
        </div>
        <div className="dua">
            <div className="down">
                <h1>Pelajaran Sekolah</h1>
                <button>
                <h4><FaArrowRightToBracket/></h4>
                <p>Download PDF Soal-soal pelajaran sekolah</p>
                </button>
            </div>
            <div className="gmbr ww">
              <div className="bulet">


                <div className="tp">
                < img src={s} className="b bg" id='blsatu'/>
                <p>Matematika Wajib</p>
                </div>

                <div className="tp la">
                < img src={s} className="b bg" id='blsatu'/>
                <p>Matematika</p>
                <p className="pdua">Peminatan</p>
                </div>

                <div className="tp la">
                < img src={y} className="b bg" id='blsatu'/>
                <p>Fisika</p>
                </div>

                <div className="tp la">
                {/* <div className="b bg" id='bltiga'></div> */}
                < img src={a} className="b bg" id='blsatu'/>
                <p>Biologi</p>
                </div>

                <div className="tp la">
                {/* <div className="b bg" id='blempat'></div> */}
                < img src={h} className="b bg" id='blsatu'/>
                <p>Kimia</p>
                </div>

                <div className="tp la">
                {/* <div className="b bg" id='bllima'></div> */}
                < img src={r} className="b bg" id='blsatu'/>
                <p>Ekonomi</p>
                </div>
              </div>


              <div className="bulet buldua ">

                <div className="tp">
                {/* <div className="b" id='blenam'></div> */}
                < img src={bul1} className="b " id='blenam'/>
                <p>Geografi</p>
                </div>

                <div className="tp la">
                {/* <div className="b bg" id='bltujuh'></div> */}
                < img src={bul2} className="b " id='bltujuh'/>
                <p>Sosiologi</p>
                </div>

                <div className="tp la">
                {/* <div className="b bg" id='bldelapan'></div> */}
                < img src={bul3} className="b " id='bldelapan'/>
                <p>Sejarah Indonesia</p>
                </div>

                <div className="tp la">
                {/* <div className="b bg" id='bldelapan'></div> */}
                < img src={bul3} className="b " id='bldelapan'/>
                <p>Sejarah Peminatan</p>
                </div>

                <div className="tp la">
                {/* <div className="b bg" id='blsembilan'></div> */}
                < img src={bul4} className="b " id='blsembilan'/>
                <p>Bahasa Inggris</p>
                </div>

                <div className="tp la">
                {/* <div className="b bg" id='blsepuluh'></div> */}
                < img src={bul5} className="b " id='blsepuluh'/>
                <p>Bahasa Indonesia</p>
                </div>
              </div>
                {/* <img src={} alt="" /> */}
            </div>
        </div>
      </div>
    </div>
  )
}

export default Four
