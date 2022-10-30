import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
  useNavigate,
} from "react-router-dom";
import SnackBarContainer from "./component/common/Snackbar";
import StudentView from "./pages/Student";
import StudentAddView from "./pages/StudentAdd";

function App() {
  return (
    <>
      <SnackBarContainer />
      <Router>
        <Routes>
          <Route exact path="/" element={<StudentView />} />
          <Route exact path="/add-student" element={<StudentAddView />} />
          <Route exact path="/add-student/:user_id" element={<StudentAddView />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
