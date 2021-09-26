import React from 'react';

const Cart = (props) => {
    const { cart } = props;
    let total = 0;
    for (const profile of cart) {
        total = total + profile.salary;
    }
    return (
        <div>
            <h5>Total Developers : {cart.length}</h5>
            <h5>Total: ${total}</h5>
            <ul>
                {
                    cart.map(profile => <li key={profile.index}>{profile.name}</li>)
                }
            </ul>
            <button class="btn btn-warning">Buy Now</button>
        </div>
    );
};

export default Cart;