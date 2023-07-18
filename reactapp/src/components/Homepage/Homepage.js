import React from 'react'
import Navbar from './Navbar/Navbar'
import Home from './Home/Home'
import Footer from './Footer/Footer'
import "./homepage.css"

function Homepage() {
  return (
    <div className='full-page'>
        <Navbar />
      <div className='outer-home'>
        <Home />
      </div>
        <Footer />
    </div>
  )
}

export default Homepage