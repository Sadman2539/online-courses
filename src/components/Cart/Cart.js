import React from 'react';
import './Cart.css'

const Cart = (props) => {
    const { cart } = props;
    const totalPrice = cart.reduce((previous, course) => previous + course.price, 0);
    return (
        <div className="cartBody">
            <h2>Total Courses: {cart.length}</h2>
            <div>
                <ul>
                    {cart.map(course => <li>
                        <div className="cartProduct">

                            <img className="cartImg" src={course.image} alt="" />

                            <div className="courseName">
                                {course.courseName.slice(0, 20)}...

                            </div>
                            <div>
                                <i className="fas fa-times-circle fa-2x close-btn"></i>
                            </div>

                        </div>
                    </li>)}
                </ul>
            </div>
            <hr />
            <h2>Total Price: ${totalPrice.toFixed(2)}</h2>
            <button className="regular-btn">Checkout</button>
        </div>
    );
};

export default Cart;