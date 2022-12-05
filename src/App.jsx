import "./App.css";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { setEmployeeSlice } from "./redux/slice/employee";
import { CREATE_EMPLOYEE, GET_EMPLOYEES } from "./redux/types";
import EmployeeInput from "./components/EmployeeInput";
import EmployeeContainer from "./components/EmployeeContainer";
import GlobalStyles from "./components/GlobalStyles";
import Header from "./components/Header";
import { darkTheme, lightTheme } from "./components/Themes";
import useDarkMode from "./utilis/useDarkMode";
import { ThemeProvider } from 'styled-components';
import EmployeePage from "./EmployeePage";

function App() {
  const dispatch = useDispatch();
  const data = useSelector((state) => state.employee);

  const [theme, themeToggler] = useDarkMode();
  const themeMode = theme === "light" ? darkTheme : lightTheme;
  return (
    <>
      <ThemeProvider theme={themeMode}>
        <>
          <GlobalStyles />
          <Header theme={theme} toggleTheme={themeToggler} />
          <EmployeePage />
        </>
      </ThemeProvider>
    </>
  );
}

export default App;
