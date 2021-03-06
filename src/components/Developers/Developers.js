import React, { useEffect, useState } from 'react';
import './Developers.css'
import Cart from '../Cart/Cart';
import Profile from '../Profile/Profile';

const Developers = () => {
    const [developers, setDevelopers] = useState([])
    // state declare for handle handleAddToCart button 
    const [cart, setCart] = useState([])
    useEffect(() => {
        fetch("./developers.JSON")
            .then(res => res.json())
            .then(data => setDevelopers(data))
    }, [])
    const handleAddToCart = (profile) => {
        if (cart.indexOf(profile) === -1) {
            const newCart = [...cart, profile]
            setCart(newCart)
        }
        else {
            return
        }
    }
    

    return (
        <div div className = "developers-section ms-5 mt-5" >
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