import { connect } from "react-redux";
import { addCategory } from "../../redux/categoriesReducer";
import { deleteCategory } from "../../redux/categoriesReducer";
import Categories from './Categories';

let mapStateToProps = (state) => {
    return {
        categories: state.categoriesElement.categories
    }
}

const CategoriesContainer = connect(mapStateToProps, {addCategory, deleteCategory})(Categories);

export default CategoriesContainer;