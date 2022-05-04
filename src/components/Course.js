import React from "react";

const Course = ({ course: { title, description, img, price } }) => {
    // console.log({ img });

    return (
        <>
            <div>
                <div className="bg-white border border-gray-200 rounded-lg shadow-md dark:border-gray-900 dark:bg-black">
                    <img
                        src={img}
                        className="rounded-t-lg"
                        alt="title"
                        width=""
                        height=""
                    />
                    <div className="p-5">
                        <h3 className="mb-2 text-2xl font-bold dark:text-white">
                            {title}
                        </h3>
                        <p className="mb-6 font-normal text-gray-700 dark:text-gray-400">
                            {description}
                        </p>
                        <div className="flex items-center justify-between">
                            <span className="text-3xl font-bold text-blue-700 dark:text-blue-500">
                                ${price}
                            </span>
                            <button
                                type="button"
                                className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                            >
                                Enrol Now
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Course;
