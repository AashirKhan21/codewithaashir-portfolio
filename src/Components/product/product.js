import React from 'react';
import './product.css';
import covidimg from '../../img/covid19.png';

const product = () => {
  return (
    <div className='p'>
        <div className='p-browser'>
            <div className='p-circle'></div>
            <div className='p-circle'></div>
            <div className='p-circle'></div>
        </div>
        <a href='https://covid19-aashir.netlify.app/' target="_blank" rel='noreferrer'>
            <img src={covidimg} alt='' className='p-img' />
        </a>
    </div>
  )
};

export default product;
