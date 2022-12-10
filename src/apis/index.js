import axios from "axios";

axios.defaults.baseURL = "https://web-production-a365.up.railway.app/api/employee";

export const getEmployeesAPI = async () => axios.get("/");

export const getEmployeeByIdAPI = async (id) => axios.get(`/${id}`);

export const createEmployeeAPI = async (employee) =>
  axios
    .post(`/`, employee)
    .then((response) => {
      console.log(response);
    })
    .catch((error) => {
      console.log("error", error);
    });

export const updateEmployeeAPI = async (employee) =>
  axios.put(`/${employee.id}`, employee);

export const deleteEmployeeByIdAPI = async (id) => axios.delete(`/${id}`);
