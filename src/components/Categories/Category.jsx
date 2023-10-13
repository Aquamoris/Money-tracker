import React from 'react';
import style from "./Category.module.css";

const Category = (props) => {
    return (
        <div className={style.wrapper} style={{backgroundColor: `${props.color}`}}>
            <div className={style.category} key={props.name} id={props.name} onClick={props.clickDeleteCategory}>
                <img src={props.image} alt={props.name}/>
                <div>{props.name}</div>
            </div>
        </div>
    );
};

export default Category;