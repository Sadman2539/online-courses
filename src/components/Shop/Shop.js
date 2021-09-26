import React, { useEffect, useState } from 'react';
import Course from '../Course/Course';
import './Shop.css'

const Courses = () => {
    // useState for courses 
    const [courses, setCourses] = useState([]);
    // useEffect for courses 
    useEffect(() => {
        fetch('./courses.json')
            .then(res => res.json())
            .then(data => setCourses(data));
    }, [])
    return (
        <div className="shop">
            <div className="courses">
                {
                    courses.map(course => <Course key={course.key} course={course}></Course>)
                }
            </div>
            <div className="cart">

            </div>
        </div>
    );
};

export default Courses;