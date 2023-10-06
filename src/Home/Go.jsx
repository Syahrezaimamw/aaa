import React from 'react'
import './go.css'
import foto1 from '../images/foto1.png'
import foto2 from '../images/foto2.png'
import foto3 from '../images/foto3.png'
import foto4 from '../images/foto4.png'
import logo from '../images/logoProfil.png'
import testi1 from '../images/testi1.png'
import testi2 from '../images/testi2.png'
import testi3 from '../images/testi3.png'
import testi4 from '../images/testi4.png'
const Go = () => {
  return (
    <div className='containerGo' >
        <div className="wrapperGo">
            <div className="text">
            <h1>Kata Mereka yang Pernah Belajar di Zenius</h1>
            </div>



            <div className="gmbr one">
            <div className="isi">
                <img src={testi1} alt="" />
                <div className="profil">
                     <img src={foto1} alt="" />
                     <div className='text'>
                        <p>Redi Sunarta</p>
                        <p className="dua">Ilmu ekonomi - Universitas</p>
                        <p className="dua">Indonesia</p>
                     </div>
                     <img src={logo} alt="" className='logo logosatu' />
                </div>
               
            </div>
       
       
            <div className="isi">
            <img src={testi2} alt="" />
            <div className="profil">
                     <img src={foto2} alt="" />
                     <div className='text'>
                        <p>Melissa Anggiarti</p>
                        <p className="dua">Piloot - garuda Indonesia</p>
                     </div>
                     <img src={logo} alt="" className='logo logo'/>
                </div>
            </div>
        
        
            <div className="isi">
            <img src={testi3} alt="" />
            <div className="profil">
                     <img src={foto3} alt="" />
                     <div className='text'>
                        <p>Agam Sayh Fadila</p>
                        <p className="dua">Ilmu Komunikasi - UGM</p>
                     </div>
                     <img src={logo} alt="" className='logo' />
                </div>
            </div>
       
        
            <div className="isi">
            <img src={testi4} alt="" />
            <div className="profil">
                     <img src={foto4} alt="" />
                     <div className='text'>
                        <p>Stefanus Deo Alfian</p>
                        <p className="dua">Teknik Mesin - ITB</p>
                     </div>
                     <img src={logo} alt=""
                     className='logo' />
                </div>
            </div>
        </div>
        </div>
       
      
    </div>
  )
}
// font-family:'Maven Pro', sans-serif  ;

export default Go
