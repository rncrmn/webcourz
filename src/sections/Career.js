import React from "react";
import AirbnbLogo from "../assets/images/airbnb-logo.svg";
import AdobeLogo from "../assets/images/adobe-logo.svg";
import HubSpotLogo from "../assets/images/hubspot-logo.svg";
import MailchimpLogo from "../assets/images/mailchimp-logo.svg";
import GitlabLogo from "../assets/images/gitlab-logo.svg";

const Career = () => {
    return (
        <div className="py-12 bg-gray-100 dark:bg-gray-900">
            <div className="container max-w-5xl px-4 py-8 mx-auto">
                <h2 className="mb-10 text-2xl font-semibold text-center md:mb-20 dark:text-white">
                    Graduates starting their career at
                </h2>
                <div className="flex flex-col justify-center gap-20 md:gap-6 align-center md:flex-row md:justify-between">
                    <img
                        src={AirbnbLogo}
                        alt="airbnb"
                        width="150"
                        height="100"
                        className="self-center"
                    />

                    <img
                        src={AdobeLogo}
                        alt="airbnb"
                        width="100"
                        height="100"
                        className="self-center"
                    />

                    <img
                        src={HubSpotLogo}
                        alt="airbnb"
                        width="150"
                        height="200"
                        className="self-center"
                    />

                    <img
                        src={MailchimpLogo}
                        alt="airbnb"
                        width="100"
                        height="200"
                        className="self-center"
                    />

                    <img
                        src={GitlabLogo}
                        alt="airbnb"
                        width="150"
                        height="200"
                        className="self-center"
                    />
                </div>
            </div>
        </div>
    );
};

export default Career;
