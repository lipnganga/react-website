import React from 'react'
import {BsLinkedin} from 'react-icons/bs'
import {FaGithub} from 'react-icons/fa'
import {FaTwitter} from 'react-icons/fa'

const HeaderSocials = () => {
  return (
    <div className='header__socials'>
        <a href="https://www.linkedin.com/in/philip-murage-49731617a/" rel="noopener"><BsLinkedin/></a>
        <a href="https://github.com/lipnganga" rel="noopener"><FaGithub/></a>
        <a href="https://twitter.com/lipnganga" rel="noopener"><FaTwitter/></a>
        </div>
  )
}

export default HeaderSocials