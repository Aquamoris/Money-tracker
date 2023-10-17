import React from 'react';
import style from './OperationsList.module.css';
import Operation from "../Operation/Operation";

const OperationsList = (props) => {

    console.log(props.operations);
    let operations = props.operations;

    return (
        <div className={style.wrapper}>
            { operations.map(e => (
                <Operation
                id={e.id}
                kind={e.kind}
                category={e.category}
                amount={e.amount}
                deleteAndUpdate={props.deleteAndUpdateOperations}
                />
            )) }
        </div>
    );
};

export default OperationsList;