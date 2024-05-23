import React from 'react'
import "./Heaser.css"

function Header() {
  return (
    <header className='header row'>
      <div className="col-2 header-content">
        <h1>Your New Smile Starts <br /> Here</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut provident veniam obcaecati, ullam officiis, porro similique tenetur, doloribus soluta voluptas cupiditate architecto fugiat sit velit ducimus adipisci ipsa odio mollitia!</p>

       <button className="btn bg-primary">GET STARED</button>
      </div>

      <div className="col-2 heder-img">
        <div className="img-wrap">
          <img src="https://raw.githubusercontent.com/sabbir-hosen-dev/Dental_Care/main/src/assets/images/chair.png" alt="" />
        </div>
      </div>
    </header>
  )
}

export default Header
