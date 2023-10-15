import React from 'react'
import Category from "./Category";
import style from './Categories.module.css';
import add from '../../assets/add.png';
import {useLocation} from "react-router-dom";
const Categories = (props) => {

    const location = useLocation();
    let categories = '404';

    if (location.pathname === '/') {
        categories = props.expenseCategories.map(e => (
            <Category
                name={e.name}
                image={e.image}
                clickDeleteCategory={clickDeleteCategory}
            />
        ));
    } else if (location.pathname === '/income') {
        categories = props.incomeCategories.map(e => (
            <Category
                name={e.name}
                image={e.image}
                clickDeleteCategory={clickDeleteCategory}
            />
        ));
    }

    function clickAddCategory() {
        let body = prompt();
        if (!body) {
            return
        }

        let text = body[0].toUpperCase() + body.slice(1);

        if (location.pathname === '/') {
            props.addCategoryExpense(text);
        } else if (location.pathname === '/income') {
            props.addCategoryIncome(text);
        }
    }

    function clickDeleteCategory(e) {
        if (location.pathname === '/') {
            props.deleteCategoryExpense(e.currentTarget.id);
        } else if (location.pathname === '/income') {
            props.deleteCategoryIncome(e.currentTarget.id);
        }
    }

    return (
        <div className={style.wrapper}>
            { categories }
            <img className={style.add} onClick={clickAddCategory} src={add} alt="Add"/>
        </div>
    )
}

export default Categories;