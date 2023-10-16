import React from 'react';
import CategoriesContainer from "../../components/Categories/CategoriesContainer";
import Navbar from "../../components/Navbar/Navbar";
import OperationListContainer from "../../components/Operations/OperationListContainer";

const Income = () => {
    return (
        <div>
            <CategoriesContainer />
            <OperationListContainer />
            <Navbar />
        </div>
    );
};

export default Income;