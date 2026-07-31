import React from 'react'
import "./Card.css"

const Card = () => {
  return (
    <div className='card'>
      <div className="top">
        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c1/Google_%22G%22_logo.svg/3840px-Google_%22G%22_logo.svg.png" alt="" />
        <button className='savebtn'>save</button>
      </div>
      <div className="center">
        <h3>Google</h3>
        <h1>Software Dev</h1>
        <span>Part-Time</span> <span>Flexible Schedule</span>
      </div>
      <div className="bottom">
        <div className="des">
          <h3>$100k-150k</h3>
        <h5>Delhi, India</h5>
        </div>
        <button className="applynow">Apply now</button>
      </div>
    </div>
  )
}

export default Card