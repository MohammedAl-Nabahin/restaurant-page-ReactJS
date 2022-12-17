import React from 'react'
import './style.css';
import Title from '../../components/Title/index';
import Card from '../../components/Card/Card'
import cardOneImg from '../../images/orange-juice.png';
import cardTwoImg from '../../images/chef.png';
import cardThreeImg from '../../images/plate.png';
export default function Special() {
  return (
    <div className='specialSec'>
        <Title id="special" title="Special"/>
        <span className='special-title'>What Makes Us Special</span>
        <div className='special-cards'>
            <Card ImgSrc={cardOneImg} title="Fresh food" 
            content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sollicitudin hendrerit a amet viverra. Nunc pretium in amet at mattis cras. "/>
            <Card ImgSrc={cardTwoImg} title="skilled Chef" 
            content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sollicitudin hendrerit a amet viverra. Nunc pretium in amet at mattis cras. "/>
            <Card ImgSrc={cardThreeImg} title="Exotic dishes" 
            content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sollicitudin hendrerit a amet viverra. Nunc pretium in amet at mattis cras. "/>
        </div>
    </div>
  )
}
