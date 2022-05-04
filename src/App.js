import React, { useState } from "react";

import {
    Header,
    Intro,
    Career,
    Features,
    Courses,
    Testimonials,
    Faqs,
    Contact,
    Footer,
} from "./sections";

const App = () => {
    const [darkMode, setDarkMode] = useState(false);

    return (
        <div className={darkMode ? "app dark" : "app"}>
            <Header darkMode={darkMode} setDarkMode={setDarkMode} />
            <Intro />
            <Career />
            <Features />
            <Courses />
            <Testimonials />
            <Faqs />
            <Contact />
            <Footer />
        </div>
    );
};

export default App;
