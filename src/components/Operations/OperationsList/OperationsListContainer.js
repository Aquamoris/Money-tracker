import {connect} from "react-redux";
import OperationsList from "./OperationsList";
import {addOperation, deleteAndUpdateOperations} from "../../../redux/operationsReducer";

const mapStateToProps = (state) => {
    return {
        operations: state.operations.operations,
        filterButtons: state.operations.filterButtons
    }
}

const OperationsListContainer = connect(mapStateToProps, {
    addOperation,
    deleteAndUpdateOperations
})(OperationsList);

export default OperationsListContainer;

