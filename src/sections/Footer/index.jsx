import React from 'react'
import Container from '../../components/Container'
import Logo from '../../components/Logo/logo'
import logo from '../../images/logo.png'
import ins from '../../images/instagram.png'
import twitter from '../../images/twitter.png'
import youtube from '../../images/youtube.png'
import email from '../../images/email.png'
import gps from '../../images/gps.png'
import call from '../../images/call.png'
import './style.css';

export default function index() {
  return (
    <footer>
            <Container>
                <div className='Fdiv'>
                    <div className='firstCol'>
                        <div className='f1-header'>
                            <Logo ImgSrc ={logo}/>
                            <p>Golden View Dine</p>
                        </div>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sollicitudin
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sollicitudin
                        </p>
                        <div className='Sicons'>
                            <img src={ins} alt="instgram" />
                            <img src={twitter} alt="twitter" />
                            <img src={youtube} alt="youtube" />
                        </div>
                    </div>
                    <div className='secondCol'>
                        <p className="title">Other Links</p>
                        <ul>
                            <li>Privacy Policy</li>
                            <li>Terms & conditions</li>
                            <li>Blogs</li>
                            <li>our team</li>
                            <li>Our kitchen</li>
                        </ul>
                    </div>
                    <div className='thirdCol'>
                        <p className="title1">Contact Us</p>
                        <p>
                            <img src={email} alt="email" /> Gogreendineservice@gmail.com
                        </p>
                        <p>
                            <img src={gps} alt="gps" /> AZ complex bylane3 Mandari Rd Mumbai 1100867
                        </p>
                        <p>
                            <img src={call} alt="email" /> +1800 287 256
                        </p>
                    </div>
                </div>
            </Container>
        </footer>
  )
}
