import React from 'react'
import Nav from '../../components/Nav/Nav'
import './style.css'
import Header from '../../components/Header/Header'
import logoImg from "../../images/logo.png";
import bookPic from '../../images/Book1.png'
import searchIcon from "../../images/icons_search.png";
import Container from '../../components/Container/index'

export default function fiestSection() {
  return (
    <div className='firstSec'>
    <Container>
    <div className='firstSec1'>
   
        <Nav className="nav" logoImg={logoImg}  navText1="Home" navText2="About" 
        navText3="Special" navText4="Menu" navText5="Blogs" nav6={searchIcon} bookPic={bookPic}
        AboutUs="#about" Special="#special" Menu="#menu" Blogs="#blogs"
        />
         
          <Header className="header" headerText="Welcome To Golden View Dine " 
          pText="Explore the authentic vegan dishes with your friends and family"
          Text="Read More"
          />
        
    </div>
    </Container>  
    </div>
  )
}
