import React from 'react';
import './productList.css';
import Product from '../product/product';
import { projects } from '../../data';

const productList = () => {
  
  return (
    <div className='pl'>
        <div className='pl-texts'>
            <h1 className='pl-title'>Create & Inspire with Aashir</h1>
            <p className='pl-desc'>
                Aashir has a creative portfolio based on web application 
                and desktop application which will help you to create 
                and inspire your ideas and projects.
            </p>
        </div>
        <div className='pl-list'>
            {projects.map((item) => (
                <Product key={item.id} img={item.img} link={item.link}/>
            ))}

        </div>
    </div>
    )
};

export default productList;
