import React from 'react';
import './about.css';
import aboutimg from '../../img/bg2.png';

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
            right
        </div>
    </div>
  );
};

export default about;
