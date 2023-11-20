const ADD_OPERATION = 'ADD_OPERATION';
const DELETE_OPERATION = 'DELETE_OPERATION';
const UPDATE_ID = 'UPDATE_ID';

let initialState = {
    operations: [
        {id: 0, kind: 'income', category: 'Salary', amount: 80000},
        {id: 1, kind: 'expense', category: 'Animals', amount: 300},
        {id: 2, kind: 'expense', category: 'Transport', amount: 500},
        {id: 3, kind: 'expense', category: 'Transport', amount: 500},
        {id: 4, kind: 'income', category: 'Salary 2', amount: 50000},
        {id: 5, kind: 'income', category: 'Salary 2', amount: 15000},
        {id: 6, kind: 'income', category: 'Salary', amount: 15000},
        {id: 7, kind: 'income', category: 'Part-time work', amount: 7500},
        {id: 8, kind: 'income', category: 'Part-time work', amount: 15500},
        {id: 9, kind: 'expense', category: 'Home', amount: 5500},
        {id: 10, kind: 'expense', category: 'Entertainments', amount: 17500},
    ],
    filterButtons: [
        {type: 'expense'},
        {type: 'income'}
    ]
}

const operationsReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_OPERATION:
            return {
                ...state,
                operations: [...state.operations, {
                    id: state.operations.length,
                    kind: action.kind,
                    category: action.category,
                    amount: action.amount
                }]
            }
        case DELETE_OPERATION:
            return {
                ...state,
                operations: state.operations.filter(e => {
                    if (e.id !== action.id) {
                        return e
                    }
                }),
            }
        case UPDATE_ID:
            return {
                ...state,
                operations: state.operations.map((e, index) => ({
                    id: index, kind: e.kind, category: e.category, amount: e.amount
                }))
            }
        default:
            return {...state}
    }
}

export const addOperation = (kind, category, amount) => ({
    type: ADD_OPERATION,
    kind,
    category,
    amount
});
const deleteOperation = (id) => ({
    type: DELETE_OPERATION,
    id
});
const updateOperationsID = () => ({
    type: UPDATE_ID
})
export const addNewOperation = (kind, category, amount) => {
    return (dispatch) => {
        dispatch(addOperation(kind, category, amount));
        dispatch(updateOperationsID());
    }
}
export const deleteAndUpdateOperations = (id) => {
    return (dispatch) => {
        dispatch(deleteOperation(id));
        dispatch(updateOperationsID());
    }
}

export default operationsReducer;