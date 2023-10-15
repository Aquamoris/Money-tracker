import React from 'react';
import Navbar from "../../components/Navbar/Navbar";
import SourceToggle from "../../components/Report/SourceToggle";

const Report = () => {
    return (
        <div>
            <SourceToggle />
            Report
            <Navbar />
        </div>
    );
};

export default Report;