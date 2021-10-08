import React from 'react';
import './Person.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDollarSign, faEnvelope, faDonate, faFlag, } from '@fortawesome/free-solid-svg-icons';


const Person = (props) => {
    // destructure props items
    const { name, picture, company, country, email, donation } = props.donor;

    return (
        <div>
            <div style={{ width: '300px' }}>
                <div className="card h-100 mb-5">
                    <img src={picture} alt="" />
                    <div className="card-body card-style">
                        <h4 className="card-title">{name}</h4>
                        <p className="card-title">Company: {company}</p>
                        <p className="card-title"><FontAwesomeIcon icon={faFlag} /> {country}</p>
                        <p className="card-title"><FontAwesomeIcon icon={faEnvelope} />  {email}</p>
                        <h4 className="card-title"><FontAwesomeIcon icon={faDollarSign} /> {donation}</h4>
                        <button onClick={() => props.handleAddToCart(props.donor)} className='btn btn-info fw-bolder'><FontAwesomeIcon icon={faDonate} /> Donate Now</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Person;