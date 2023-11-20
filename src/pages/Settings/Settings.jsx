import React from 'react';
import Navbar from "../../components/Navbar/Navbar";
import MyListboxContainer from '../../components/Categories/MiListboxContainer';
import {log10} from "chart.js/helpers";

const Settings = () => {
    return (
        <div>
            <MyListboxContainer />
            <Navbar />
        </div>
    );
};

export default Settings;