import React from 'react';
import Info from '../../components/Info/index';
import './style.css';

export default function index(props) {
  return (
    <div className='about'>
        <Info className="infoAbout" AboutUs="about" title="About Us"  dataOne="Discover the taste of worldclass vegan dishes from the kitchen of Go Green Dine"
        dataTwo="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sollicitudin hendrerit a amet viverra.
         Nunc pretium in amet at mattis cras. Quisque commodo mattis ornare a nec odio. Pulvinar orci, egestas 
         eget nulla duis at iaculis nunc, elit. Nibh auctor purus nunc tellus pellentesque nibh mattis. Malesuada
          integer consectetur. Imperdiet aliquam quam mauris semper suscipit. Molestie maecenas interdum pharetra 
          id velit sed nec.tetur sit sagittis pretium eget vitae semper pellentesque pellentesque."
          info="Read More"/>

        <img src={props.ImgSrc} id="mealImg" alt="img"></img>
    </div>
  )
}
