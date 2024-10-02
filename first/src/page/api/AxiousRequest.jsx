import axios from "axios"
import Swal from 'sweetalert2'
import BASE_URL from '../../globalVariable';



export const getData = async (params) => {
    try {
        const response = await axios.get(`${BASE_URL}api/${params}`);
        console.log(response)
        console.log("this is response")
        if (response && response.data) {

            return response.data.data
        }
    }
    catch (e) {
        Swal.fire({
            icon: "error",
            title: "Something went wrong",
            showConfirmButton: false,
            timer: 1500
        });
    }
}

export const createData = async ({ url, data }) => {
    try {
        const options = {
            method: "post",
            url: `${BASE_URL}api/${url}`,
            headers: {
                'Content-Type': 'application/json',
                "Authorization": "fbc2c6cfbb7bb70d5cfd072ce61405101f35f3f5d6aeab0e3ce1b380e80e07947d3c4df558fcfdf38db5cf139a7c2ad1bdbbdb1b5c57af7c12564b041b65278abc9bfc9d847d87f151062adb2b5d093a4fb601596896164ca710dad08a13c7cfc9628a4102f4b54759c26bccd3be4f796793c834ebfe0784344740e08626d61c",
            },
            data: data
        }
        const response = await axios.request(options);
        if (response && response.data) {
            return response.data.data;
        }


    } catch (e) {
        Swal.fire({
            icon: "error",
            title: "Something went wrong",
            showConfirmButton: false,
            timer: 1500
        });
    }
}
export const updateData = async ({ url, data }) => {
    try {
        const options = {
            method: "PUT",
            url: `${BASE_URL}api/${url}`,
            headers: {
                'Content-Type': 'application/json',
                "Authorization": " Bearer fbc2c6cfbb7bb70d5cfd072ce61405101f35f3f5d6aeab0e3ce1b380e80e07947d3c4df558fcfdf38db5cf139a7c2ad1bdbbdb1b5c57af7c12564b041b65278abc9bfc9d847d87f151062adb2b5d093a4fb601596896164ca710dad08a13c7cfc9628a4102f4b54759c26bccd3be4f796793c834ebfe0784344740e08626d61c",
            },
            data: data
        }
        const response = await axios.request(options);
        if (response && response.data) {
            return response.data.data;
        }


    } catch (e) {
        Swal.fire({
            icon: "error",
            title: "Something went wrong",
            showConfirmButton: false,
            timer: 1500
        });
    }
}

export const deleteData = async (params) => {
    try {
        const response = await axios.delete(`${BASE_URL}api/${params}`);
        if (response && response.data) {
            return response.data.data;
        }
    } catch (e) {
        Swal.fire({
            icon: "error",
            title: "Something went wrong",
            showConfirmButton: false,
            timer: 1500
        });
    }

}