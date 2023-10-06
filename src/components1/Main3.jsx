import React from 'react'
import "./main3.css"
import { FaCheck, IconName } from "react-icons/fa6";
const Main3 = () => {
  return (
    <div className='containerMain3'>
        <div className="wrapperMain3">
            <div className="satu">
                <h1>Paket Untuk Para Lifelong Learners</h1>
                <p>Paket sukses untuk berbagai ujian dalam hidupmu, mulai dari Ujian Pascasarjana, Bahasa Inggris, sampai test CPNS.</p>
            </div>
            <div className="dua">
                <div className="ichi" id='one'>
                    <div className="first">
                        <div className="firstOne">
                        <h1 id='h1'>PASCASARJANA</h1>
                        <p>Persiapkan diri untuk sukses</p>
                        <p>SIMAK PASCASARJANA bareng...</p>
                        <div className="second">
                         <div className="new">New</div>
                         <div className="dapat">Dapatkan hingga 500 ZenCoin</div>
                        </div>
                        </div>
                    </div>


                    <div className="sec">
                        <p>Mulai dari <span>Rp380.000</span></p>
                        <h1>Rp190.000</h1>
                        <div className="beli" id='buy1'>Beli Sekarang!</div>
                        <div className="tanda">
                        <div className="check" id='cek1'><FaCheck/></div>
                            <div className="tulis">
                                <p className='text1'>90k+ Video Premium dan</p>
                                <p className='text2'>3000+ Latihan soal</p>
                            </div>
                        <div className="check" id='cek1'><FaCheck/></div>
                            <div className="tulis">
                                <p className='text1'>2x Try Out dengan simulasi</p>
                                <p className='text2'>Tes SIMAK PASCASARJANA</p>
                            </div>
                        <div className="check" id='cek1'><FaCheck/></div>
                            <div className="tulis">
                                <p className='text1'>Video Pembahasan Try Out</p>
                               
                            </div>

                        </div>
                    </div>
                </div>
                


                <div className="ichi tty" id='two'>
                <div className="first">
                    <div className="firstOne">
                        <h1 id='h1'>Persiapan IELTS</h1>
                        <p>Persiapan tes IELTS kini jauh</p>
                        <p>lebih mudah dengan ZENFOKUS...</p>
                        <div className="second">
                         <div className="new">New</div>     
                        </div>
                        </div>
                    </div>
                    <div className="sec">
                        <p>Mulai dari <span>Rp5.600.000</span></p>
                        <h1>Rp1.800.000</h1>
                        <div className="beli" id='buy2'>Beli Sekarang!</div>
                        <div className="tanda">
                            <div className="check" id='cek2'><FaCheck/></div>
                            <div className="tulis">
                                <p className='text1'>Terbatas HANYA 10</p>
                                <p className='text2'>SISWA/kelas</p>
                            </div>
                            <div className="check" id='cek2'><FaCheck/></div>
                            <div className="tulis">
                                <p className='text1'>Sesi live class eksklusif</p>
                                <p className='text2'>interaksi 2 arah dengan tutor...</p>
                            </div>
                            <div className="check" id='cek2'><FaCheck/></div>
                            <div className="tulis">
                                <p className='text1'>Kelas pertama dimulai pada 9</p>
                                <p className="text2">Oktober 2023!</p>
                            </div>

                        </div>

                        
                    </div>


                </div>
            </div>
        </div>
    </div>
  )
}

export default Main3
