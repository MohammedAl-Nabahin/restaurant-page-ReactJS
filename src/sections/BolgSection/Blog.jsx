import React from 'react'
import './style.css';
import Title from '../../components/Title/index'
import BlogCard from '../../components/BlogCard/BCard';
import Img1 from '../../images/beans.png';
import Img2 from '../../images/salad2.png';
import Img3 from '../../images/cake.png';
export default function Blog() {
  return (
    <div id='blog' className='bSec'>
        <Title title="Bolgs"/>
        <h3 className='blogH3'>words from our food lovers</h3>
        <div className='Blogcards'>
            <BlogCard ImgSrc={Img1} p1="Cooking Dining Experience" p2="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sollicitudin "
            />
            <BlogCard  Id="flip" ImgSrc={Img2} p1="Cooking Dining Experience" p2="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sollicitudin "/>
            <BlogCard  ImgSrc={Img3} p1="Cooking Dining Experience" p2="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sollicitudin "/>
        </div>
    </div>
  )
}
