import React from 'react'
import './empat.css' 
import coin from "../images/coin.png"
import bgCoin from '../images/bgCoin.png'

const Empat = () => {
  return (
    <div className='containerEmpat'>
        <div className="wrapperEmpat">

            {/* <div className="wrn"></div>
            <div className="wrn2"></div> */}
            <img src={bgCoin} alt="" className='bgCoin' />
            <img src={bgCoin} alt="" className='bgCoin2' />
            
            <div className="isi">
                <h1 className="zenCoin">ZenCoin</h1>
                <div className="lihat">
                    <p>Dapetin Try Out Premium sampai Live Class ketengan tanpa paket belajar!</p>
                    <div className='btn'>Lihat Semua</div>
                </div>
                <div className="box">
                    <div className="noBox satu">
                        <div className="coin">
                            <div className="pb">
                              <img src={coin} alt="logo" />
                              <p>5x Try Out PTS</p>
                            </div>
                        </div>
                        <div className="harga">
                            <p>Mulai dari <span>Rp250.000</span></p>
                            <h1>Rp115.000</h1>
                        </div>
                    </div>
                    <div className="noBox dua">
                       <div className="coin">
                            <div className="pb">
                             <img src={coin} alt="logo" />
                                <p>12x Try Out UTBK 2024</p>
                            </div>
                        </div>
                        <div className="harga">
                            <p>Mulai dari<span>Rp360.000</span></p>
                            <h1>Rp179.000</h1>
                        </div>
                    </div>
                    <div className="noBox tiga">
                        <div className="coin">
                            <div className="pb">
                                <img src={coin} alt="logo" />
                                <p>20x Try Out UTBK 2024</p>
                              </div>
                        </div>
                        <div className="harga">
                            <p>Mulai dari<span>Rp500.000</span></p>
                            <h1>Rp249.000</h1>
                        </div>
                    </div>
                    <div className="noBox empat">
                       <div className="coin">
                         <div className="pb">
                            <img src={coin} alt="logo" />
                            <p>30x Try Out UTBK 2024</p>
                          </div>
                        </div>
                        <div className="harga">
                            <p>Mulai dari<span>Rp700.000</span></p>
                            <h1>Rp349.000</h1>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Empat
