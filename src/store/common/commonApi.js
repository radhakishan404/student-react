import { axios } from "../../helpers/axios";
import {
  STUDENT_DELETE,
  STUDENT_GET_LIST,
} from "./commonConstants";

export const api_student_get_list = async (params) => {
  return axios.get(STUDENT_GET_LIST, { params });
};

export const api_student_delete = async (id) => {
  let url = `${STUDENT_DELETE}?user_id=${id}`;
  return axios.delete(url);
};
