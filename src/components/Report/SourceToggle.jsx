import React from 'react';
import {Switch} from "@mui/material";

const SourceToggle = (props) => {
    return (
        <div>
            <span>Expense</span>
            <span>
                <Switch
                    checked={props.reportMode}
                    onClick={(e) => {
                        props.changeMode(e.target.checked)
                    }}
                    color="default"
                />
            </span>
            <span>Income</span>
        </div>
    );
};

export default SourceToggle;