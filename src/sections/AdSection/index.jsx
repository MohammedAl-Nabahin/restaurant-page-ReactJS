import React from 'react'
import AdIcon from '../../components/AdIcon/index';
import './style.css';
import img1 from '../../images/dish1.png';
import img2 from '../../images/chef2.png';
import img3 from '../../images/team1.png';
import Container from '../../components/Container/index'

export default function index() {
  return (
    <div className='AdSection'>
      <Container>
        <div className='AdSection1'>
        <AdIcon  imgSrc={img1} number="250+" title="Delicacy" />
        <AdIcon  imgSrc={img2} number="10+" title="renowed chefs"/>
        <AdIcon  imgSrc={img3} number="30+" title="Members"/>
        </div>
      </Container>  
    </div>
  )
}
