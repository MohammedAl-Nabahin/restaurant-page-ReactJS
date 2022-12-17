import React from 'react'
import "./style.css";
export default function Button({info}) {

  return (
   
    <div>
        <button className='button'>{info}</button>
    </div>
  )
}
