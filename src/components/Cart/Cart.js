import React from 'react';

const Cart = (props) => {
    const { cart } = props;
    let total = 0;
    for (const profile of cart) {
        total = total + profile.salary;
    }
    return (
        <div>
            <h1>Cart : {cart.length}</h1>
            <h2>${total}</h2>
            <ul>
                {
                    cart.map(profile => <li key={profile.index}>{profile.name}</li>)
                }
            </ul>
        </div>
    );
};

export default Cart;