import React from 'react'
import Category from "./Category";
import style from './Categories.module.css';
import add from '../../assets/add.png';
const Categories = (props) => {

    function clickAddCategory() {
        let body = prompt();
        if (!body) {
            return
        }

        let text = body[0].toUpperCase() + body.slice(1);
        props.addCategory(text);
    }

    function clickDeleteCategory(e) {
        props.deleteCategory(e.currentTarget.id);
    }

    return (
        <div className={style.wrapper}>
            { props.categories.map(e => (
                <Category
                    name={e.name}
                    image={e.image}
                    clickDeleteCategory={clickDeleteCategory}
                    color={props.colors[Math.floor(Math.random() * props.colors.length)]}
                    />
            )) }
            <img className={style.add} onClick={clickAddCategory} src={add} alt="Add"/>
        </div>
    )
}

export default Categories;