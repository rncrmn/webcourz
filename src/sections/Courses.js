import React from "react";
import Course from "../components/Course";

const courseLists = [
    {
        title: "HTML Course",
        description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        img: "./images/html-banner.jpg",
        price: "199",
    },
    {
        title: "CSS Course",
        description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        img: "./images/css-banner.jpg",
        price: "199",
    },
    {
        title: "JavaScript Course",
        description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        img: "./images/js-banner.jpg",
        price: "299",
    },
];

const Courses = () => {
    return (
        <div className="py-12 bg-gray-100 dark:bg-gray-900" id="courses">
            <div className="container px-4 py-8 mx-auto max-w-7xl">
                <h2 className="mb-16 text-4xl font-semibold text-center dark:text-white">
                    Our Courses
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-7">
                    {courseLists.map((course, index) => (
                        <Course course={course} key={course.title + index} />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Courses;
