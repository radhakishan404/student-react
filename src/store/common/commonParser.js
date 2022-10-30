import { get } from "lodash-es";

export const parser_student_get_list = (response) => {
    try {
        let data = {};
        data.count = response.count || 0;
        if (response?.data) {
            response = response.data;
        }
        if (!response) {
            return [];
        }

        response = response.map((e) => ({
            user_id: get(e, "_id", ""),
            name: get(e, "name", ""),
            email: get(e, "email", ""),
            dob: get(e, "dob", ""),
            address: get(e, "address", ""),
            phone: get(e, "phone", ""),
            state: get(e, "state", ""),
            zip: get(e, "zip", ""),
            gender: get(e, "gender", ""),
            createdAt: get(e, "createdAt", ""),
            is_active: get(e, "is_active", ""),
        }));


        data.data = response;
        return data;
    } catch (error) {
        throw new Error(error);
    }
};

export const parser_student_get = (response) => {
    try {
        if (response?.data) {
            response = response.data;
        }
        if (!response) {
            return {};
        }

        return {
            user_id: get(response, "_id", ""),
            name: get(response, "name", ""),
            email: get(response, "email", ""),
            dob: get(response, "dob", ""),
            address: get(response, "address", ""),
            phone: get(response, "phone", ""),
            state: get(response, "state", ""),
            zip: get(response, "zip", ""),
            gender: get(response, "gender", ""),
        }

    } catch (error) {
        throw new Error(error);
    }
};