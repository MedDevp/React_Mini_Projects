import React, { useState } from 'react';

const Testimonails = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const testimonials = [
        {
            content: "1-This is the best product I've ever used!",
            name: "Jane Doe"
        },
        {
            content: "2-I highly recommend this product to everyone!",
            name: "John Smith"
        },
        {
            content: "3-This product has completely changed my life!",
            name: "Bob Johnson"
        },
    ];

    const handleNext = () => {
        setCurrentIndex((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
    };

    const handlePrev = () => {
        setCurrentIndex((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
    };

    return (
        <div className='Test-card'>
            <div>
                <div>{testimonials[currentIndex].content}</div>
                <div>{testimonials[currentIndex].name}</div>
            </div>
            <div className='btns'>
                <button onClick={handlePrev}>Prev</button>
                <button onClick={handleNext}>Next</button>
            </div>
        </div>
    );
};

export default Testimonails;
