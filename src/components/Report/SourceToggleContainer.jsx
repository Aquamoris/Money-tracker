import SourceToggle from "./SourceToggle";
import {compose} from "redux";
import {connect} from "react-redux";
import {changeMode} from "../../redux/reportReducer";

const mapStateToProps = (state) => {
    return {
        reportMode: state.reportPage.reportMode
    }
}

export default compose(
    connect(mapStateToProps, {
        changeMode
    })
)(SourceToggle)