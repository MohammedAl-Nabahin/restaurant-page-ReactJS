import React from 'react'
import './style.css';

export default function BCard(props) {
  return (
    <div className='bCard' id={props.Id}>
    <img src={props.ImgSrc} alt="Card"/>
    <div className="bDiv">
        <p className='p1'>{props.p1}</p>
        <p className='p2'>{props.p2}</p>
        <button className='btn'>Read more</button>
    </div>
</div>
  )
}
