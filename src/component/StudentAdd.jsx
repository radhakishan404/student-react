import React from "react";
import * as yup from "yup";
import { useFormik } from "formik";
import { Grid, TextField } from "@mui/material";
import Button from "./common/Button";

const validateAddStudent = yup.object().shape({
  name: yup
    .string()
    .min(2, "Too Short!")
    .max(40, "Too Long!")
    .required("Required"),
  email: yup.string().email().required(),
  phone: yup
    .number()
    .min(99999999, "Please enter minimum 8 digits")
    .max(999999999999, "Too Long!")
    .required(),
  dob: yup.string().required(),
  address: yup.string().required(),
  state: yup.string(),
  zip: yup.string(),
  gender: yup.string(),
});

const StudentAdd = (props) => {
  const { addStudent, add_loading, updateData, is_update, updateStudent } =
    props;

  const onSubmit = async (values) => {
    if (is_update) {
      let payload = {
        ...values,
        user_id: updateData.user_id,
      };
      updateStudent(payload);
    } else {
        console.log(values, "values from here");
      addStudent(values);
    }
  };

  const formik = useFormik({
    enableReinitialize: true,
    initialValues: is_update
      ? updateData
      : {
          name: "",
          email: "",
          phone: "",
          dob: "",
          address: "",
          state: "",
          zip: "",
          gender: "",
        },
    onSubmit: (values) => {
      onSubmit(values);
    },
    validationSchema: validateAddStudent,
  });

  return (
    <form onSubmit={formik.handleSubmit}>
      <Grid container spacing={2}>
        <Grid item xs={4}>
          <TextField
            fullWidth
            label="Name"
            variant="outlined"
            type="text"
            onChange={formik.handleChange("name")}
            onBlur={formik.handleBlur("name")}
            value={formik.values.name}
            error={!formik.touched.name && Boolean(formik.errors.name)}
            helperText={!formik.touched.name && formik.errors.name}
          />
        </Grid>
        <Grid item xs={4}>
          <TextField
            fullWidth
            label="Email"
            variant="outlined"
            type="email"
            onChange={formik.handleChange("email")}
            onBlur={formik.handleBlur("email")}
            value={formik.values.email}
            error={!formik.touched.email && Boolean(formik.errors.email)}
            helperText={!formik.touched.email && formik.errors.email}
          />
        </Grid>
        <Grid item xs={4}>
          <TextField
            fullWidth
            label="Mobile"
            variant="outlined"
            type="text"
            onChange={formik.handleChange("phone")}
            onBlur={formik.handleBlur("phone")}
            value={formik.values.phone}
            error={!formik.touched.phone && Boolean(formik.errors.phone)}
            helperText={!formik.touched.phone && formik.errors.phone}
          />
        </Grid>
        <Grid item xs={4}>
          <TextField
            fullWidth
            label="Date of Birth"
            variant="outlined"
            type="text"
            placeholder="dd-mm-yyyy"
            onChange={formik.handleChange("dob")}
            onBlur={formik.handleBlur("dob")}
            value={formik.values.dob}
            error={!formik.touched.dob && Boolean(formik.errors.dob)}
            helperText={!formik.touched.dob && formik.errors.dob}
          />
        </Grid>
        <Grid item xs={4}>
          <TextField
            fullWidth
            label="Address"
            variant="outlined"
            type="text"
            onChange={formik.handleChange("address")}
            onBlur={formik.handleBlur("address")}
            value={formik.values.address}
            error={!formik.touched.address && Boolean(formik.errors.address)}
            helperText={!formik.touched.address && formik.errors.address}
          />
        </Grid>
        <Grid item xs={4}>
          <TextField
            fullWidth
            label="State"
            variant="outlined"
            type="text"
            onChange={formik.handleChange("state")}
            onBlur={formik.handleBlur("state")}
            value={formik.values.state}
            error={!formik.touched.state && Boolean(formik.errors.state)}
            helperText={!formik.touched.state && formik.errors.state}
          />
        </Grid>
        <Grid item xs={4}>
          <TextField
            fullWidth
            label="Zip"
            variant="outlined"
            type="text"
            onChange={formik.handleChange("zip")}
            onBlur={formik.handleBlur("zip")}
            value={formik.values.zip}
            error={!formik.touched.zip && Boolean(formik.errors.zip)}
            helperText={!formik.touched.zip && formik.errors.zip}
          />
        </Grid>
        <Grid item xs={4}>
          <TextField
            fullWidth
            label="Gender"
            variant="outlined"
            type="text"
            onChange={formik.handleChange("gender")}
            onBlur={formik.handleBlur("gender")}
            value={formik.values.gender}
            error={!formik.touched.gender && Boolean(formik.errors.gender)}
            helperText={!formik.touched.gender && formik.errors.gender}
          />
        </Grid>
      </Grid>
      <Grid container spacing={2} sx={{ marginTop: 1 }}>
        <Grid item xs={4.5}>
          <Button
            type="submit"
            disabled={!formik.isValid}
            variant="contained"
            loading={add_loading}
            fullWidth
          >
            {is_update ? "Update Student" : "Add Student"}
          </Button>
        </Grid>
      </Grid>
    </form>
  );
};

export default StudentAdd;
