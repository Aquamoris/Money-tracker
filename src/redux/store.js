import {applyMiddleware, combineReducers, legacy_createStore as createStore} from 'redux';
import incomeReducer from './incomeReducer';
import categoriesReducer from './categoriesReducer';
import operationsReducer from "./operationsReducer";
import thunk from "redux-thunk";


let reducers = combineReducers({
    incomePage: incomeReducer,
    expensePage: incomeReducer,
    reportPage: incomeReducer,
    categories: categoriesReducer,
    operations: operationsReducer
});

let store = createStore(reducers, applyMiddleware(thunk));

window.store = store;

export default store;