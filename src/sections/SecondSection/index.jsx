import React from 'react'
import './style.css'
import About from '../AboutSection/index'
import Img from '../../images/mealImg.png';
import Special from '../SpecialSection/Special';
import Kitchen from '../KitchenSection/Kitchen'
import Discount from '../DiscountSection/Discount';
import Cooking from '../CookingSection/Cooking';
import AdSection from '../AdSection/index';
import Review from '../ReviewSection/index';
import Blog from '../BolgSection/Blog';

export default function index() {
  return (
    <div className='secondSection'>
       <About ImgSrc={Img}/>
       <Special/>
       <Kitchen/>
       <Discount/>
       <Cooking/>
       <AdSection/>
       <Review/>
       <Blog/>
    </div>
  )
}
