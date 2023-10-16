import React from 'react';
import Operation from "./Operation";

const OperationsList = (props) => {

    return (
        <div>
            { props.operations.map(e => (
                <Operation
                id={e.id}
                type={e.type}
                category={e.category}
                amount={e.amount}
                />
            )) }
        </div>
    );
};

export default OperationsList;