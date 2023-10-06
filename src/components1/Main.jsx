import React from 'react'
import "./main.css"

const Main = () => {
  return (
    <div className='containerr'>
      <div className="wrapper">
        <div className="one">
            <h1>Solusi Belajar #BikinCerdasBeneran yang Suksesin Semua Ujian!</h1>
            <p>Mayoritas Premium User Zenius punya nilai TO lebih baik sekitar 30% dari Free User</p>

            <p className='p2'>Selama hampir 2 dekade, Zenius udah bantu jutaan orang buat lolos ujian!</p>
        </div>
        <div className="two">
            <div className="paket">
            <h1>Paket Untuk yang di Bangku Sekolah</h1>
            <button className="bandingkan">BANDINGKAN</button>
            </div>
            <p>Siapin diri buat segala tantangan, mulai dari SNBT, Ujian Mandiri, dan segala macem Ujian Sekolah.</p>
            
        </div>
      </div>
    </div>
  )
}

export default Main
