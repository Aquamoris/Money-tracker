import React from 'react';
import style from './Navbar.module.css';
import {NavLink} from "react-router-dom";

const Navbar = () => {
    return (
        <nav className={style.navbar}>
            <div>
                <NavLink to='/' className={path => path.isActive ? style.active : ''}>Expense</NavLink>
            </div>
            <div>
                <NavLink to='/income' className={path => path.isActive ? style.active : ''}>Income</NavLink>
            </div>
            <div>
                <NavLink to='/report' className={path => path.isActive ? style.active : ''}>Report</NavLink>
            </div>
            <div>
                <NavLink to='/settings' className={path => path.isActive ? style.active : ''}>Settings</NavLink>
            </div>
        </nav>
    );
};

export default Navbar;