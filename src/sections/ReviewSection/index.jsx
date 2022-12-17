import React from 'react'
import Review from '../../components/ReviewCard/index'
import person1 from '../../images/person1.png';
import person2 from '../../images/person2.png'; 
import Title from '../../components/Title/index'
import stars from '../../images/starts.png';
import './style.css';

export default function index() {
  return (
    <div className='reviewSec'>
        <Title title="Reviews"/>
        <h3 className='revH3'>words from our food lovers</h3>
        <div className='Rcards'>
        <Review className="card1"  ImgSrc={person2}  name="Alex andrina" ImgSrc2={stars} 
        content="“Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sollicitudin hendrerit a amet viverra. Nunc pretium in amet at mattis cras. Quisque commodo mattis ornare a nec odio. Pulvinar orci, egestas eget nulla duis at iaculis nunc, elit. “"/>
       <Review ImgSrc={person1}  name="Alex andrina" ImgSrc2={stars} 
        content="“Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sollicitudin hendrerit a amet viverra. Nunc pretium in amet at mattis cras. Quisque commodo mattis ornare a nec odio. Pulvinar orci, egestas eget nulla duis at iaculis nunc, elit. “"/>
        <Review  className="card3" ImgSrc={person2}  name="Alex andrina" ImgSrc2={stars} 
        content="“Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sollicitudin hendrerit a amet viverra. Nunc pretium in amet at mattis cras. Quisque commodo mattis ornare a nec odio. Pulvinar orci, egestas eget nulla duis at iaculis nunc, elit. “"/>
        </div>
    </div>
  )
}
