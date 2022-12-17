import React from 'react';
import './style.css';

 function Card(props) {
  return (
    <div className='card'>
        <div className='cardDiv'>
        <img src={props.ImgSrc} alt="card Img" className='cardImg'/>
        <h4 className='card-title'>{props.title}</h4>
        <p className='card-content'>{props.content}</p>
        </div>
    </div>
  )
}

export default Card;
