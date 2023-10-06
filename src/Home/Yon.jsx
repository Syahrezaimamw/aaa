import React from 'react'
import'./yon.css'
import poster1 from'../images/pstr1.png'
import poster2 from'../images/pstr2.png'
import poster3 from'../images/pstr3.png'
import poster4 from'../images/pstr4.png'
const Yon = () => {
  return (
    <div className='containerYon'>
      <div className="wrapperYon">
        <div className="satu">
            <h1>Cek Artikel-artikel Mind-blowing Di Blog Zenius</h1>
            <button className="lihat">
            Lihat blog lainnya
            </button>
        </div>
        <div className="dua">
            <div className="gmbr tu">
                <img src={poster1} alt="" />
                <p>By<span> Zenius Writer</span> on</p>
                <h1>Promo Cicilan dengan</h1>
                <h1 className="h1Dua">Shopee Paylater</h1>
                <div className="btn">
                    <button>info</button>
                    <button className='btnDua'>promo</button>
                </div>
            </div>
            <div className="gmbr">
                <img src={poster2} alt="" />
                <p>By<span> Zenius Writer</span> on</p>
                <h1>Yuk, Bareng Zenius</h1>
                <h1 className="h1Dua">Cerahkan Bangsa!</h1>
                <div className="btn">
                    <button>info</button>
                    <button className='btnDua'>referral</button>
                </div>
            </div>
            <div className="gmbr">
                 <img src={poster3} alt="" />
                 <p>By<span> Zenius Writer</span> on</p>
                 <h1>Download Students Planner</h1>
                <h1 className="h1Dua">Gratis</h1>
                <div className="btn">
                    <button>pdf</button>
                    <button className='btnDua'>free</button>
                </div>
            </div>
            <div className="gmbr">
                 <img src={poster4} alt="" />
                 <p>By<span> Zenius Writer</span> on</p>
                 <h1>Zenius dan Pemkab Buol</h1>
                <h1 className="h1Dua">Gelar Latihan literasi...</h1>
                <div className="btn">
                    <button>event</button>
                    <button className='btnDua'>government</button>
                </div>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Yon
