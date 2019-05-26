import React from 'react';
import { Link } from 'react-router-dom'
import './_navBar.scss';

const NavBar = () => {
  return (
    <div className='nav-bar'>
      <Link to='/' >Strona główna</Link>
      <Link to='/o-nas' >O nas</Link>
      <Link to='/galeria' >Galeria</Link>
      <Link to='/kontakt' >Kontakt</Link>
    </div>
  );
};

export default NavBar;
