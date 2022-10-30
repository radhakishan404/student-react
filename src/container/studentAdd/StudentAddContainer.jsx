import { Button, Container, Grid, Typography } from "@mui/material";
import React from "react";

class StudentAddContainer extends React.Component {
  render() {
    const { unique_student_data, navigate } = this.props;

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
            <Typography variant="h6">Student Add</Typography>
            <Button variant="outlined" onClick={() => navigate("/")}>
              Go Back
            </Button>
          </Grid>
          <Grid item xs={12}></Grid>
        </Grid>
      </Container>
    );
  }
}

export default StudentAddContainer;
