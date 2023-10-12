import { combineReducers, legacy_createStore as createStore } from 'redux';
import incomeReducer from './incomeReducer';
import categoriesReducer from './categoriesReducer';

let reducers = combineReducers({
    incomePage: incomeReducer,
    expensePage: incomeReducer,
    reportPage: incomeReducer,
    categoriesElement: categoriesReducer
});

let store = createStore(reducers);

window.store = store;

export default store;