import {connect} from "react-redux";
import {
    addCategoryExpense,
    deleteCategoryExpense,
    addCategoryIncome,
    deleteCategoryIncome
} from "../../redux/categoriesReducer";
import Categories from './Categories';

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
        deleteCategoryIncome
    })(Categories);

export default CategoriesContainer;