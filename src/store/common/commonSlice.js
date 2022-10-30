import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { api_student_delete, api_student_get_list } from "./commonApi";
import { parser_student_get_list } from "./commonParser";

const initialState = {
  snackbar: {
    open: false,
    message: "",
    severity: "info",
  },
  student_data_loading: false,
  student_data: [],
  student_meta: {
    page: 0,
    perPage: 10,
    sortBy: "DESC",
    sortField: "createdAt",
    search: ""
  },
  student_data_count: 0,
  unique_student_data: {},
};

export const studentGetList = createAsyncThunk(
  "studentGetList",
  async (payload) => {
    try {
      const { params } = payload;
      const response = await api_student_get_list(params);
      const data = parser_student_get_list(response);
      return data;
    } catch (error) {
      throw new Error(error);
    }
  }
);

export const common = createSlice({
  name: "common",
  initialState,
  reducers: {
    setSnackBar: (state, action) => {
      state.snackbar = action.payload;
    },
    setStudentMeta: (state, action) => {
      const { meta } = action.payload;
      state.student_meta = {
        ...state.student_meta,
        ...meta,
      }
    }
  },
  extraReducers: {
    [studentGetList.pending]: (state, action) => {
      state.student_data_loading = true;
    },
    [studentGetList.fulfilled]: (state, action) => {
      const { count, data } = action.payload;
      state.student_data_loading = false;
      state.student_data = data;
      state.student_data_count = count;
    },
    [studentGetList.rejected]: (state, action) => {
      state.student_data_loading = false;
    },
  }
});

// Action creators are generated for each case reducer function
export const {
  setSnackBar,
  setStudentMeta,
} = common.actions;

export default common.reducer;
