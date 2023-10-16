import {connect} from "react-redux";
import OperationsList from "./OperationsList";

const mapStateToProps = (state) => {
    return {
        operations: state.operations.operations
    }
}

const OperationListContainer = connect(mapStateToProps, {})(OperationsList);

export default OperationListContainer;

