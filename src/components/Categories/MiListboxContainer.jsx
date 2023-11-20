import {compose} from "redux";
import {connect} from "react-redux";
import MyListBox from "./MyListbox";

const mapStateToProps = (state) => {
    return {
        expenseCategories: state.categories.expenseCategories,
        incomeCategories: state.categories.incomeCategories,
    }
}

export default compose(
    connect(mapStateToProps, {})
)(MyListBox)