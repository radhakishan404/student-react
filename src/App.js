import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
  useNavigate,
} from "react-router-dom";
import StudentView from "./pages/Student";
import StudentAddView from "./pages/StudentAdd";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route exact path="/" element={<StudentView />} />
          <Route exact path="/add-student" element={<StudentAddView />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
