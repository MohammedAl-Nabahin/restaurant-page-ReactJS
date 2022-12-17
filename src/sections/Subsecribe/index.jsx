import React from 'react'
import Container from '../../components/Container'
import email from '../../images/email2.png'
import Button from '../../components/Button/Button'
import './style.css';
export default function index() {
  return (
          <Container>
            <div className='subsecribe'>
                <p>
                    <img src={email} alt="email"/> Subscribe to our Newsletter
                </p>
                <input type="text" placeholder='Your Email id'/>
                <Button info="Subsecribe"/>
            </div>
          </Container>
  )
}
