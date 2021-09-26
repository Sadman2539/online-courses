import React from 'react';
import './Course.css'

const Course = (props) => {
    const { courseName, author, star, enrolled, price, image } = props.course;
    return (
        <div>
            <div className="card">
                <div className="card-img">
                    <img src={image} alt="" />
                </div>
                <div className="card-body">
                    <h3>{courseName}</h3>
                    <p>by {author}</p>
                    <h5>${price}</h5>
                    <button>Add to cart</button>
                    <button>Wishlist</button>
                </div>
            </div>
        </div>
    );
};

export default Course;