import React from 'react'
import './about.css'
import ME from '../../assets/me.jpg'
import {FaAward} from 'react-icons/fa'
import {FiUsers} from 'react-icons/fi'
import {VscFolderLibrary} from 'react-icons/vsc'

const about = () => {
  return (
    <section id='about'>
      <h1 className='text-light'>Get to know</h1>
      <h2>About me</h2>

      <div className="about__content" />
      <div className="container about__container">
       <div className="about__me">
        <div className="about__me-image">
          <img src={ME} alt='' />
        </div>
        </div>

       
        <div className="about__cards">
          <article className='about__card'>
          <FaAward className='about__icon'/>
            <h5>Experience</h5>
            <small>2+ Years working experience</small>
          </article>

          <article className='about__card'>
          <FiUsers className='about__icon'/>
            <h5>Clients</h5> 
            <small>200+ worldwide</small>
          </article>

          <article className='about__card'>
          <VscFolderLibrary className='about__icon'/>
            <h5>Projects</h5>
            <small>2+ 50+ completed</small>
          </article>
        

        <p>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. 
        </p>

        <a href="#contact"className='btn byn-primary'>Let's talk</a>
        </div>
      </div>
      </section>
  )
}

export default about