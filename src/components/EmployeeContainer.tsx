import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { GET_EMPLOYEES } from "../redux/types";
import styled from "styled-components";
import Employee from "./Employee";

const Container = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 20px 0;
  margin-bottom: 2.9rem;
`;

function EmployeeContainer() {
  const dispatch = useDispatch();
  const data = useSelector((state:any) => state.employee);
  const employees = useSelector((state:any) => state.employees);

  useEffect(() => {
    dispatch({ type: GET_EMPLOYEES });
  }, []);

  if (data.length == 0) return <h2>No Employee Added Yet</h2>;
  return (
    <Container>
      <div>
        <h2>Employee List</h2>
      </div>
      <hr />
      {employees.map((item:any) => (
        <div key={item.id}>
          <h3>
            {/* <Link to={`/employees/${item.id}`}> */}
              <Employee
                name={item.name}
                dob={item.dob}
                gender={item.gender}
                salary={item.salary}
                id={item.id}
              />
            {/* </Link>  */}
          </h3>
        </div>
      ))}
    </Container>
  );
}

export default EmployeeContainer;
