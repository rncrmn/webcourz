import React from "react";

const Feature = ({ feature: { icon, title, description } }) => {
    return (
        <div className="gap-4 mb-10 md:flex">
            <div className="mb-6 md:mb-0">{icon}</div>
            <div>
                <h3 className="mb-6 text-4xl font-bold dark:text-white">
                    {title}
                </h3>
                <p className="text-xl dark:text-white">{description}</p>
            </div>
        </div>
    );
};

export default Feature;
