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
          <img src="https://raw.githubusercontent.com/sabbir-hosen-dev/Dental_Care/main/src/assets/images/chair.png" alt="" />
        </div>
      </div>
    </header>
  )
}

export default AppomentHeader
