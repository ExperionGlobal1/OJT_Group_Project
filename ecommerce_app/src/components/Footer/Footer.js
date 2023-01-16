import React from 'react';
import "./Footer.css";
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className='footer bg-orange'>
      <div className = "container py-4 text-center">
        <div className='flex align-center justify-center text-white fw-3 fs-14'>
          <Link to = "/" className='text-uppercase'>Privacy policy</Link>
          <div className='vert-line'></div>
          <Link to = "/" className='text-uppercase'>term of service</Link>
          <div className='vert-line'></div>
          <Link to = "/" className='text-uppercase'>About E-Cart.</Link>
        </div>
        <span className='text-white copyright-text text-manrope fs-14 fw-3'>&copy; 2023 E-Cart. All Rights Reserved.</span>
      </div>
    </footer>
  )
}

export default Footer