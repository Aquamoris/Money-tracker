import React from 'react';
import CategoriesContainer from "../../components/Categories/CategoriesContainer";
import Navbar from "../../components/Navbar/Navbar";
import Operations from "../../components/Operations/Operations";

const Income = () => {
    return (
        <div>
            <CategoriesContainer />
            <Operations />
            <Navbar />
        </div>
    );
};

export default Income;