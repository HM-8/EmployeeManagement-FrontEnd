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

const Container = styled.section`
  display: flex;
  flex-direction: column;
  margin-top: 2.9rem;

  > div:first-of-type {
    > h2 {
      font-size: 1.17rem;
      color: #888888;
      @media (max-width: 768px) {
        text-align: center;
        margin-bottom: 1rem;
      }
    }
  }

  > div:last-of-type {
    display: flex;
    align-items: center;
    justify-content: space-between;

    > input {
      width: 30%;
      height: 2.813rem;
      border: solid 1px #e8e8e8;
      padding: 0 20px;
      font-size: 1rem;
      font-family: var(--font-1);
      background: ${({ theme }) => theme.input};
      transition: background 0.4s linear;

      &::placeholder {
        font-size: 0.8rem;
        font-family: var(--font-1);
        color: ${({ theme }) => theme.holder};
        transition: color 0.4s linear;
      }

      &:focus {
        outline: solid 1px var(--primary-color-1);
      }
    }

    @media (max-width: 992px) {
      > input {
        width: 27%;
      }
    }
    @media (max-width: 768px) {
      flex-direction: column;

      > input {
        width: 100%;
        margin-bottom: 1rem;
      }
    }
  }
`;

function App() {
  const dispatch = useDispatch();
  const data = useSelector((state) => state.employee);
  // let dataJson=JSON.stringify(data);
  // console.log("json",data.name);

  const handleChange = (prop) => (event) => {
    dispatch(setEmployeeSlice({ ...data, [prop]: event.target.value }));
  };
  const handleSubmit = () => {
    dispatch({ type: CREATE_EMPLOYEE, data: data });
    console.log("dasdf", data);
  };
  // React.useEffect(() => dispatch({ type: GET_EMPLOYEES }), [])

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
