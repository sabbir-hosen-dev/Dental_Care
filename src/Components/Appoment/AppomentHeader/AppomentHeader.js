import React from 'react'
import Calender from './Calender/Calender'

function AppomentHeader({date}) {
  return (
<header className='header row'>
      <div className="col-2 header-content">
        <Calender onChange={date} />
      </div>

      <div className="col-2 heder-img">
        <div className="img-wrap">
          <img src="https://i.postimg.cc/g2ctDr5S/chair.png" alt="" />
        </div>
      </div>
    </header>
  )
}

export default AppomentHeader
