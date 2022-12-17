import React from 'react'
import './style.css';

export default function index(props) {
  return (
    <h3 className='h3Title' id={props.id}>{props.title}</h3>
  )
}
