import React from 'react';
import './Cart.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faDollarSign, faThumbsUp } from '@fortawesome/free-solid-svg-icons';

const Cart = (props) => {
    console.log(props);

    // calculate total donation by using reduce method
    const totalDonation = props.cart.reduce((previous, donor) => previous + +donor.donation, 0)


    return (
        <div className='cart-section'>
            <h2><FontAwesomeIcon icon={faUser} /> {props.cart.length}</h2>
            <h4>Total Funded <FontAwesomeIcon icon={faDollarSign} />: {totalDonation}</h4>
            <ul>
                <Name cart={props.cart} />
            </ul>
        </div>
    );
};


function Name({ cart }) {
    return (
        //The donors name who have donated and also use a KEY in here also
        cart.map(p => <div className='donor-name' key={p.email}><h5><FontAwesomeIcon icon={faThumbsUp} /> {p.name}</h5></div>)
    )
}

export default Cart;