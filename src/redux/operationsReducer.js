let initialState = {
    operations: [
        {id: 1, type: 'expense', category: 'Animals', amount: 300},
        {id: 2, type: 'income', category: 'Salary', amount: 300},
        {id: 3, type: 'expense', category: 'Transport', amount: 500}
    ]
}

const operationsReducer = (state = initialState, action) => {
    switch (action.type) {
        default:
            return {...state}
    }
}

export default operationsReducer;