import React from 'react'
import First from '../sections/firstSec/FiestSection';
import Second from '../sections/SecondSection/index';
import Footer from '../sections/Footer/index'
import Subsecribe from '../sections/Subsecribe/index';
import Copyright from '../sections/CopyRight/index';


export default function Home() {
  return (
    <div>
      <First/>
      <Second/>
      <Footer/>
      <Subsecribe/>
      <Copyright/>
    </div>
  )
}
