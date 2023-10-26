import {connect} from "react-redux";
import {
    addCategoryExpense,
    deleteCategoryExpense,
    addCategoryIncome,
    deleteCategoryIncome
} from "../../redux/categoriesReducer";
import Categories from './Categories';
import {addNewOperation} from "../../redux/operationsReducer";

let mapStateToProps = (state) => {
    return {
        expenseCategories: state.categories.expenseCategories,
        incomeCategories: state.categories.incomeCategories
    }
}

const CategoriesContainer = connect(mapStateToProps,
    {
        addCategoryExpense,
        deleteCategoryExpense,
        addCategoryIncome,
        deleteCategoryIncome,
        addNewOperation,
    })(Categories);

export default CategoriesContainer;