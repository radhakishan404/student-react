import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { api_student_add, api_student_get, api_student_get_list, api_student_update } from "./commonApi";
import { parser_student_get, parser_student_get_list } from "./commonParser";

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
  add_loading: false,
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

export const studentAdd = createAsyncThunk(
  "studentAdd",
  async (payload) => {
    try {
      const response = await api_student_add(payload);
      return response;
    } catch (error) {
      throw new Error(error);
    }
  }
);

export const studentUpdate = createAsyncThunk(
  "studentUpdate",
  async (payload) => {
    try {
      const response = await api_student_update(payload);
      return response;
    } catch (error) {
      throw new Error(error);
    }
  }
);

export const getUniqueStudent = createAsyncThunk(
  "getUniqueStudent",
  async (payload) => {
    try {
      const response = await api_student_get(payload);
      const data = parser_student_get(response);
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
    },
    setUniqueStudentData: (state, action) => {
      state.unique_student_data = action.payload;
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
    // Add student
    [studentAdd.pending]: (state, action) => {
      state.add_loading = true;
    },
    [studentAdd.fulfilled]: (state, action) => {
      state.add_loading = false;
    },
    [studentAdd.rejected]: (state, action) => {
      state.add_loading = false;
    },
    // Get student
    [getUniqueStudent.pending]: (state, action) => {
      state.student_data_loading = true;
    },
    [getUniqueStudent.fulfilled]: (state, action) => {
      state.student_data_loading = false;
      state.unique_student_data = action.payload
    },
    [getUniqueStudent.rejected]: (state, action) => {
      state.student_data_loading = false;
    },

  }
});

// Action creators are generated for each case reducer function
export const {
  setSnackBar,
  setStudentMeta,
  setUniqueStudentData,
} = common.actions;

export default common.reducer;
