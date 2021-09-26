import React from 'react';

const Profile = (props) => {
    console.log(props)
    const { name,age, eyeColor, phone, salary, picture } = props.developer;
    return (
        <div>
            <div class="card" style={{width: "18rem"}}>
                <img src={picture} style={{height: "200px"}} class="card-img-top" alt="..."/>
                <div class="card-body">
                    <h5 class="card-title">Name: {name}</h5>
                    <p class="card-text">Phone: {phone}</p>
                    <p class="card-text">Salary: {salary}</p>
                    <p class="card-text">age: {age}</p>
                    <p class="card-text">Eye Color: {eyeColor}</p>
                    <button class="btn btn-primary" onClick ={()=>props.handleAddToCart(props.developer)}>Add To Cart</button>
                </div>
            </div>
        </div>
    );
};

export default Profile;