import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { setSnackBar, setStudentMeta, studentGetList, setUniqueStudentData } from "../../store/common/commonSlice";

const mapStateToProps = (state) => {
    return {
        student_data_loading: state.common.student_data_loading,
        student_data: state.common.student_data,
        student_meta: state.common.student_meta,
        student_data_count: state.common.student_data_count,
    };
};

const mapDispatchToProps = (dispatch) =>
    bindActionCreators({
        setSnackBar,
        setStudentMeta,
        studentGetList,
        setUniqueStudentData
    }, dispatch);

const Store = (Container) =>
    connect(mapStateToProps, mapDispatchToProps)(Container);

export default Store;
