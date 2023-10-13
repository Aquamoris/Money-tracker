import groceries from '../assets/groceries.png'
import entertainments from '../assets/entertainments.png'
import transport from '../assets/transport.png';
import animals from '../assets/animals.png';
import home from '../assets/home.png';
import none from '../assets/none.png';

const ADD_CATEGORY = 'ADD_CATEGORY';
const DELETE_CATEGORY = 'DELETE_CATEGORY';

let initialState = {
    categories: [
        {name: 'Groceries', image: groceries},
        {name: 'Entertainments', image: entertainments},
        {name: 'Transport', image: transport},
        {name: 'Animal', image: animals},
        {name: 'Home', image: home},
    ],
    categoriesColors: [
        '#FC2847',
        '#A8E4A0',
        '#CCCCFF',
        '#98FB98',
        '#F64A46'
    ]
}

const categoriesReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_CATEGORY: 
            return {
                ...state,
                categories: [...state.categories, {name: action.category, image: none}]
            }
        case DELETE_CATEGORY:
            return {
                ...state,
                categories: state.categories.filter(e => {
                    if (e.name !== action.name) {
                        return e;
                    }
                })
            }
        default:
            return state;
    }
}

export const addCategory = (name) => ({type: ADD_CATEGORY, category: name});
export const deleteCategory = (name) => ({type: DELETE_CATEGORY, name});

export default categoriesReducer;