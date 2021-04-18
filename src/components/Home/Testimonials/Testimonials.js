import React from 'react';
import Testimonial from '../Testimonial/Testimonial';

const Testimonials = () => {
    const testimonialData = [
        {
            description: "You guys are amazing! You worked so hard for our wedding.",
            name: "Sarah Alam"
        },

        {
            description: "Your event management skill is awesome. Enjoyed my sister's birthday party a lot. Surely i'll book your team for my birthday arrangement.",
            name: "Ashraf Bhuiyan"
        },

        {
            description: "You're doing great job bro. I'll book your team for any event planning.",
            name: "Papri Akter"
        },
    ]

    return (
        <div style={{marginTop: '150px'}} className="container text-center">
            <div>
                <h1>Clients Feedback</h1>
            </div>
            <div className="d-flex">
                {
                    testimonialData.map(testimonial => <Testimonial testimonial={testimonial} key={testimonial.name}></Testimonial>)
                }
            </div>
        </div>
    );
};

export default Testimonials;