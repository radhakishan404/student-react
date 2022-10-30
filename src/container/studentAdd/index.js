import withNavigate from "../../routes/withNavigate";
import StudentAddContainer from "./StudentAddContainer";
import StudentAddStore from "./StudentAddStore.js";

export default StudentAddStore(withNavigate(StudentAddContainer));
