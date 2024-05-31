import React from 'react'
import './contact.css'
import { MdOutlineMail } from 'react-icons/md'
import { RiMessengerLine } from 'react-icons/ri'
import { BsWhatsapp } from 'react-icons/bs'
import  { useRef } from 'react';
import emailjs from 'emailjs-com'



const Contact = () => {

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_fp7y08b', 'template_73klj4l', form.current, 'cmmiS7EyC8InqpToC')

    e.target.reset()
      
  };



  return (
    <section id='contact'>
      <h5>GET IN TOUCH</h5>
      <h2>Contact Me</h2>

      <div className='container contact__container'>
        <div className='contact__options'>
          <article className='contact__option'>
            <MdOutlineMail className='contact__option-icon' />
            <h4>Email</h4>
            <h5>ezehfavour16@gmail.com</h5>
            <a href="mailto:ezehfavour16@gmail.com" target='_blank' rel='noopener noreferrer'>Send a message</a>

          </article>

          <article className='contact__option'>
            <RiMessengerLine className='contact__option-icon' />
            <h4>Messanger</h4>
            <h5>FavourChime</h5>
            <a href="https://web.facebook.com/profile.php?id=100081786768508" target='_blank' rel='noopener noreferrer'>Send a message</a>

          </article>

          <article className='contact__option'>
            <BsWhatsapp className='contact__option-icon' />
            <h4>Whatsapp</h4>
            <h5>+2347056597880</h5>
            <a href="https://api.whatsapp.com/send?phone=+2347056597880" target='_blank' rel='noopener noreferrer'>Send a message</a>

          </article>
        </div>

        <form ref={form} onSubmit={sendEmail}>
          <input type="text" name='name' placeholder='Your Full Name' required />
          <input type="email" name='email' placeholder='Your Email' required />
          <textarea name="message" rows="7" placeholder='Your Message' required></textarea>
          <button type='submit' className='btn btn-primary'>Send Message</button>
        </form>
      </div>
    </section>
  )
}

export default Contact




