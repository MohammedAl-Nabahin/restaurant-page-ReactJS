import React from 'react'
import './style.css';
export default function index(props) {
  return (
    <div className='review'>
        <div className='avatar'>
            <div>
            <img src={props.ImgSrc} alt="hueman"/>
            </div>
            <div>
            <p className='reviewP1'>{props.name}</p>
            <img src={props.ImgSrc2} alt="star"/>
            </div>
        </div>
        <div className='content'>
            <p className='reviewContent'>{props.content}</p>
        </div>
    </div>
  )
}
