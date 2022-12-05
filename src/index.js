import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { Provider } from "react-redux";
import { applyMiddleware, combineReducers } from "redux";
import { configureStore } from "@reduxjs/toolkit";
import createSagaMiddleware from "redux-saga";
import rootSaga from "./redux/sagas/index";
import employee from './redux/slice/employee'
import employees from "./redux/slice/employees"
import Header from "./components/Header";
const sagaMiddleware = createSagaMiddleware();
const root = ReactDOM.createRoot(document.getElementById("root"));
const rootReducer = combineReducers({employee,employees });

const store = configureStore({
  reducer: rootReducer,
  middleware: () => [sagaMiddleware],
});
sagaMiddleware.run(rootSaga);

root.render(
  <Provider store={store}>
    <App />
  </Provider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
