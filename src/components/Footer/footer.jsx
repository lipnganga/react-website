import React from 'react'
import './footer.css'
import {FaFacebookF} from 'react-icons/fa' 
import {FaInstagram} from 'react-icons/fa' 
import {BsTwitter} from 'react-icons/bs'

const footer = () => {
  return (
    <section id ="footer">
    <footer>
      <a href="#home" classname='footer__logo'>PHIL</a>
      <ul className='permalinks'>
        <li><a href="#home">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#experience">Experience</a></li>
        <li><a href="#services">Services</a></li>
        <li><a href="#testimonials">Testimonials</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>

      <div className="footer__socials" >
        <a href="https://facebook.com"><FaFacebookF/></a>
        <a href="https://instagram.com"><FaInstagram/></a>
        <a href="https://twitter.com"><BsTwitter/></a>
      </div>

        <div className="footer__copyright">
          <small>&copy; triumph_corp. All rights reserved</small>

        </div>
     
    </footer>
    </section>
  )
}

export default footer