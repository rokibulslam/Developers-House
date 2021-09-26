import React from 'react';
import './Cart.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingBasket } from '@fortawesome/free-solid-svg-icons'

const Cart = (props) => {
    const { cart } = props;
    const icon = <FontAwesomeIcon icon={faShoppingBasket} />
    let total = 0;
    for (const profile of cart) {
        total = total + profile.salary;
    }
    return (
        <div className="cart-main ms-5 me-2 px-5 pb-5 pt-2">
            <h6>Total Developers : {icon} {cart.length}</h6>
            <h6>Total: ${total}</h6>
            <ul>
                {
                    cart.map(profile => <li key={profile.index}>{profile.name}</li>)
                }
            </ul>
            <button class="btn btn-warning"> Buy Now</button>
        </div>
    );
};

export default Cart;