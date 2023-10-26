import React, {useState} from 'react';
import style from './Category.module.css';
import drag from '../../assets/drag.png'
import {useLocation} from "react-router-dom";

const Category = (props) => {
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

    return (editMode
            ? <div className={style.wrapper} id={props.name} onBlur={newOperation}>
                <span>Sum </span>
                <span>
                    <input
                        autoFocus={true}
                        value={amount}
                        onChange={changeHandler}
                        type='text'/>
                </span>
            </div>
            : <div className={style.wrapper} onClick={() => setEditMode(!editMode)}
                   style={{backgroundColor: props.color}}>
                <div className={style.category} key={props.name} id={props.name}>
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