import React from 'react';
import style from './Operation.module.css';

const Operation = (props) => {
    const id = props.id;

    return (
        <div key={id} id={id} className={style.operation}>
            <div>{props.category}</div>
            <div className={props.kind === 'expense' ? style.expense : style.income}>
                {props.kind === 'expense' ? '-' : '+'}
                {props.amount}
            </div>
        </div>
    );
};

export default Operation;