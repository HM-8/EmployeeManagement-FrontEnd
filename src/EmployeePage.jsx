import styled from "styled-components";
import EmployeeContainer from "./components/EmployeeContainer";
import EmployeeInput from "./components/EmployeeInput";

const EmployeesContainer = styled.div`
  padding: 1.813rem 6.25rem 16.563rem;

  @media (max-width: 992px) {
    padding: 2rem;
  }

  @media (max-width: 768px) {
    padding: 1rem;
  }
`;

const EmployeePage = () => (
  <EmployeesContainer>
    <EmployeeInput />
    <EmployeeContainer />
  </EmployeesContainer>
);

export default EmployeePage;
