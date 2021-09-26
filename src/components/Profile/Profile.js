import React from 'react';
import './Profile.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import { faFacebook, faTwitter } from '@fortawesome/free-brands-svg-icons'
const Profile = (props) => {
    const { name, age, eyeColor, phone, salary, picture, gender } = props.developer;
    const cartIcon = <FontAwesomeIcon icon={faShoppingCart} />
    const fbIcon = <FontAwesomeIcon icon={faFacebook}size = '3x' />
    const twiterIcon = <FontAwesomeIcon icon={faTwitter}size = '3x' />
    
    return (
        <div>
            <div class="card card-color">
                <img src={picture} style={{height: "200px"}} class="card-img-top" alt="..."/>
                <div class="card-body">
                    <h6 class="card-title">Name: {name}</h6>
                    <p class="card-text mb-2">Phone: {phone}</p>
                    <p class="card-text mb-2 text-danger">Salary: ${salary}</p>
                    <p class="card-text mb-2">Age: {age} yrs.</p>
                    <p class="card-text mb-2">Eye Color: {eyeColor}</p>
                    <p class="card-text mb-2">Gender: {gender}</p>
                    <button class="btn btn-primary" onClick={() => props.handleAddToCart(props.developer)}>{cartIcon} Add To Cart</button>
                    <p className="my-3">{fbIcon}            {twiterIcon}</p>
                </div>
            </div>
        </div>
    );
};

export default Profile;