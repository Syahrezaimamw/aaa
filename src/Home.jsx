import React from 'react'
import Navbar from './components1/Navbar'
import Main1 from './Home/Main1' 
import Ni from './Home/Ni'
import Sann from './Home/Sann'
import Yon from './Home/Yon'
import Go from './Home/Go'
import Roku from './Home/Roku'
// import san from './Home/san'
// import "./main2.css"

const Home = () => {
  return (
    <div >
      <Navbar/>
      <Main1/>
      <Ni/>
      <Sann/>
      <Yon/>
      <Go/>
      <Roku/>
    </div>
  )
}

export default Home