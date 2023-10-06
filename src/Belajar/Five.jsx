import React from 'react'
import './five.css'
import purple from '../images/purpleBg.png'
import robot from '../images//featureZenbot.png'
import robot2 from '../images/featureLiveClass.png'
const Five = () => {
  return (
    <div className='containerFive'>
        <div className="wrapperFive">
            <div className="satu">
                <h1>Ujian Mandiri</h1>
                <div className="gambar">
                    <div className="gb">
                    <img src={purple} alt="" />
                    </div>
                    <div className="gb">
                    <img src={purple} alt="" className='gambarDua'/>
                    </div>
                    <div className="gb">
                    <img src={purple} alt="" className='gambarDua'/>
                    </div>
                    <div className="gb">
                    <img src={purple} alt="" className='gambarDua'/>
                    </div>
                </div>
            </div>
            <div className="dua">
                <h1>Fitur Lainnya</h1>
                <div className="gambar">
                <div className="gb2 ss">
                    <img src={robot} alt="" />
                    <div className="text">
                        <p>Tanya soal Matematika otomatis</p>
                        <p className="pdua">sepuasnya! ZenBot bantu jawab &</p>
                        <p className="pdua">jelasin. Let's go boy!</p>
                        <h4>Lihat Detail</h4>
                    </div>
                </div>
                <div className="gb2 uu">
                    <img src={robot2} alt="" />
                    <div className="text">
                        <h1>Live Class</h1>
                        <p className='psatu'>Mantepin pemahaman dengan</p>
                        <p className="pdua">Tambahan insight keren dari tutor</p>
                        <p className="pdua">Zenius, langsung di kelas yang</p>
                        <p className="pdua">beneran interaktif dan berasa hidup.</p>
                        <h4>Lihat Detail</h4>
                    </div>
                </div>
                </div>
            </div>

        </div>
      
    </div>
  )
}

export default Five
