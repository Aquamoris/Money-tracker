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
        {name: 'Groceries', image: groceries},
        {name: 'Entertainments', image: entertainments},
        {name: 'Transport', image: transport},
        {name: 'Animal', image: animals},
        {name: 'Home', image: home},
    ],
    incomeCategories: [
        {name: 'Salary', image: groceries},
        {name: 'Salary №2', image: groceries},
        {name: 'Part-time work', image: groceries},
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
            return {
                ...state,
                expenseCategories: [...state.expenseCategories, {name: action.category, image: none}]
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
            return {
                ...state,
                incomeCategories: [...state.incomeCategories, {name: action.category, image: none}]
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

export const addCategoryExpense = (name) => ({type: ADD_CATEGORY_EXPENSE, category: name});
export const deleteCategoryExpense = (name) => ({type: DELETE_CATEGORY_EXPENSE, name});
export const addCategoryIncome = (name) => ({type: ADD_CATEGORY_INCOME, category: name});
export const deleteCategoryIncome = (name) => ({type: DELETE_CATEGORY_INCOME, name});

export default categoriesReducer;