import React from 'react'
import './style.css';
import Title from '../../components/Title/index'
import KCard from '../../components/KitchenCard/KCard'
import KCardImg1 from '../../images/food1.png';
import KCardImg2 from '../../images/food2.png';
import KCardImg3 from '../../images/salad.png';
import Container from '../../components/Container';
export default function Kitchen() {
  return (
    <div className='kitchen' id='menu'>
        <Title title="Straight From Kitchen"/>
        <h3 className='ourMenuH'>Our Menu</h3>
        <Container>
          <div className='kitchenTable'>
              <div className='leftCol'>
                  <KCard ImgSrc={KCardImg1}
                  DataOne="Lorem ipsum dolor sit amet"
                    DataTwo="Lorem ipsum dolor sit amet" 
                    price="Rs 222"/>
                  <KCard ImgSrc={KCardImg1}
                  DataOne="Lorem ipsum dolor sit amet"
                    DataTwo="Lorem ipsum dolor sit amet" 
                    price="Rs 222"/>
                  <KCard ImgSrc={KCardImg1}
                  DataOne="Lorem ipsum dolor sit amet"
                    DataTwo="Lorem ipsum dolor sit amet" 
                    price="Rs 222"/>
                  <KCard ImgSrc={KCardImg3}
                  DataOne="Lorem ipsum dolor sit amet"
                    DataTwo="Lorem ipsum dolor sit amet" 
                    price="Rs 222"/>
                  <KCard ImgSrc={KCardImg3}
                  DataOne="Lorem ipsum dolor sit amet"
                    DataTwo="Lorem ipsum dolor sit amet" 
                    price="Rs 222"/>
                  <KCard ImgSrc={KCardImg3}
                  DataOne="Lorem ipsum dolor sit amet"
                    DataTwo="Lorem ipsum dolor sit amet" 
                    price="Rs 222"/>
              </div>
              <div className='rightCol'>
                  <KCard ImgSrc={KCardImg3}
                  DataOne="Lorem ipsum dolor sit amet"
                    DataTwo="Lorem ipsum dolor sit amet" 
                    price="Rs 222"/>
                  <KCard ImgSrc={KCardImg3}
                  DataOne="Lorem ipsum dolor sit amet"
                    DataTwo="Lorem ipsum dolor sit amet" 
                    price="Rs 222"/>
                  <KCard ImgSrc={KCardImg3}
                  DataOne="Lorem ipsum dolor sit amet"
                    DataTwo="Lorem ipsum dolor sit amet" 
                    price="Rs 222"/>
                  <KCard ImgSrc={KCardImg2}
                  DataOne="Lorem ipsum dolor sit amet"
                    DataTwo="Lorem ipsum dolor sit amet" 
                    price="Rs 222"/>
                  <KCard ImgSrc={KCardImg2}
                  DataOne="Lorem ipsum dolor sit amet"
                    DataTwo="Lorem ipsum dolor sit amet" 
                    price="Rs 222"/>
                  <KCard ImgSrc={KCardImg2}
                  DataOne="Lorem ipsum dolor sit amet"
                    DataTwo="Lorem ipsum dolor sit amet" 
                    price="Rs 222"/>
              </div>
          </div>
        </Container>
    </div>
    
  )
}
