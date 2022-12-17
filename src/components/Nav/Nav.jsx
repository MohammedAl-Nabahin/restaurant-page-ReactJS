import React from 'react'
import Logo from '../Logo/logo';
import Book from './Book';
import './style.css'

export default function Nav({logoImg ,navText1,navText2,navText3,navText4,navText5,nav6 , bookPic ,AboutUs , 
  Special , Menu , Blogs }) {
  return (
    <div className='nav' id='nav'>
        <nav>
            <Logo ImgSrc={logoImg}/>
            <li><a href='#nav'>{navText1}</a></li>
            <li><a href={"#about"}>{navText2}</a></li>
            <li><a href={"#special"}>{navText3}</a></li>
            <li><a href={"#menu"}>{navText4}</a></li>
            <li><a href={"#blog"}>{navText5}</a></li>
            <li><img src={nav6} alt="icon"></img></li>
            <li><Book ImgSrc={bookPic} title="img"/></li>
        </nav>
    </div>
  )
}
