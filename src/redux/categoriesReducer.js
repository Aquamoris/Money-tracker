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
            }
        default:
            return state;
    }
}

export const addCategory = (name) => ({type: ADD_CATEGORY, category: name});
export const deleteCategory = (category) => ({type: DELETE_CATEGORY, category});

export default categoriesReducer;