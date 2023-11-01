const CHANGE_MODE = 'CHANGE_MODE';

let initialState = {
    reportMode: false
}

const reportReducer = (state = initialState, action) => {
    switch (action.type) {
        case CHANGE_MODE:
            return {
                ...state,
                reportMode: action.newMode
            }
        default:
            return state;
    }
}

export const changeMode = (newMode) => ({
        type: CHANGE_MODE,
        newMode
})

export default reportReducer;