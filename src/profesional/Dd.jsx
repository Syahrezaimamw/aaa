import React from 'react'
import './dd.css'
const Dd = () => {
  return (
    <div className='containerDd'>
        <div className="wrapperDd">
            <div className="text">
            <h1>Paket untuk tingkatkan kompetensimu</h1>
            </div>
            <div className="bingkai">
                <div className="ktk f">
                    <div className="watermark">
                      <div className="fd">
                    <button className='btn2'>30 days</button>
                    </div>
                    <h3 className='ga'>1 Mounth</h3>
                    <p>FREE</p>
                    </div>
                    <div className="isi">
                      <p className='one'>Limited acces to core</p>
                      <p className="two">leraning contect, basic</p>
                      <p className="two">practice sets, and basic</p>
                      <p className="two">assessments.</p>
                      <button className='ba baa'>Beli</button>
                    </div>
                  
                </div>
                
                <div className="ktk r">
                <div className="watermark">
                <button className='btn2'>90 days</button>
                <h3 className='ga'>3 Mounth</h3>
                <p>Rp100000</p>
                </div>

                <div className="isi">
                  <p className='one'>Unlimited access to core</p>
                  <p className="two">eraning contect, basic</p>
                  <p className="two">practice sets, and basic</p>
                  <p className="two">assessments for 3</p>
                  <p className="two">months</p>
                  <button className='ba'>Beli</button>
                  {/* <p className="two"></p> */}

                </div>
                </div>

                <div className="ktk r">
                <div className="watermark">
                <button className='btn2'>180 days</button>
                <h3 className='ga'>6 Mounth</h3>
                <p>Rp160000</p>
                </div>
                <div className="isi">
                <p className='one'>Unlimited access to core</p>
                  <p className="two">eraning contect, basic</p>
                  <p className="two">practice sets, and basic</p>
                  <p className="two">assessments for 6</p>
                  <p className="two">months</p>
                  <button className='ba'>Beli</button>
                </div>
                </div>

                
                <div className="ktk r">
                <div className="watermark">
                <button className='btn2'>365 days</button>
                <h3 className='ga'>12 Mounth</h3>
                <p>Rp250000</p>
                </div>
                <div className="isi">
                <p className='one'>Unlimited access to core</p>
                  <p className="two">eraning contect, basic</p>
                  <p className="two">practice sets, and basic</p>
                  <p className="two">assessments for 12</p>
                  <p className="two">months</p>
                  <button className='ba'>Beli</button>
                </div>
                </div>
            </div>
        </div>
      
    </div>
  )
}

export default Dd
