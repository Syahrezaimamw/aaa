import React from 'react'
import './six.css'
import satuu from '../images/tu.png'
import duaa from '../images/wa.jpg'
import tiga from '../images/white.jpg'
import tigaa from '../images/ga.png'
import icfb from '../images/fb.png'
import ictw from '../images/tw.png'
import icwa from '../images/wa.png'
import coment from '../images/commentIcon.png'
const Six = () => {
  return (
    <div className='containerSix'>
        <div className="wrapperSix">

            <div className="satu">
                <h1>Blog</h1>
                <h2 href="">Lihat Semua Artikel</h2>
            </div>
            <div className="dua">
                <div className="kotak ktksatu">
                    <img src={satuu} alt="" />
                    <button>Kuis</button>
                    <h3>Rekomendasi Paket Belajar</h3>
                    <h3 className="h3dua">Zenius yang Cocok Buat...</h3>
                    <div className="ic">
                    <img src={icfb} alt="" />
                    <img src={ictw} alt="" className='ww'/>
                    <img src={icwa} alt="" className='wa'/>
                    </div>

                    <div className="continue cc1">
                        <p className='inti'>–Continue Reading</p>
                        <div className='coment'>
                            <img src= {coment} alt="" />
                            <p>8</p>

                        </div>
                    </div>
                </div>


                <div className="kotak ktkDua">
                    <img src={duaa} alt="" />
                    <button>Info</button>
                    <h3>Dapatkan Beragam</h3>
                    <h3 className="h3dua">Keuntungan Melalui Kode...</h3>

                    <div className="ic">
                    <img src={icfb} alt="" />
                    <img src={ictw} alt="" className='ww' />
                    <img src={icwa} alt="" className='wa' />
                    </div>

                    <div className="textt">
                    <p>Sobat Zenius, pernah nggak sih</p>
                    <p className="pp">punya keinginan buat dapetin</p>
                    <p className="pp">omisi cuman ngajak orang-orang</p>
                    <p className="pp">buat pakai Zenius? Sekarang,</p>
                    <p className="pp">keinginan tersebut bisa elo...</p>
                    </div>

                    
                    <div className="continue">
                        <p className='inti'>–Continue Reading</p>
                        <div className='coment'>
                            <img src= {coment} alt="" />
                            <p>0</p>

                        </div>
                    </div>

                </div>
                <div className="kotak ktkDua" id='ree'>
                    <img src={satuu} alt="" />
                    <button>Info</button>
                    <h3>Kode Promo Zenius</h3>
                   

                    <div className="ic">
                    <img src={icfb} alt="" />
                    <img src={ictw} alt="" className='ww'/>
                    <img src={icwa} alt="" className='wa' />
                    </div>

                    <div className="textt">
                    <p>Spesial untuk Kamu! Click here</p>
                    <p className="pp">CERDASBENERAN Diskon up</p>
                    <p className="pp">to&nbsp;15% untuk paket-paket</p>
                    <p className="pp">belajar berikut: Zen Fokus Gap</p>
                    <p className="pp">Year SaintekZen Fokus Gap Year...</p>
                    </div>

                    
                    <div className="continue">
                        <p className='inti'>–Continue Reading</p>
                        <div className='coment'>
                            <img src= {coment} alt="" />
                            <p>0</p>

                        </div>
                    </div>

                </div>

                {/* <div className="kotak ktkTiga">
                    <img src={tiga} alt="" />
                    <button>Info</button>
                    <h3>Kode Promo Zenius</h3>
                    <h3></h3>
                    <div className="ic ictga">
                    <img src={icfb} alt="" />
                    <img src={ictw} alt="" />
                    <img src={icwa} alt="" className='wa' />
                    </div>

                    <div className="textt">
                    <p>Spesial untuk Kamu! Click here</p>
                    <p className="pp">CERDASBENERAN Diskon up</p>
                    <p className="pp">to&nbsp;15% untuk paket-paket</p>
                    <p className="pp">belajar berikut: Zen Fokus Gap</p>
                    <p className="pp">Year SaintekZen Fokus Gap Year...</p>
                    </div>

                    
                    <div className="continue">
                        <p>–Continue Reading</p>
                        <div className='coment' id='ra'>
                            <img src= {coment} alt="" width='10px' />
                            <p></p>

                        </div>
                    </div>

                </div> */}

                


                <div className="kotak ktkEmpat">
                    <img src={tigaa} alt="" />
                    <button>Zenius Guide</button>
                    <h3>Paket Belajar Zenius Terbaru</h3>
                    <h3 className="h3dua">Buat Persiapan Ujian Sekolah...</h3>

                    <div className="ic">
                    <img src={icfb} alt="" />
                    <img src={ictw} alt="" className='ww'/>
                    <img src={icwa} alt="" className='wa' />
                    </div>

                    <div className="textt">
                    <p>Halo Sobat Zenius, kali ini gue mau</p>
                    <p className="pp">berbagi info mengenai paket</p>
                    <p className="pp">belajar Zenius yang semakin</p>
                    <p className="pp">lengkap dengan fitur-fitur yang</p>
                    <p className="pp">semakin keren. Gue juga akan...</p>
                    </div>

                    
                    <div className="continue">
                        <p className='inti'>–Continue Reading</p>
                        <div className='coment'>
                            <img src= {coment} alt="" />
                            <p>1</p>

                        </div>
                    </div>
                </div>
            </div>
        </div>
      
    </div>
  )
}

export default Six
