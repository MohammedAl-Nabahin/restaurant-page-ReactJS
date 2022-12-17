import React from 'react'
import Button from '../../components/Button/Button'
import Gold from '../../components/GoldDesign/index'
import goldImg from '../../images/gold.png'
import './style.css';
export default function Discount() {
  return (
    <div className='discount'>
        <div className='all'>
            <Gold className="img1" ImgSrc={goldImg} />
            <div className='discountData'>
                <p className='discountP'>Come join us for a lunch this weekend and enjoy</p>
                <p className='discountPrice'>FLAT 10% OFF</p>
                <Button info="Book Table"/>
            </div>
            <Gold className="img2" ImgSrc={goldImg} />
        </div>
    </div>
  )
}
