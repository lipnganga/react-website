import React from 'react'
import './contact.css'
import {AiOutlineMail} from 'react-icons/ai'
import {BsTwitter} from 'react-icons/bs'
import {SiWhatsapp} from 'react-icons/si'
import {useRef as UseRef } from "react";
import emailjs from 'emailjs-com';

const contact = () => {
  const form = UseRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_l8p5oed', 'template_64f20jo', form.current, 'DFoHXOTioab-oixqj')
    e.target.reset()
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
          
      });
  };
  return (
    <section id='contact'>
      <h6>Get in Touch</h6>
      <h2>Contact me</h2>

      <div className="container contact__container">
        <div className="contact__options">
          <article className="contact__option">
              <AiOutlineMail className='contact__option-icon'/>
            <h4>Email</h4>
            <h5>philipmurage98@gmail.com</h5>
            <a href="philipmurage98@gmail.com" >Send a mesage</a>
          </article>
          <article className="contact__option">
              <BsTwitter className='contact__option-icon'/>
            <h4>Twitter</h4>
            <h5>@lipnganga</h5>
            <a href="https://twitter.com/lipnganga" rel="noreferrer" target='_blank'>Send a mesage</a>
          </article>
          <article className="contact__option">
              <SiWhatsapp className='contact__option-icon'/>
            <h4>WhatsApp</h4>
            <h5>0700825637</h5>
            <a href="https://api.whatsapp.com/send?phoone+254700825637"  rel="noreferrer" target='_blank'>Send a mesage</a>
          </article>
        </div>
        {/*End of contact options*/}
        <form ref={form} onSubmit={sendEmail}>
          <input type="text" name='name' placeholder='Your Full name' required/>
          <input type="email" name='email' placeholder='Your Email' required/>
          <textarea namr="message" rows="5" placeholder='Your Message' required ></textarea>
          <button type='submit' className='btn btn-primary'>Send Message</button>
        </form>
      </div>
    </section>
  )
}

export default contact