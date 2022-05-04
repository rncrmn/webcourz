import React, { useState } from "react";
import { Link } from "react-scroll";
import { SunIcon, MoonIcon, MenuIcon, XIcon } from "@heroicons/react/solid";

const Navbar = ({ darkMode, setDarkMode }) => {
    const menuLists = [
        "home",
        "features",
        "courses",
        "testimonial",
        "faqs",
        "contact",
    ];

    // const menuLists = [
    //     {
    //         text: "home",
    //         to: "/",
    //     },
    //     {
    //         text: "features",
    //         to: "features",
    //     },
    //     {
    //         text: "courses",
    //         to: "features",
    //     },
    //     {
    //         text: "tesim",
    //         to: "features",
    //     }
    // ];

    const [open, setOpen] = useState(false);

    return (
        <nav className="fixed z-20 w-full py-4 bg-white shadow-md dark:bg-black">
            <div className="container relative justify-between max-w-6xl px-4 py-2 mx-auto md:flex align-center">
                <p className="flex text-3xl font-bold text-blue-700 dark:text-blue-500">
                    webcourz
                </p>
                <ul
                    className={`absolute left-0 w-full py-8 bg-white md:flex md:items-center md:py-0 md:static md:z-auto dark:bg-black md:w-auto md:visible ${
                        open ? "visible" : "hidden"
                    }`}
                >
                    {menuLists.map((item, index) => (
                        <li key={item + index}>
                            <Link
                                to={item}
                                spy={true}
                                smooth={true}
                                offset={-50}
                                duration={500}
                                className="block px-5 py-2 font-semibold capitalize text-md dark:text-white"
                            >
                                {item}
                            </Link>
                        </li>
                    ))}
                    <li>
                        <p
                            className="block px-5 py-2 font-semibold capitalize cursor-pointer text-md dark:text-white"
                            onClick={() => setDarkMode(!darkMode)}
                        >
                            {darkMode ? (
                                <SunIcon className="w-6 h-6 text-yellow-300" />
                            ) : (
                                <MoonIcon className="w-6 h-6" />
                            )}
                        </p>
                    </li>
                </ul>
                <div
                    className="absolute cursor-pointer right-8 top-4 md:hidden"
                    onClick={() => setOpen((prev) => !prev)}
                >
                    {open ? (
                        <XIcon className="w-6 h-6 dark:text-white" />
                    ) : (
                        <MenuIcon className="w-6 h-6 dark:text-white" />
                    )}
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
