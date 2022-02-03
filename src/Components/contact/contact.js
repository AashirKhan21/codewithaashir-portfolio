import React, { useRef } from 'react';
import './contact.css';
import phone from '../../img/phone.png';
import email from '../../img/email.png';
import github from '../../img/github.png';
import linkedin from '../../img/linkedin.png';

const Contact = () => {
    const Refform = useRef();
    return (
      <div className='c'>
        <div className='c-bg'>  
        </div>
        <div className='c-wrapper'>
            <div className='c-left'>
                <h1 className='c-title'>
                    Let's discuss your project
                </h1>
                <div className='c-info'>
                    <div className='c-info-item'>
                        <a href='https://wa.me/923112268467?text=Hi%20I%20am%20a%20new%20client%20and%20I%20want%20to%20discuss%20your%20project' target='_blank' rel="noreferrer">
                        <img src={phone} 
                            alt='contact-icon' 
                            className='c-icon'/>+92-311-226-8467
                        </a>
                    </div>
                    <div className='c-info-item'>
                        <a href='https://www.linkedin.com/in/maashirkhan/' target='_blank' rel="noreferrer">
                        <img src={linkedin} 
                            alt='contact-icon' 
                            className='c-icon'/>@maashirkhan
                        </a>
                    </div>
                    <div className='c-info-item'>
                        <a href='https://github.com/AashirKhan21' target='_blank' rel="noreferrer">
                        <img src={github} 
                            alt='contact-icon' 
                            className='c-icon'/>@AashirKhan21
                        </a>
                    </div>
                    <div className='c-info-item'>
                        <a href='mailto:maashirkhan467@gmail.com' target='_blank' rel="noreferrer">
                        <img src={email} 
                            alt='contact-icon' 
                            className='c-icon'/>maashirkhan467@gmail.com
                        </a>
                    </div>
                </div>
            </div>
            <div className='c-right'>
                <p className='c-desc'>
                    <b>What's your story?</b> Get in touch. Always available for freelancing if the
                    right opportunity arises.
                </p>
                <form ref={Refform} className='c-form'>
                    <input type='text' placeholder='Name' name='user_name'/>
                    <input type='text' placeholder='Subject' name='user_subject'/>
                    <input type='text' placeholder='Email' name='user_email'/>
                    <textarea rows={5} placeholder='Message' name='message'/>
                    <button>Submit</button>
                </form>
            </div>
        </div>
      </div>
  )
};

export default Contact;