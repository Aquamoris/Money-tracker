import React from 'react';
import CategoriesContainer from "../../components/Categories/CategoriesContainer";
import Navbar from "../../components/Navbar/Navbar";
import OperationsListContainer from "../../components/Operations/OperationsList/OperationsListContainer";

const Income = () => {
    return (
        <div>
            <CategoriesContainer />
            <OperationsListContainer />
            <Navbar />
        </div>
    );
};

export default Income;