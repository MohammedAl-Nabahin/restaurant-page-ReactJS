import React from 'react';
import './style.css';

export default function KCard(props) {
  return (
    <div className='KitchenCard'>
        <img src={props.ImgSrc} alt="Kitchen Card" className='Kcard'/>
        <div className='data'>
            <p className='KCardP1'>{props.DataOne}</p>
            <p className='KCardP2'>{props.DataTwo}</p>
        </div>
        {/* <span className='line'></span> */}
        <p className='KCardPrice'>{props.price}</p>
    </div>
  )
}
