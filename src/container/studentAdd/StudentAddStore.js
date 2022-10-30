import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { setSnackBar, studentAdd, studentUpdate, getUniqueStudent } from "../../store/common/commonSlice";

const mapStateToProps = (state) => {
    return {
        unique_student_data: state.common.unique_student_data,
        add_loading: state.common.add_loading,
        student_data_loading: state.common.student_data_loading,
    };
};

const mapDispatchToProps = (dispatch) =>
    bindActionCreators({
        setSnackBar,
        studentAdd: studentAdd,
        studentUpdate: studentUpdate,
        getUniqueStudent: getUniqueStudent,
    }, dispatch);

const Store = (Container) =>
    connect(mapStateToProps, mapDispatchToProps)(Container);

export default Store;
