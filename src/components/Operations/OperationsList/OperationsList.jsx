import React, {useState} from 'react';
import style from './OperationsList.module.css';
import Operation from "../Operation/Operation";
import clear from '../../../assets/clear.png';

const OperationsList = (props) => {
    const [filter, setFilter] = useState(null);

    let operations = props.operations;

    const handler = (e) => {
        filter === e.target.value
            ? setFilter(null)
            : setFilter(e.target.value);
    }

    if (filter) {
        operations = props.operations.filter(e => {
            if (e.kind === filter) {
                return e;
            }
        })
    }

    return (
        <div className={style.wrapper}>
            <div className={style.operations}>
                {operations.map(e => (
                    <Operation
                        key={e.id}
                        id={e.id}
                        kind={e.kind}
                        category={e.category}
                        amount={e.amount}
                        deleteAndUpdate={props.deleteAndUpdateOperations}
                    />
                ))}
            </div>
            <div className={style.filterButtonsWrapper}>
                { props.filterButtons.map(e => (
                    <button
                        className={filter === e.type
                            ? style.filterButton + ' ' + style.activeButton
                            : style.filterButton}
                        value={e.type}
                        onClick={handler}>{e.type.charAt(0).toUpperCase() + e.type.slice(1)}</button>
                )) }
                <div className={style.clearButton} onClick={() => setFilter(null)}>
                    <img src={clear} alt="clear"/>
                </div>
            </div>
        </div>
    );
};

export default OperationsList;