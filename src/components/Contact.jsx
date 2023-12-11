import React from 'react'
import './Contact.css'
import { MdOutlineMail } from "react-icons/md";

const Contact = () => {
  return (
    <section id='contact' className='contact'>
      <div className='container'>
        <div className='contact-content'>
            <div className='contact-title'>
                <p>Contact</p>
                <h3>Send an email, or find me on LinkedIn!</h3>
            </div>
            <div className='contact-image'>
              <div className='contact-image-holder'>
                <span><MdOutlineMail /></span>
                <div className='contact-info'></div>

              </div>
              <div className='contact-image-holder'>
                <span> </span>
                <div className='contact-info'></div>

            </div>
        </div>
      </div>
    </div>
  </section>
  )
}

export default Contact