import React, {useState} from 'react';
import style from './Operation.module.css';

const Operation = (props) => {
    const [editMode, setEditMode] = useState(false);
    const id = props.id;

    const activateEditMode = () => {
        setEditMode(true);
    }

    const deactivateEditMode = () => {
        setEditMode(false);
    }

    const saveEdit = () => {
        deactivateEditMode();
    }

    const deleteCategory = (e) => {
        props.deleteAndUpdate(+e.currentTarget.id);
        deactivateEditMode();
    }

    return (
        <div>
            {editMode
                ? <div key={id}>
                    <input type="text" value={props.category}/>
                    <input type="text" value={props.amount}/>
                    <button id={id} onClick={deleteCategory}>Delete</button>
                    <button onClick={saveEdit}>Save</button>
                </div>
                : <div key={id} id={id} className={style.operation} onDoubleClick={activateEditMode}>
                    <div>{props.category}</div>
                    <div className={props.kind === 'expense' ? style.expense : style.income}>
                        {props.kind === 'expense' ? '-' : '+'}
                        {props.amount}
                    </div>
                </div>}
        </div>
    );
};

export default Operation;