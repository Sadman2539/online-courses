import React from 'react';
import './Course.css'  //Import css file
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import Rating from 'react-rating';

const Course = (props) => {

    const { courseName, author, star, enrolled, price, image } = props.course;


    return (

        <div className="card">
            <div className="card-img">
                <img src={image} alt="" />
            </div>
            <div className="card-body">
                <h3>{courseName.slice(0, 45)}...</h3>
                <p>by {author}</p>

                ({star}) <Rating
                    initialRating={star}
                    emptySymbol="far fa-star rating-icon"
                    fullSymbol="fas fa-star rating-icon"
                    readonly
                />  <span>({enrolled})</span>
                <h3>${price}</h3>
                <button className="regular-btn" onClick={() => props.handleAddToButton(props.course)}>
                    <FontAwesomeIcon className="btn-icon" icon={faShoppingCart} />
                    Add to cart</button>
                <button className="regular-btn">
                    <i className="fas fa-heart btn-icon " aria-hidden="true"></i>
                    Wishlist</button>
            </div>
        </div>

    );
};

export default Course;