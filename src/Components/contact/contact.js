import React, { useRef , useState, useContext} from 'react';
import './contact.css';
import phone from '../../img/phone.png';
import email from '../../img/email.png';
import github from '../../img/github.png';
import linkedin from '../../img/linkedin.png';
import emailjs from '@emailjs/browser';
import { ThemeContext } from '../../Context';

const Contact = () => {
    const Refform = useRef();
    const [done, setDone] = useState(false);
    const theme = useContext(ThemeContext);
    const darkMode = theme.state.darkMode;
    const sendEmail = (e) => {
        e.preventDefault();
    
        emailjs.sendForm(
            'service_4a6gkcs', 
            'template_knrx7os', 
            Refform.current, 
            'user_ptbEnG20SF0ZEah4geAYi')
          .then((result) => {
              console.log(result.text);
              setDone(true);
          }, (error) => {
              console.log(error.text);
          });
      };
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
                <form ref={Refform} onSubmit={sendEmail} className='c-form'>
                    <input style={{backgroundColor: darkMode && "#333", color: darkMode && "white"}} type='text' placeholder='Name' name='user_name'/>
                    <input style={{backgroundColor: darkMode && "#333", color: darkMode && "white"}} type='text' placeholder='Subject' name='user_subject'/>
                    <input style={{backgroundColor: darkMode && "#333", color: darkMode && "white"}} type='text' placeholder='Email' name='user_email'/>
                    <textarea rows={5} placeholder='Message' name='message'
                         style={{backgroundColor: darkMode && "#333", color: darkMode && "white"}} 
                    />
                    <button>Submit</button>
                    {done ? <p className='c-done'>Message sent successfully!</p> : null}
                </form>
            </div>
        </div>
      </div>
  )
};

export default Contact;