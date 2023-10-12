import React from 'react'
import style from './Categories.module.css';
const Categories = (props) => {

    function clickAddCategory() {
        debugger;
        let body = prompt();
        props.addCategory(body);
    }

    return (
        <div>
            { props.categories.map(e => (
                <div className={style.category} key={e.name} id={e.name} onClick={clickAddCategory}>
                    <div>{e.name}</div>
                    <img src={e.image} />
                </div>
            )) }
        </div>
    )
}

export default Categories;