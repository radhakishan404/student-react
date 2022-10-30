
import withNavigate from "../../routes/withNavigate";
import StudentContainer from "./StudentContainer";
import StudentStore from "./StudentStore.js";

export default StudentStore(withNavigate(StudentContainer));
