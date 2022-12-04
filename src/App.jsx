import "./App.css";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
// import { CREATE_EMPLOYEE, getEmployees, getUsersFetch, GET_EMPLOYEES } from "./redux/actions";

import { setEmployeeSlice } from "./redux/slice/employee";
import { CREATE_EMPLOYEE, GET_EMPLOYEES } from "./redux/types";

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
    console.log("dasdf",data)
  };
  // React.useEffect(() => dispatch({ type: GET_EMPLOYEES }), [])

  return (
    <div className="App">
      <h1>oubaifugb</h1>
      {/* <button onClick={() => dispatch({type:CREATE_EMPLOYEE,employee:{...data}})}>addToCart</button> */}

      {/* <button onClick={() => dispatch(addToCart(employee.id))}>
        Remove From Cart
      </button> */}
      <button onClick={() => dispatch({type:GET_EMPLOYEES})}>
        Get Employee
      </button>
      {/* <button onClick={() => dispatch(GET_EMPLOYEES)}>Get Employees</button> */}

      {/* <div><p>{data[0].text}</p> <button>Edit</button><button>Delete</button></div> */}
      <input
        type="text"
        onChange={handleChange("name")}
        placeholder="Enter Name"
        value={data.name}
      />
      <button type="submit" onClick={() => handleSubmit()}>
        Submit
      </button>
    </div>
  );
}

export default App;
