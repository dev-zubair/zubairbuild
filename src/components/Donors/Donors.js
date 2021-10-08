import React, { useEffect, useState } from 'react';
import Cart from '../Cart/Cart.js';
import Person from '../Person/Person.js';
import './Donors.css'

const Donors = () => {
    const [donors, setDonors] = useState([]);
    const [cart, setCart] = useState([]);

    // loaded summit from json file
    useEffect(() => {
        fetch('./summit.json')
            .then(res => res.json())
            .then(data => setDonors(data))
    }, [])

    // Donation click handler function and validation
    const handleAddToCart = (donor) => {
        let ismatching = cart.find(p => p.name === donor.name)
        if (!ismatching) {
            const newCart = [...cart, donor];
            setCart(newCart);
        } else (
            alert('Thank you Sir! You have Already been Donated')
        )

    }
    return (
        <div className="container">

            <div className="row donors-main">
                <div className="col-9 donors">
                    <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between' }}>
                        {
                            donors.map(donor => <Person
                                //used key in here
                                key={donor._id}
                                donor={donor}
                                handleAddToCart={handleAddToCart}
                            ></Person>)
                        }
                    </div>
                </div>
                <div className='col-3 cart-section'>
                    <Cart cart={cart}></Cart>
                </div>
            </div>

        </div>
    );
};

export default Donors;