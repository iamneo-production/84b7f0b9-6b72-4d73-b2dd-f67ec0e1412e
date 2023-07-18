import React from 'react'
import './home.css';
// import './animate.css';

function Home() {
  return (
    <div className='home'>
      {/* <p className="animate__animated animate__backInDown animate__slow" id ="text1">Welcome to</p> */}
      <div className='text2'>
      <h2 className="animate__animated animate__zoomInDown animate__slow mt-5" id = "text2">Kitchen Display System</h2>
      </div>
      <div class='mt-5 out-search'>
      <input class="searchbar" type="search" placeholder=" Search anything" aria-label="Search" />
        <button class="btn btn-success but-home" type="submit">Search</button>
      </div>
        
    </div>
  )
}

export default Home