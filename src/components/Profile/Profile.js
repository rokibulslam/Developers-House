import React from 'react';

const Profile = (props) => {
    console.log(props)
    const { name, salary, picture } = props.developer;
    return (
        <div>
            <div class="card gap-5" style={{width: "18rem"}}>
                <img src={picture} class="card-img-top" alt="..."/>
                <div class="card-body">
                    <h5 class="card-title">Name: {name}</h5>
                    <p class="card-text">Place: {}</p>
                    <p class="card-text">Budget: {salary}</p>
                    <p class="card-text">Budget: {}</p>
                    <p class="card-text">Established: {}</p>
                    <button class="btn btn-primary" onClick ={()=>props.handleAddToCart(props.developer)}>Go Add To Cart</button>
                </div>
            </div>
        </div>
    );
};

export default Profile;