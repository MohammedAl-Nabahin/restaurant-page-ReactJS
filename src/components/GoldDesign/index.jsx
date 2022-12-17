import React from 'react'
import './style.css';
export default function index(props) {
  return (
    <div className='gold'>
        <img id='goldOne' className='img' src={props.ImgSrc} alt="img"/>
    </div>
  )
}
