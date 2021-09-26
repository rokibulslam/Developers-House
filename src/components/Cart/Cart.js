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
        <div className="cart-main ms-5 p-5 pt-2">
            <h5 className="mx-5">Total Developers : {icon} {cart.length}</h5>
            <h6 className="text-danger">Total: ${total}</h6>
            <ul>
                {
                    cart.map(profile => <li className="bg-secondary text-white m-2 rounded p-2" key={profile.index}>{profile.name}</li>)
                }
            </ul>
            <button class="btn btn-warning"> Buy Now</button>
        </div>
    );
};

export default Cart;