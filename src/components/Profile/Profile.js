import React from 'react';
import './Profile.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'

const Profile = (props) => {
    console.log(props)
    const { name, age, eyeColor, phone, salary, picture } = props.developer;
    const icon = <FontAwesomeIcon icon={faShoppingCart} />
    
    return (
        <div>
            <div class="card card-color">
                <img src={picture} style={{height: "200px"}} class="card-img-top" alt="..."/>
                <div class="card-body">
                    <h6 class="card-title">Name: {name}</h6>
                    <p class="card-text">Phone: {phone}</p>
                    <p class="card-text">Salary: ${salary}</p>
                    <p class="card-text">Age: {age} yrs.</p>
                    <p class="card-text">Eye Color: {eyeColor}</p>
                    <button class="btn btn-primary" onClick={() => props.handleAddToCart(props.developer)}>{icon} Add To Cart</button>
                </div>
            </div>
        </div>
    );
};

export default Profile;