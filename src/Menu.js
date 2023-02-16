import './Menu.css';
import React from 'react';
import { NavLink } from 'react-router-dom';
import image1 from './phenix.jpg';
const Menu = () => {
    return (
        <div className='di'>
           <div className='didi'><img src={image1}/></div>
            <ul className='liste'>
                <NavLink to='/'>
                <li className='item'>Accueil</li>
                </NavLink>
                <NavLink to='/Apropos'>
                <li className='item'>A propos</li>
                </NavLink>
                <NavLink to='/Contact'>
                <li className='item'>Contact</li>
                </NavLink>
                <NavLink to='/Portofolio'>
                <li className='item'>Portofolio</li>
                </NavLink>
                <NavLink to='/Services'>
                <li className='item'>Services</li>
                </NavLink>
            </ul>
        </div>
    );
};

export default Menu;