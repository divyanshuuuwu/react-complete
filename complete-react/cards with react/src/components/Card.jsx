import React from 'react'
import "./Card.css"

const Card = (props) => {
  console.log(props)
  return (
    <div className='card'>
      <div className="top">
        <img src={props.data.brandLogo} alt="" />
        <span>{props.data.datePosted}</span>
        <button className='savebtn'>save</button>
      </div>
      <div className="center">
        <h3>{props.data.companyName}</h3>
        <h1>{props.data.post}</h1>
        <span>{props.data.tag1}</span> <span>{props.data.tag2}</span>
      </div>
      <div className="bottom">
        <div className="des">
          <h3>{props.data.pay}</h3>
        <h5>{props.data.location}</h5>
        </div>
        <button className="applynow">Apply now</button>
      </div>
    </div>
  )
}

export default Card