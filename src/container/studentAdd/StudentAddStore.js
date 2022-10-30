import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { setSnackBar } from "../../store/common/commonSlice";

const mapStateToProps = (state) => {
    return {
        unique_student_data: state.common.unique_student_data,
    };
};

const mapDispatchToProps = (dispatch) =>
    bindActionCreators({
        setSnackBar,
    }, dispatch);

const Store = (Container) =>
    connect(mapStateToProps, mapDispatchToProps)(Container);

export default Store;
