import React from 'react';
import './about.css';
import aboutimg from '../../img/bg3.png';
import gdsc from '../../img/gdsc.png';
const about = () => {
return (
    <div className='a'>
        <div className='a-left'>
            <div className='a-card bg'></div>
            <div className='a-card'>
              <img src={aboutimg}
                   alt='about'
                  className='a-img'/>
            </div>
        </div>
        <div className='a-right'>
            <h1 className='a-title'>About Me</h1>
            <p className='a-sub'>
                A crazy MERN Stack Developer who loves to learn and explore new technologies
                and frameworks.
            </p>
            <p className='a-desc'>
              I am a MERN Stack Developer with a passion for creating 
              and building Web & Desktop applications.I have a background 
              in JavaScript, React, NodeJS and C#. I have a strong knowledge in UI/UX design,
              and have a strong logic building and problem solving skills.
            </p>
            <div className='a-award'>
                <img src={gdsc} alt='GDSC KIET' className='a-award-img'/>
                <div className='a-award-text'>
                    <h4 className='a-award-title'>Google Developer Student Clubs - KIET</h4>
                    <p className='a-award-desc'>
                        I am also work for Google Developer Student Clubs - KIET as Web Lead.
                    </p>
                </div>    
            </div>
        </div>
    </div>
  );
};

export default about;
