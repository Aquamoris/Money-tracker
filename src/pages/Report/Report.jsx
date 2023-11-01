import React from 'react';
import Navbar from "../../components/Navbar/Navbar";
import SourceToggleContainer from "../../components/Report/SourceToggleContainer";
import PieChartContainer from "../../components/Report/PieChartContainer";

const Report = () => {
    return (
        <div>
            <SourceToggleContainer />
            <PieChartContainer />
            <Navbar />
        </div>
    );
};

export default Report;