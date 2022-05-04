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
                <h2 className="mb-20 text-2xl font-semibold text-center dark:text-white">
                    Graduates starting their career at
                </h2>
                <div className="flex-wrap justify-between gap-6 md:flex align-center">
                    <img
                        src={AirbnbLogo}
                        alt="airbnb"
                        width="150"
                        height="100"
                    />

                    <img
                        src={AdobeLogo}
                        alt="airbnb"
                        width="100"
                        height="100"
                    />

                    <img
                        src={HubSpotLogo}
                        alt="airbnb"
                        width="150"
                        height="200"
                    />

                    <img
                        src={MailchimpLogo}
                        alt="airbnb"
                        width="100"
                        height="200"
                    />

                    <img
                        src={GitlabLogo}
                        alt="airbnb"
                        width="150"
                        height="200"
                    />
                </div>
            </div>
        </div>
    );
};

export default Career;
