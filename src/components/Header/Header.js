import React from 'react';
import './Header.css';

function Header({ title }) {
  return (
    <header className='header'>
      <div className="container">
        <h1 className='header-title'>
          <a className='header-title__link' href="/">
            { title }
          </a>
        </h1>
      </div>
    </header>
  )
}

export default Header;