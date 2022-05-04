import React from "react";

// import { UserIcon } from "@heroicons/react/solid";

const Testimonial = ({ testimonial: { name, comment, country, img } }) => {
    return (
        <div className="flex flex-col gap-4 p-6 bg-white border rounded-lg shadow-md md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-900 dark:hover:bg-gray-700">
            <img
                className="w-10 h-10 rounded-full"
                src={img}
                alt="Rounded avatar"
                width="100"
                height="10"
            />
            <div className="flex flex-col justify-between leading-normal">
                <h3 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                    {name}
                </h3>
                <p className="mb-3 dark:text-white">{country}</p>
                <p className="font-normal text-gray-700 dark:text-gray-400">
                    {comment}
                </p>
            </div>
        </div>
    );
};

export default Testimonial;
