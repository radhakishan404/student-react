import {
  Button,
  Card,
  Grid,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TablePagination,
  TableRow,
  Typography,
} from "@mui/material";
import { Container } from "@mui/system";
import React from "react";
import StudentTable from "../../component/StudentTable";

class StudentContainer extends React.Component {
  getStudentData() {
    this.props.studentGetList({ params: this.props.student_meta });
  }

  componentDidMount() {
    this.getStudentData();
  }

  componentDidUpdate(prevProps) {
    if (prevProps.student_meta !== this.props.student_meta) {
      this.getStudentData();
    }
  }

  handleEdit(id) {
    this.props.navigate("/add-student/" + id);
  }

  render() {
    const {
      student_data_loading,
      student_data,
      student_meta,
      student_data_count,
      setStudentMeta,
      navigate,
    } = this.props;

    return (
      <Container maxWidth="lg" sx={{ paddingTop: 5 }}>
        <Grid container spacing={2}>
          <Grid
            item
            xs={12}
            container
            direction="row"
            justifyContent="space-between"
            alignItems="center"
          >
            <Typography variant="h6">Student List</Typography>
            <Button variant="outlined" onClick={() => navigate("/add-student")}>
              Add Student
            </Button>
          </Grid>
          <Grid item xs={12}>
            <StudentTable
              student_data={student_data}
              student_data_loading={student_data_loading}
              student_meta={student_meta}
              student_data_count={student_data_count}
              setStudentMeta={(d) => setStudentMeta(d)}
              getStudentData={() => this.getStudentData()}
              edit={(id) => this.handleEdit(id)}
            />
          </Grid>
        </Grid>
      </Container>
    );
  }
}

export default StudentContainer;
