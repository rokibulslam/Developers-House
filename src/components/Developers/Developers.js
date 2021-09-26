import React, { useEffect, useState } from 'react';
import './Developers.css'
import Cart from '../Cart/Cart';
import Profile from '../Profile/Profile';

const Developers = () => {
    const [developers, setDevelopers] = useState([])
    const [cart, setCart] = useState([])
    useEffect(() => {
        fetch("./developers.JSON")
            .then(res => res.json())
            .then(data => setDevelopers(data))
    }, [])
    const handleAddToCart = (profile) => {
        const newCart = [...cart, profile]
        setCart(newCart)

    }

    return (
        <div className ="developers-section">
            <div className = "developer-section" >
                {
                    developers.map(developer => <Profile
                        key={developer.id}
                        developer={developer} 
                        handleAddToCart={handleAddToCart}
                    />)
                }
            </div>
            <div>
                <Cart cart={cart}/>
            </div>
            
        </div>
    );
};

export default Developers;