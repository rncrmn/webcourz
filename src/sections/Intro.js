import React from "react";
import TypeAnimation from "react-type-animation";

import introImg from "../assets/images/front-end-development-blurb.svg";

const Intro = () => {
    return (
        <div className="min-h-screen bg-white dark:bg-black" id="home">
            <div className="absolute dark:hidden md:w-6/12 md:h-screen bg-blue-100 rounded-full z-[1] opacity-90 right-20" />
            <div className="container max-w-6xl px-4 pt-40 pb-8 mx-auto">
                <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                    <div className="z-10 flex flex-col justify-center order-2 align-center md:order-1">
                        <h1 className="text-4xl font-semibold md:text-5xl mb-7 dark:text-white">
                            Best{" "}
                            <span className="font-bold text-blue-700 dark:text-blue-500">
                                <TypeAnimation
                                    cursor={true}
                                    sequence={[
                                        "HTML",
                                        5000,
                                        "CSS",
                                        5000,
                                        "JavaScript",
                                        5000,
                                    ]}
                                    wrapper="span"
                                    repeat={Infinity}
                                />
                            </span>
                            Online Course for Front-End
                        </h1>
                        <p className="mb-10 text-xl dark:text-white">
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit, sed do eiusmod tempor incididunt ut labore et
                            dolore magna aliqua.
                        </p>
                        <button
                            type="button"
                            className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 text-xl font-semibold rounded-lg px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800 md:w-[40%]"
                        >
                            Start Learning
                        </button>
                    </div>
                    <div className="z-10 order-1 mb-12 md:mb-0 md:order-2">
                        <img
                            src={introImg}
                            alt="IntroImg"
                            width="666"
                            height="496"
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Intro;
