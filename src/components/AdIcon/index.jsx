import React from 'react';
import './style.css';
export default function index(props) {
  return (
    <div className='adCard'>
    <img src={props.imgSrc} alt="img"/>
    <div className='InnerDiv'>
        <h2>{props.number}</h2>
        <p>{props.title}</p>
    </div>
</div>
  )
}
