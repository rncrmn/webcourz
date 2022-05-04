import React from "react";
import Navbar from "../components/Navbar";

const Header = ({ darkMode, setDarkMode }) => {
    return (
        <>
            <Navbar darkMode={darkMode} setDarkMode={setDarkMode} />
        </>
    );
};

export default Header;
