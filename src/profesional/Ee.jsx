import React from 'react'
import'./ee.css'
import or from '../images/orang.png'
import prr from '../images/zenpro.png'
import cl from '../images/cl.png'
import ml from '../images/ml.png'
import gl from '../images/gl.png'
const Ee = () => {
  return (
    <div className='containerEe'>
        <div className="wrapperEe">
            <div className="satu">
                <img src={or} alt=""  />
                <h1>Menjadi Pro Bersama Zenpro</h1>
                <button>Gabung Sekarang</button>
            </div>

            <div className="dua">
                <div className="ftr">
                    <img src={prr} alt="" width='160px' height='45px'/>
                    <p className='platform'>Platform pembelajaran adaptif untuk semua kalangan</p>
                    <div className="tm">
                        <div className="mail mfirst">
                            <img src={ml} alt="" width='40px' height='40px' />
                            <a>zenproCS@zeniuseducation.com</a>
                        </div>
                        <div className="mail m">
                            <img src={cl} alt="" width='40px' height='40px'/>
                            <a>(021) 29023334</a>
                        </div>
                        <div className="mail m">
                            <img src={gl} alt="" width='40px' height='40px'/>
                            <a>@zenproid</a>
                        </div>
                    </div>
                </div>
                <div className="ftr2">
                    <div className="about">
                        <h1>About</h1>
                        <p className='abt1'>About us</p>
                        <p className="abt2">Daftar Paket</p>
                        <p className="abt2">Testimonial</p>
                    </div>
                    <div className="support">
                        <h1 className='geserh1'>Support</h1>
                        <p className='abt1'>FAQ</p>
                    </div>
                </div>
            </div>

           
        </div>
       
      
    </div>
  )
}

export default Ee
