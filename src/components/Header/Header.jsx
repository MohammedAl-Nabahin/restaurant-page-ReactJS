import React from 'react'
import './style.css';
import Button from '../Button/Button';


export default function Header({headerText , pText , Text}) {
  return (
    <div className='header'>
        <header>
            <h1>{headerText}</h1>
            <p>{pText}</p>
            <Button info={Text}/>            
        </header>
    </div>
  )
}
