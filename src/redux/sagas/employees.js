import { getEmployeesAPI, getEmployeeByIdAPI, createEmployeeAPI, updateEmployeeAPI, deleteEmployeeByIdAPI } from '../../apis/index'
import { setEmployeeSlice } from '../slice/employee'
import { addEmployeeSlice, deleteEmployeeSlice, editEmployeeSlice, getEmployeesSlice } from '../slice/employees'
import { CREATE_EMPLOYEE, DELETE_EMPLOYEE_BY_ID, GET_EMPLOYEES, GET_EMPLOYEE_BY_ID, UPDATE_EMPLOYEE_BY_ID } from '../types'
import { put, takeEvery } from 'redux-saga/effects'

export function* getEmployeesSaga() {
    const Employees = yield getEmployeesAPI()
    yield put(getEmployeesSlice(Employees.data))
}

export function* getEmployeeByIdSaga(action) {
    const emp=yield getEmployeeByIdAPI(action.id)
    yield put(setEmployeeSlice(emp.data))
}
export function* createEmployeeSaga(action) {
    console.log("the action",action.data)
    yield createEmployeeAPI(action.data)
    yield put(addEmployeeSlice(action.data))
}

export function* updateEmployeeSaga(action) {
    yield updateEmployeeAPI(action.user)
    yield put(editEmployeeSlice(action.user))
}

export function* deleteEmployeeByIdSaga(action) {
    yield deleteEmployeeByIdAPI(action.id)
    yield put(deleteEmployeeSlice(action.id))
}

export function* watchEmployeesAsync() {
    yield takeEvery(GET_EMPLOYEES, getEmployeesSaga)
    yield takeEvery(GET_EMPLOYEE_BY_ID, getEmployeeByIdSaga)
    yield takeEvery(CREATE_EMPLOYEE, createEmployeeSaga)
    yield takeEvery(UPDATE_EMPLOYEE_BY_ID, updateEmployeeSaga)
    yield takeEvery(DELETE_EMPLOYEE_BY_ID, deleteEmployeeByIdSaga)
}