import { createSlice } from "@reduxjs/toolkit";

const employee = createSlice({
    name: 'employee',
    initialState: {
        name: '',
        salary:'',
        gender:'',
        dob:'',
        id:'',
    },
    reducers: {
        setEmployeeSlice: (state, action) => {
            state = action.payload
            return state
        }
    }
})
export const { setEmployeeSlice } = employee.actions
export default employee.reducer