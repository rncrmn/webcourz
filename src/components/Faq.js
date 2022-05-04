import React from "react";
import { QuestionMarkCircleIcon } from "@heroicons/react/solid";

const Faq = ({ faq: { question, answer } }) => {
    return (
        <div className="p-6 border-b">
            <h3 className="mb-6 text-2xl font-semibold dark:text-white">
                <QuestionMarkCircleIcon className="inline-block w-6 h-6 mr-2 text-blue-700" />
                {question}
            </h3>
            <p className="dark:text-slate-100">{answer}</p>
        </div>
    );
};

export default Faq;
