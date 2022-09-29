import React from 'react'
import './experience.css'
import {BsPatchCheckFill} from 'react-icons/bs'

const experience = () => {
  return (
    <section id='experience'>
      <h5>What skills I have</h5>
      <h2>My Experience</h2>

      <div className="experience__container">
       <div className="experience__frontend">
        <h3>Frontend Development</h3>
        <div className="experience__content">
          <article className='experience__detailes'>
          <BsPatchCheckFill/>
         <div>
        <h4>HTML</h4>
          <small className='text-light'>Experienced</small>
         </div>
          </article>
        <article className='experience__detailes'>
          <BsPatchCheckFill/>
            <h4>CSS</h4>
            <small className='text-light'>Experienced</small>
          </article>

          <article className='experience__detailes'>
          <BsPatchCheckFill/>
         <div>
          <h4>Javascript</h4>
            <small className='text-light'>Intermittent</small>
         </div>
          </article>

          <article className='experience__detailes'>
            <BsPatchCheckFill/>
            <div>
            <h4>React</h4>
              <small className='text-light'>Learner</small>
            </div>
        </article>
      </div>
     </div>


        <div className="experience__backend">
        <h3>Backend Development</h3>
        <div className="experience__content">
          <article className='experience__detailes'>
          <BsPatchCheckFill/>
          <div>
            <h4>NodeJs</h4>
            <small className='text-light'>Intermideate</small>
          </div>
          </article>

          <article className='experience__detailes'>
          <BsPatchCheckFill/>
         <div>
          <h4>SQL</h4>
            <small className='text-light'>Experienced</small>
         </div>
          </article>

          <article className='experience__detailes'>
          <BsPatchCheckFill/>
         <div>
          <h4>MongoDB</h4>
            <small className='text-light'>Intermidiate</small>
         </div>
          </article>

          <article className='experience__detailes'>
          <BsPatchCheckFill/>
          <div>
          <h4>PHP</h4>
          <small className='text-light'>Learner</small>
          </div>
          </article>
          </div> 
        
        </div>
        </div>

    </section>
  )
}

export default experience