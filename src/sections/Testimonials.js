import React from "react";
import Testimonial from "../components/Testimonial";

const testimonialLists = [
    {
        name: "John Doe",
        comment:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        country: "New York",
        img: "./images/person-1.jpg",
    },
    {
        name: "Peg Legge",
        comment:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        country: "Los Angeles",
        img: "./images/person-2.jpg",
    },
    {
        name: "Daida Bugg",
        comment:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        country: "Houston",
        img: "./images/person-3.jpg",
    },
    {
        name: "Allie Grater",
        comment:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        country: "Chicago",
        img: "./images/person-4.jpg",
    },
];

const Testimonials = () => {
    return (
        <div className="py-10 dark:bg-black" id="testimonial">
            <div className="container px-4 py-6 mx-auto max-w-7xl">
                <h2 className="mb-16 text-4xl font-semibold text-center dark:text-white">
                    What Our Students Say
                </h2>
                <div className="grid gap-6 md:grid-cols-2">
                    {testimonialLists.map((testimonial, index) => (
                        <Testimonial
                            testimonial={testimonial}
                            key={testimonial.name + index}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Testimonials;
