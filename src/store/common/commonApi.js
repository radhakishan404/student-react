import { axios } from "../../helpers/axios";
import {
  STUDENT_DELETE,
  STUDENT_GET_LIST,
  STUDENT_ADD,
  STUDENT_UPDATE,
  STUDENT_GET,
} from "./commonConstants";

export const api_student_get_list = async (params) => {
  return axios.get(STUDENT_GET_LIST, { params });
};

export const api_student_delete = async (id) => {
  let url = `${STUDENT_DELETE}?user_id=${id}`;
  return axios.delete(url);
};

export const api_student_add = async (data) => {
  return axios.post(STUDENT_ADD, data);
};

export const api_student_update = async (data) => {
  return axios.put(STUDENT_UPDATE, data);
};

export const api_student_get = async (params) => {
  return axios.get(STUDENT_GET, { params: params });
};
