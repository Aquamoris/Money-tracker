import React from 'react'
import Category from "./Category";
import style from './Categories.module.css';
import add from '../../assets/add.png';
import {useLocation} from "react-router-dom";
const Categories = (props) => {

    const location = useLocation();
    let categoriesSource = [];

    if (location.pathname === '/') {
        categoriesSource = props.expenseCategories;
    } else if (location.pathname === '/income') {
        categoriesSource = props.incomeCategories;
    }

    let categories = categoriesSource.map(e => (
        <Category
            key={e.id}
            name={e.name}
            image={e.image}
            color={e.color}
            addNewOperation={props.addNewOperation}
            deleteCategoryIncome={props.deleteCategoryIncome}
            deleteCategoryExpense={props.deleteCategoryExpense}
        />
    ));

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

    return (
        <div className={style.wrapper}>
            { categories }
            <img className={style.add} onClick={clickAddCategory} src={add} alt="Add"/>
        </div>
    )
}

export default Categories;