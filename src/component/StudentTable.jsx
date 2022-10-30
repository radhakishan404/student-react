import React from "react";
import { format } from "date-fns";
import { parseISO } from "date-fns/esm";
import {
  Button,
  Card,
  CircularProgress,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TablePagination,
  TableRow,
} from "@mui/material";
import { api_student_delete } from "../store/common/commonApi";
import { useDispatch } from "react-redux";
import { setSnackBar } from "../store/common/commonSlice";

export default function StudentTable({
  student_data,
  student_meta,
  setStudentMeta,
  student_data_loading,
  student_data_count,
  getStudentData,
}) {
  const dispatch = useDispatch();
  const handlePerPageChange = (val) => {
    setStudentMeta({ meta: { perPage: val } });
  };

  const handlePageChange = (val) => {
    setStudentMeta({ meta: { page: val } });
  };

  const handleDelete = async (id) => {
    let res = await api_student_delete(id);
    if (res.success) {
      dispatch(
        setSnackBar({
          open: false,
          message: res.message,
          severity: "info",
        })
      );
      getStudentData();
    }
  };

  return (
    <Card>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Name</TableCell>
            <TableCell>Email</TableCell>
            <TableCell>Phone</TableCell>
            <TableCell>DOB</TableCell>
            <TableCell>Creation Date</TableCell>
            <TableCell sx={{ textAlign: "center" }}>Action</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {student_data_loading ? (
            <CircularProgress />
          ) : (
            student_data.map((val, key) => (
              <TableRow key={key}>
                <TableCell>{val.name}</TableCell>
                <TableCell>{val.email}</TableCell>
                <TableCell>{val.phone}</TableCell>
                <TableCell>{val.dob}</TableCell>
                <TableCell>
                  {format(parseISO(val.createdAt), "dd-MM-yyyy")}
                </TableCell>
                <TableCell sx={{ textAlign: "center" }}>
                  <Button variant="contained" color="success">
                    Edit
                  </Button>
                  <Button
                    variant="contained"
                    color="error"
                    onClick={() => handleDelete(val.user_id)}
                  >
                    Delete
                  </Button>
                </TableCell>
              </TableRow>
            ))
          )}
        </TableBody>
      </Table>
      <TablePagination
        component="div"
        onPageChange={(e) => handlePageChange(e.target.value)}
        page={student_meta.page}
        count={student_data_count}
        rowsPerPage={student_meta.perPage}
        onRowsPerPageChange={(e) => handlePerPageChange(e.target.value)}
      />
    </Card>
  );
}
