import React from 'react';
import style from './Operation.module.css';

const Operation = (props) => {
    return (
        <div key={props.id} className={style.operation}>
            <div>{props.category}</div>
            <div className={props.type === 'expense' ? style.expense : style.income}>
                {props.type === 'expense' ? '-' : '+'}
                {props.amount}
            </div>
        </div>
    );
};

export default Operation;