import React from 'react';
import {Link} from 'react-router-dom';
import HeroImage from '../assets/hero.jpg';
import '../styles/Home.css';


function Home() {
  return (
    <div className='home' style={{backgroundImage: `url(${HeroImage})`}}>
      <div className='headerContainer'>
        <h1>VIVA INO SOLUTIONS</h1>
        <p>We offer variety of products for Industrial and Commerical needs</p>
      </div>
      <div className='buttons'>
      <Link to="/Contact">
        <button>Contact Us</button>
        </Link>
        <Link to="/Product">
        <button>Products</button>
        </Link>
      </div>
    </div>
  )
}

export default Home
