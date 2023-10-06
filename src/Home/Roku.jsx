import React from 'react'
import './roku.css'
import iconInstagram from '../images/icon-instagram.png'
import iconFacebook from '../images/icon-facebook.png'
import iconTiktok from '../images/icon-tiktok.png'
import iconTwitter from '../images/icon-twitter.png'
import iconYoutube from '../images/icon-youtube.png'
import playstore from '../images/playstore.png'
import app from '../images/app.png'
import galeri from '../images/galeri.png'
import logo from '../images/zeniusLogo.jpg'
import mail from '../images/mail.jpg'
import telfon from '../images/tlfn.jpg'

function Roku() {
  return (
    <div className='containerRoku'>
        <div className="wrapperRoku">
            <div className="satu">
                <div className="ichi ktkSatu">
                    <img src={logo} alt="" />
                    <h2>Bimbel online interaktif pertama di</h2>
                    <h2 className="h2dua">Indonesia</h2>
                </div>
                <div className="ni ktkSatu">
                    <h3>PERANGKAT BELAJAR</h3>
                    <a className='pOne'>ZenCore</a>
                    <a className="pTwo">ZenPractice</a>
                    <a className="pTwo">ZenBot</a>
                    <a className="pTwo">Zenius TryOut</a>
                    <a className="pTwo">Live</a>
                </div>
                <div className="tree ktkSatu">
                    <h3>BLOG</h3>
                    <a className='pOne'>Materi Pelajaran</a>
                    <a className="pTwo">Zenius Insights</a>
                    <a className="pTwo">Ujian</a>
                    <a className="pTwo">Zenius Kampus</a>
                    <a className="pTwo">Zenius Tips</a>
                </div>
                <div className="four ktkSatu">
                    <h3>TENTANG KAMI</h3>
                    <a className='pOne'>About Us</a>
                    <a className="pTwo">We Are Hiring</a>
                    <a className="pTwo">Testimonial</a>
                    <a className="pTwo">Pusat Bantuan</a>
                    
                   
                </div>
                <div className="five ktkSatu">
                    <h3>HUBUNGI KAMI</h3>
                    <div className="mail r"> <img src={mail} alt="" />
                   
                    <a href="">cs@zeniuseducation.com</a>
                    </div>
                   
                   <div className="telfon r">                    <img src={telfon} alt="" />
                   <a>(021) 29023334</a>
                   </div>

                </div>
            </div>
            <div className="dua">
                <p>© PT Zona Edukasi Nusantara, 2023.</p>
                <a className='tw b'>Kebijakan Privasi </a>
                <a className='tw'> Ketentuan Penggunaan</a>
              <div className="marker">
                <img src={playstore} alt="" className='black t left'/>
                <img src={app} alt="" className='black' id='geser'   />
                <img src={galeri} alt="" className='black t 'id='geser2' />
            </div>
            <div className="iconborder">
                <img src={iconFacebook} alt="" className='icon first' />
                <img src={iconTwitter} alt="" className='icon' />
                <img src={iconYoutube} alt="" className='icon'/>
                <img src={iconInstagram} alt="" className='icon'/>
                <img src={iconTiktok} alt="" className='icon' />
            </div>
            </div>
        </div>
      
    </div>
  )
}

export default Roku
