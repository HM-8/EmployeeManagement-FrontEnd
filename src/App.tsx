import "./App.css";
import React from "react";
import GlobalStyles from "./components/GlobalStyles";
import { darkTheme, lightTheme } from "./components/Themes";
import useDarkMode from "./utilis/useDarkMode";
import { ThemeProvider } from "styled-components";
import EmployeePage from "./pages/EmployeePage";
import { Route, Routes } from "react-router-dom";
import EmployeeDetails from "./pages/EmployeeDetails";

function App() {
  const [theme, themeToggler] = useDarkMode();
  const themeMode = theme === "light" ? darkTheme : lightTheme;
  return (
    <>
      <ThemeProvider theme={themeMode}>
        <>
          <GlobalStyles />

          <Routes>
            <Route path="/" element={<EmployeePage />} />
            <Route
              path="/employees/:employeeId"
              element={<EmployeeDetails />}
            />
          </Routes>
        </>
      </ThemeProvider>
    </>
  );
}

export default App;
