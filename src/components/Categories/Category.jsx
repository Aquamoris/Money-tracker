import React, {useState} from 'react';
import style from './Category.module.css';
import drag from '../../assets/drag.png'
import {useLocation} from "react-router-dom";

const Category = (props) => {
    console.log(props);
    const [editMode, setEditMode] = useState(false);
    const [amount, setAmount] = useState('');

    const location = useLocation();

    const changeHandler = (e) => {
        setAmount(e.target.value);
    }
    const newOperation = (e) => {
        if (amount) {
            props.addNewOperation(location.pathname === '/'
                    ? 'expense'
                    : 'income',
                e.currentTarget.id,
                +amount);
            setAmount('');
        }
        setEditMode(!editMode);
    }

    const deleteOperation = (e) => {
        if (location.pathname === '/') {
            props.deleteCategoryExpense(e.currentTarget.id);
        } else {
            props.deleteCategoryIncome(e.currentTarget.id);
        }
    }

    return (editMode
            ? <div className={style.wrapper + ' ' + style.sum} id={props.name} onBlur={newOperation}>
                <span>Sum </span>
                <span>
                    <input
                        autoFocus={true}
                        value={amount}
                        onChange={changeHandler}
                        type='text'/>
                </span>
            </div>
            : <div className={style.wrapper}>
                <div className={style.category} key={props.name} id={props.name}>
                    <img src={props.image} alt={props.name}/>
                    <div>{props.name}</div>
                    <div className={style.iconItem} style={{color: '#009D7C'}} onClick={() => setEditMode(!editMode)}>
                        +
                    </div>
                    <div id={props.name} className={style.iconItem} style={{color: '#F64A46'}} onClick={deleteOperation}>
                        &times;
                    </div>
                </div>
            </div>
    );
};

export default Category;