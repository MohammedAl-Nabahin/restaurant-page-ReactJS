import React from 'react'
import './style.css';
import Info from '../../components/Info/index'
import cookingImg from '../../images/cooking.png';
export default function Cooking() {
  return (
    <div className='cookSection'>
        <Info title="Cooking ingredients" dataOne="What goes in"
        dataTwo="Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
        Sollicitudin hendrerit a amet viverra. Nunc pretium in amet at mattis cras. Quisque commodo mattis ornare a nec odio. Pulvinar orci, egestas eget nulla duis at iaculis nunc, elit. Nibh auctor purus nunc tellus pellentesque nibh mattis. Malesuada integer nulla orci convallis sit. At libero lacus, eget fermentum sed turpis curabitur donec consectetur. Imperdiet aliquam quam mauris semper suscipit."
       info = "Read More" />
       <img className='cooking' src={cookingImg} alt="cookingImg"/>
    </div>
  )
}
