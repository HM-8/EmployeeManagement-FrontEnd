import axios from "axios";

interface Employee {
  id: string;
  name: string;
  dob: string;
  gender: string;
  salary: string;
}
axios.defaults.baseURL =
  "http://web-production-a365.up.railway.app/api/employee";

export const getEmployeesAPI = async () => axios.get("/");

export const getEmployeeByIdAPI = async (id: string) => axios.get(`/${id}`);

export const createEmployeeAPI = async (employee: Employee) =>
  axios
    .post(`/`, employee)
    .then((response) => {
      console.log(response);
    })
    .catch((error) => {
      console.log("error", error);
    });

export const updateEmployeeAPI = async (employee: Employee) => axios.put(`/${employee.id}`, employee);

export const deleteEmployeeByIdAPI = async (id: string) => axios.delete(`/${id}`);
