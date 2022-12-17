import React from 'react'
import Button from '../Button/Button'
import Title from '../Title/index'
import './style.css';

export default function index(props) {
  return (
    <div className='AboutInfo'>
        <Title id={props.AboutUs} title={props.title}/>
        <p className='firstP'>{props.dataOne}</p>
        <p className='SecondP'>{props.dataTwo}</p>
        <Button info={props.info}/>
    </div>
  )
}
