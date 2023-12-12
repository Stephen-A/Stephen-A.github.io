import React from 'react'
import './Contact.css'
import { CiMail } from "react-icons/ci";
import { CiLinkedin } from "react-icons/ci";

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
                <span>
                  <CiMail />
                </span>
                <div className='contact-info'>
                  <h3>Email</h3>
                  <p><a href='mailto:stephenallen337@gmail.com'>Stephenallen337@gmail.com</a></p>
                </div>

              </div>
              <div className='contact-image-holder'>
                <span>
                  <CiLinkedin />
                </span>
                <div className='contact-info'>
                  <h3>LinkedIn</h3>
                  <p><a href='https://www.linkedin.com/in/stephen--j--allen/'>stephen--j--allen/</a></p>
                </div>

            </div>
        </div>
      </div>
    </div>
  </section>
  )
}

export default Contact