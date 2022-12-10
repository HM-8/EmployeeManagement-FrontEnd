import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { Provider } from "react-redux";
import { applyMiddleware, combineReducers } from "redux";
import { configureStore } from "@reduxjs/toolkit";
import createSagaMiddleware from "redux-saga";
import rootSaga from "./redux/sagas/index";
import employee from "./redux/slice/employee";
import employees from "./redux/slice/employees";
import { BrowserRouter as Router } from "react-router-dom";
import { createRoot } from 'react-dom/client';

const sagaMiddleware = createSagaMiddleware();
const container = document.getElementById('root');
const root = createRoot(container!);
const rootReducer = combineReducers({ employee, employees });

const store = configureStore({
  reducer: rootReducer,
  middleware: () => [sagaMiddleware],
});
sagaMiddleware.run(rootSaga);

root.render(
  <Provider store={store}>
    <Router>
      <App />
    </Router>
  </Provider>
  );

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
