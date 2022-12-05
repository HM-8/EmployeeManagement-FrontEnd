import { createSlice } from "@reduxjs/toolkit";

const employees = createSlice({
    name: 'employees',
    initialState: [{
        name: '',
        salary:'',
        gender:'',
        dob:''
    }],
    reducers: {
        getEmployeesSlice: (state, action) => {
            state = action.payload
            return state
        },
        addEmployeeSlice: (state, action) => {
            state.push(action.payload)
            return state
        },
        editEmployeeSlice: (state, action) => {
            state = state.map(i => i.id == action.payload.id ? action.payload : i)
            return state
        },
        deleteEmployeeSlice: (state, action) => {
            state = state.filter(i => i.id !== action.payload)
            return state
        }
    }
})
export const { getEmployeesSlice, addEmployeeSlice, editEmployeeSlice, deleteEmployeeSlice } = employees.actions
export default employees.reducer