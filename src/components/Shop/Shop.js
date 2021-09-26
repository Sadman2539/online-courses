import React, { useEffect, useState } from 'react';
import Cart from '../Cart/Cart';
import Course from '../Course/Course';
import './Shop.css'

const Courses = () => {
    // useState for courses 
    const [courses, setCourses] = useState([]);
    // useState for cart 
    const [cart, setCart] = useState([]);

    // useEffect for courses 
    useEffect(() => {
        fetch('./courses.json')
            .then(res => res.json())
            .then(data => setCourses(data));
    }, [])
    // handleAddToButton function declaration 
    const handleAddToButton = (course) => {
        const updatedCart = [...cart, course];
        setCart(updatedCart);
    }
    return (
        <div className="shop">
            <div className="courses">
                {
                    courses.map(course => <Course
                        key={course.key}
                        course={course}
                        handleAddToButton={handleAddToButton}
                    ></Course>)
                }
            </div>
            <div className="cart">
                <Cart

                    cart={cart}></Cart>
            </div>
        </div>
    );
};

export default Courses;