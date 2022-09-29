import React from 'react'
import './portfolio.css'
import IMAGE1 from '../../assets/portfolio1.png'
import IMAGE2 from '../../assets/portfolio2.png'
import IMAGE3 from '../../assets/portfolio3.png'



const data = [
  {
    id: 1,
    image: IMAGE1,
    title: 'Crypto Currency DAshboard & Financial Visualisation',
    Github: 'https://github.com',
    demo: 'https://dribbble.com/Alien_pixels'
  },
  {
    id: 2,
    image: IMAGE2,
    title: 'Crypto Currency DAshboard & Financial Visualisation',
    github: 'https://github.com',
    demo: 'https://dribbble.com/Alien_pixels'
  },
  {
    id: 3,
    image: IMAGE3,
    title: 'Crypto Currency DAshboard & Financial Visualisation',
    github: 'https://github.com',
    demo: 'https://dribbble.com/Alien_pixels'
  },

  
]

const portfolio = () => {
  return (
    <section id='portfolio'>
      <h5>My recent work</h5>
      <h2>Portfolio</h2> 

    <div className="container portfolio__container">
      {
        data.map(({id, image, title, github, demo }) =>{
          return(
            <article key= {id} className='portfolio__item'>
              <div className="portfolio__item-image">
                <img src={image} alt={title} />
              </div>
              <h3>{title}</h3>
              <div className="portfolio__item-cta">
                <a href={github} className='btn' rel ="noreferrer" target='_blank'>Github</a>
                <a href={demo} className='btn btn-primary' rel ="noreferrer" target='_blank'>Live Demo</a>
              </div>
            </article>
          )
        })
      }
      </div>
    </section>
  )
}

export default portfolio