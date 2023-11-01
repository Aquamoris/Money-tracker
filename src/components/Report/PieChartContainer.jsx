import {compose} from "redux";
import {connect} from "react-redux";
import PieChart from "./PieChart";

const mapStateToProps = (state) => {
    return {
        operations: state.operations.operations,
        reportMode: state.reportPage.reportMode
    }
}

export default compose(
    connect(mapStateToProps, {})
)(PieChart);