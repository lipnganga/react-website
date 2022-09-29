import React from 'react'
import CV from '../../assets/CV.pdf'
import {FaUserGraduate} from 'react-icons/fa'

const CTA = () => {
  return (
    <div className='cta'>
        <a href={CV} download className='btn'>Download CV</a>
        <a href="https://lipnganga.github.io/cv-resume/" rel="noopener"><FaUserGraduate/></a>
        <a href="#contact" className='btn btn-primary'>let's talk</a>
    </div>
  )
}

export default CTA