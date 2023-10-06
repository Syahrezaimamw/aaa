import React from 'react'
import './bb.css'
import float from '../images/flow.gif'
const Bb = () => {
  return (
    <div className='containerBb'>
        <div className="wrapperBb">
            <div className="satu">
                <h1>Jadi Ahli Tanpa Batas: Platform</h1>
                <h1 className="h1dua">Peningkatan Kompetensi</h1>
                <h1 className="h1dua">Terdepan</h1>

                <div className="text">
                    <p>Dengan ZenPro, kamu bisa menjadi ahli sejati dalam</p>
                    <p className="dua">berbagai bidang tanpa batas. Gak hanya</p>
                    <p className="dua">menyediakan materi, ZenPro juga memberikan</p>
                    <p className="dua">penilaian kemampuan dan panduan untuk meraih</p>
                    <p className="dua">tingkat keahlian tertinggi. Segera tingkatkan dirimu</p>
                    <p className="dua">dan jadi pro di dunia kerja bareng ZenPro!</p>
                </div>

                <button>Gabung</button>
            </div>
            <div className="duaa">
                <img src={float} alt="" height='750' width='445' />
            </div>
        </div>
      
    </div>
  )
}

export default Bb
