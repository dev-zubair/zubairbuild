import React from 'react';
import './Header.css';
import header from './../../images/header-image.gif'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDollarSign } from '@fortawesome/free-solid-svg-icons';


const Header = () => {
    return (
        <div className='header'>
            <img src={header} alt="" />
            <h1 style={{ paddingTop: '20px' }}>The Wheel Summit 2021 for poor people</h1>
            <p>Here are our top donor who will donates for Poor People</p>
            <h3>Total Amount Needed : <FontAwesomeIcon icon={faDollarSign} /> 200 Million</h3>
        </div>
    );
};

export default Header;