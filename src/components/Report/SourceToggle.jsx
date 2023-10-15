import React from 'react';
import {Switch} from "@mui/material";

const SourceToggle = (props) => {
    return (
        <div>
            <span>Expense</span>
            <span>
                <Switch color="default"/>
            </span>
            <span>Income</span>
        </div>
    );
};

export default SourceToggle;