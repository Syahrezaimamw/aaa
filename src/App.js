import React from 'react'
// import "./app.css"
import Inti from './Inti'
import Home from './Home'
import Lajar from './Lajar'
// import Navbar from './components1/Navbar'
// import Home from './pages/Home'
import {BrowserRouter as Router,Routes,Route} from'react-router-dom'
import Profesionall from './Profesionall'

const App = () => {
  return (
    <>
  
    <Router>
      <Routes>
        <Route path='/' element={<Home/> } />
        <Route path='/paketBelajar' element={<Inti/>}/>
        <Route path='/dua' element={<Lajar/>}/>
        <Route path='/tiga' element={<Profesionall/>}/>
        
      </Routes>
    </Router>
   
    </>
  )
}

export default App
