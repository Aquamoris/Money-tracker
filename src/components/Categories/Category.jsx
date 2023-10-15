import React from 'react';
import style from './Category.module.css';
import drag from '../../assets/drag.png'

const Category = (props) => {
    return (
        <div className={style.wrapper}>
            <div className={style.category} key={props.name} id={props.name} onClick={props.clickDeleteCategory}>
                <img src={props.image} alt={props.name}/>
                <div>{props.name}</div>
                <img style={
                    {width: '20px', height: '15px', opacity: '0.5', cursor: 'grab'}
                } src={drag} alt="drag"/>
            </div>
        </div>
    );
};

export default Category;