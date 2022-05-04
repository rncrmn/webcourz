import React from "react";
import {
    AcademicCapIcon,
    UserGroupIcon,
    PlayIcon,
} from "@heroicons/react/solid";

import Feature from "../components/Feature";

const featureLists = [
    {
        title: "Certificate",
        description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        icon: (
            <AcademicCapIcon className="w-16 h-16 text-blue-700 dark:text-blue-500" />
        ),
    },
    {
        title: "Expert Instructors",
        description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        icon: (
            <UserGroupIcon className="w-16 h-16 text-blue-700 dark:text-blue-500" />
        ),
    },
    {
        title: "Learn from anywhere",
        description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        icon: (
            <PlayIcon className="w-16 h-16 text-blue-700 dark:text-blue-500" />
        ),
    },
];

const Features = () => {
    return (
        <div className="relative py-12 overflow-hidden bg-white dark:bg-black">
            <div className="dark:hidden absolute h-96 w-96 bg-blue-100 rounded-full z-[1] opacity-90 left-10" />
            <div className="dark:hidden absolute h-96 w-96 bg-blue-200 rounded-full z-[1] opacity-90 left-16 top-20" />
            <div className="container max-w-5xl px-8 py-6 mx-auto">
                <div className="grid grid-cols-1 md:gap-10 md:grid-cols-3">
                    <div className="z-10 order-1 pt-10">
                        <h2 className="text-5xl font-semibold text-right md:text-7xl dark:text-white">
                            Why Choose Us?
                        </h2>
                    </div>
                    <div className="z-10 order-2 col-span-2 pt-10 md:pl-10 md:border-l">
                        {featureLists.map((feature, index) => (
                            <Feature
                                feature={feature}
                                key={feature.title + index}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Features;
