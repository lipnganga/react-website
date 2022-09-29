import React from 'react'
import './header.css'
import CTA from './CTA'
import ME from '../../assets/me.jpg'
import HeaderSocials from './HeaderSocials'

const header = () => {
  return (
    <section id='home'>
    <header>
      <div className="container.header__container">
        <h1 className='text-light'>Hello I'm</h1>
        <h2>Philip Nganga</h2>
        <h5 className='text-light'>Fullstack Developer</h5>
        <CTA />
        <HeaderSocials />

        <div className="me">
          <img src={ME} alt="me"/>
        </div>

        <a href="#contact" className='scroll__down'>Scroll Down</a>

      </div>
    </header>
    </section>
  )
}

export default header