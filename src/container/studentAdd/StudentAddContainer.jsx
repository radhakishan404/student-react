import { Button, Container, Grid, Typography } from "@mui/material";
import React from "react";
import StudentAdd from "../../component/StudentAdd";

class StudentAddContainer extends React.Component {
  handleSubmit = async (values) => {
    let res = await this.props.studentAdd(values);
    if (!res.error) this.props.navigate("/");
  };
  handleUpdate = async (values) => {
    let res = await this.props.studentUpdate(values);
    if (!res.error) this.props.navigate("/");
  };

  componentDidMount() {
    if (this.props.params?.user_id) {
      this.props.getUniqueStudent({ user_id: this.props.params?.user_id });
    }
  }

  render() {
    const { unique_student_data, navigate, add_loading } = this.props;
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
            <Typography variant="h6">
              {this.props.params?.user_id ? "Student Update" : "Student Add"}
            </Typography>
            <Button variant="outlined" onClick={() => navigate("/")}>
              Go Back
            </Button>
          </Grid>
          <Grid item xs={12}>
            <StudentAdd
              add_loading={add_loading}
              addStudent={this.handleSubmit}
              updateStudent={this.handleUpdate}
              is_update={this.props.params?.user_id ? true : false}
              updateData={unique_student_data}
            />
          </Grid>
        </Grid>
      </Container>
    );
  }
}

export default StudentAddContainer;
