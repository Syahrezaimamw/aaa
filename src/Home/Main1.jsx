import React from 'react'
import './main1.css'
import bg from '../images/bg.png'
const Main1 = () => {
  return (
    <div className='containerMain1'>
        <div className="wrapperMain1">
           <div className="text">
            <h1>Zenius<span> #BikinCerdasBeneran</span></h1>
            <h1 className='h1Dua'>untuk jadi Apapun yang</h1>
            <h1 className='h1Dua'> Kamu Mau!</h1>
            <p>Paket belajar di Zenius gak hanya ngasih materi pelajaran, tapi juga</p>
            <p className='p2'>fokus bikin otak makin pinter dalam dan bantu kalian lolos </p>
            <p className='p2'>ke kampus impian!</p>
            <div className="daftarYuk">Daftar, yuk!</div>
           </div>
          
           <div className="gmbr">
            <img src={bg} alt="" />
           </div>
        </div>
      
    </div>
  )
}

export default Main1
