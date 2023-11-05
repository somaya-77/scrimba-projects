import React from 'react'

export default function Card(props) {
  return (
    <div className='card'>
      <div className='image'>
        <img src={props.src} />
        <span>{props.title}</span>
      </div>

      <div className='details'>
        <img src='airbnb/Star 1.png' />
        <span><b>{props.star}</b> <span>({props.num}).USA</span></span>
        <h5>{props.details}</h5>
        <p><b>Form ${props.price}</b> / Person</p>
      </div>
    </div>
  )
}
