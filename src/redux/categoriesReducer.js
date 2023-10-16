import groceries from '../assets/groceries.png'
import entertainments from '../assets/entertainments.png'
import transport from '../assets/transport.png';
import animals from '../assets/animals.png';
import home from '../assets/home.png';
import none from '../assets/none.png';

const ADD_CATEGORY_EXPENSE = 'ADD_CATEGORY_EXPENSE';
const DELETE_CATEGORY_EXPENSE = 'DELETE_CATEGORY_EXPENSE';
const ADD_CATEGORY_INCOME = 'ADD_CATEGORY_INCOME';
const DELETE_CATEGORY_INCOME = 'DELETE_CATEGORY_INCOME';

let initialState = {
    expenseCategories: [
        {name: 'Groceries', image: groceries, color: '#98FB98'},
        {name: 'Entertainments', image: entertainments, color: '#F64A46'},
        {name: 'Transport', image: transport, color: '#FFFF99'},
        {name: 'Animal', image: animals, color: 'rgba(117,90,81,0.99)'},
        {name: 'Home', image: home, color: '#9c85bb'},
    ],
    incomeCategories: [
        {name: 'Salary', image: groceries, color: '#46c7bb'},
        {name: 'Salary №2', image: groceries, color: '#CCCCFF'},
        {name: 'Part-time work', image: groceries, color: '#FFFF99'},
    ],
    categoriesColors: [
        '#FC2847',
        '#A8E4A0',
        '#CCCCFF',
        '#98FB98',
        '#F64A46',
        '#FFFF99',
        '#715345',
        '#46c7bb',
        '#7235bb',
    ],
}


const categoriesReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_CATEGORY_EXPENSE:
            if (state.expenseCategories.some(e => e.name === action.name)) {
                return { ...state }
            }
            return {
                ...state,
                expenseCategories: [...state.expenseCategories, {name: action.name, image: none, color: '#A8E4A0'}]
            }
        case DELETE_CATEGORY_EXPENSE:
            return {
                ...state,
                expenseCategories: state.expenseCategories.filter(e => {
                    if (e.name !== action.name) {
                        return e;
                    }
                })
            }
        case ADD_CATEGORY_INCOME:
            if (state.incomeCategories.some(e => e.name === action.name)) {
                return { ...state }
            }
            return {
                ...state,
                incomeCategories: [...state.incomeCategories, {name: action.name, image: none, color: '#A8E4A0'}]
            }
        case DELETE_CATEGORY_INCOME:
            return {
                ...state,
                incomeCategories: state.incomeCategories.filter(e => {
                    if (e.name !== action.name) {
                        return e;
                    }
                })
            }
        default:
            return state;
    }
}

export const addCategoryExpense = (name) => ({type: ADD_CATEGORY_EXPENSE, name});
export const deleteCategoryExpense = (name) => ({type: DELETE_CATEGORY_EXPENSE, name});
export const addCategoryIncome = (name) => ({type: ADD_CATEGORY_INCOME, name});
export const deleteCategoryIncome = (name) => ({type: DELETE_CATEGORY_INCOME, name});

export default categoriesReducer;