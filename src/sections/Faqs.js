import React from "react";
import Faq from "../components/Faq";

const Faqs = () => {
    const faqLists = [
        {
            question: "How long does my subscription last?",
            answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
        },
        {
            question: "Do you have a free trial?",
            answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
        },
        {
            question: "What can I do if I'm stuck on a learning task?",
            answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
        },
        {
            question: "How do I download videos for offline viewing?",
            answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
        },
    ];

    return (
        <div className="py-10 dark:bg-black" id="faqs">
            <div className="container max-w-5xl px-4 py-6 mx-auto">
                <h2 className="mb-16 text-4xl font-semibold dark:text-white">
                    Q&amp;A
                </h2>
                {faqLists.map((faq, index) => (
                    <Faq faq={faq} key={index} />
                ))}
            </div>
        </div>
    );
};

export default Faqs;
