import { useDispatch, useSelector } from "react-redux";
import styled, { keyframes } from "styled-components";
import { CgProfile } from "react-icons/cg";
import { AiOutlineEdit } from "react-icons/ai";
import { RiDeleteBin5Line } from "react-icons/ri";
import { DELETE_EMPLOYEE_BY_ID, UPDATE_EMPLOYEE_BY_ID } from "../redux/types";
import Modal from "./Modal";
import { useState } from "react";
import Select from "./Select";
import { setEmployeeSlice } from "../redux/slice/employee";
import { Button } from "./modal.styles";

const slideIn = keyframes`
0% {
  -webkit-transform: scale(0.5);
  transform: scale(0.5);
}

100% {
  -webkit-transform: scale(1);
  transform: scale(1);
}
`;

const Container = styled.div`
  animation: ${slideIn} 0.8s cubic-bezier(0.39, 0.575, 0.565, 1) both;
  display: grid;
  grid-template-columns: 20% 20% 60%;
  gap: 0 10px;
  background: ${({ theme }) => theme.toggleBook};
  padding: 2rem 0.188rem 1.625rem 1.688rem;
  border: solid 1px ${({ theme }) => theme.body};
  border-radius: 4px;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  font-weight: bold;
  color: var(--black);
  transition: background 0.4s linear;
  border-radius: 12px;

  > .first {
    font-family: var(--font-2);

    > span {
      font-size: 10rem;
      font-weight: 300;
      color: var(--accent-color);
      width: 4rem;
      margin: 0.188rem 0.938rem 0.125rem 0;
    }

    @media (max-width: 650px) {
      grid-row: 1/3;
      margin-top: 30px;
    }
  }

  > .chapter {
    display: flex;
    flex-direction: row;
    justify-content: end;
    align-items: center;
    font-family: var(--font-2);
    font-weight: 300;
    color: ${({ theme }) => theme.text};
    transition: color 0.4s linear;
    // background-color:blue;

    > span {
      margin: 0.438rem 6.813rem 0.25rem 0;
      font-size: 1.3rem;
      letter-spacing: -0.4px;
    }
    > .edit {
    }
    > .delete {
      color: red;
    }

    @media (max-width: 768px) {
    }
  }

  > .details {
    display: flex;
    flex-direction: column;
    align-items: start;
    font-weight: normal;
    color: ${({ theme }) => theme.text};
    transition: color 0.4s linear;
    justify-content: center;

    > .name {
      font-size: 2rem;
      margin: -0rem 0 0 0;
      color: ${({ theme }) => theme.primary};
      @media (max-width: 450px) {
        font-size: 0.5rem;
      }
    }

    > .info {
      // display: flex;
      align-items: center;
      // justify-content: space-between;
      width: 100%;
      font-size: 0.875rem;
      opacity: 0.5;
    }
    .salary {
      font-size: 1.4rem;
    }
    > div:nth-of-type(2) {
      background-color: blue;

      > span {
        background-color: purple;
      }

      > .dob {
        margin-right: 30px;
        color: pink;
      }
    }
  }

  > span {
    width: 0.125rem;
    height: 4.375rem;
    margin-top: 1.125rem;
    background: yellow;
    border: solid 1px var(--neutral-color-1);
    @media (max-width: 650px) {
      display: none;
    }
  }

  @media (max-width: 768px) {
    grid-template-columns: 38% 20% 5% 37%;
  }

  @media (max-width: 650px) {
    grid-template-columns: 50% 50%;
    padding: 10px 15px;
  }
`;

const Employee = ({ name, dob, gender, salary, id }) => {
  const dispatch = useDispatch();
  const data = useSelector((state) => state.employee);
  const [active, setActive] = useState(false);
  const [activeDelete, setActiveDelete] = useState(false);
  const handleChange = (prop) => (event) => {
    dispatch(setEmployeeSlice({ ...data, [prop]: event.target.value }));
  };
  const handleSubmit = () => {
    dispatch({ type: UPDATE_EMPLOYEE_BY_ID, data: data });
    dispatch(
      setEmployeeSlice({
        name: "",
        dob: "",
        gender: "",
        salary: "",
        id: "",
      })
    );
    setActive(false);
  };
  const handleClick = () => {
    setActive(true);
    dispatch(
      setEmployeeSlice({
        name: name,
        dob: dob,
        gender: gender,
        salary: salary,
        id: id,
      })
    );
  };
  const handleDeleteClick = () => {
    dispatch({ type: DELETE_EMPLOYEE_BY_ID, id: id })
    setActiveDelete(false);
  };

  const handleCloseModal = () => {
    setActive(false);
    dispatch(
      setEmployeeSlice({
        name: "",
        dob: "",
        gender: "",
        salary: "",
        id: "",
      })
    );
  };

  return (
    <Container>
      <div className="first">
        <span>
          <CgProfile />
        </span>
      </div>

      <div className="details">
        <p className="name"> {name}</p>
        <div className="info">
          <p className="dob">Date of birth: {dob}</p>
          <p>Gender: {gender}</p>
        </div>
        <p className="salary">Salary: {salary} ETB</p>
      </div>
      <div className="chapter">
        <span className="edit" onClick={() => handleClick()}>
          <AiOutlineEdit />{" "}
        </span>
        <span
          className="delete"
          onClick={() => setActiveDelete(true)}
        >
              <RiDeleteBin5Line />
          
        </span>
        <Modal
          active={activeDelete}
          hideModal={() => setActiveDelete(false)}
          title="Delete"
          footer={
            <Button type="submit" onClick={() => handleDeleteClick()}>
              Delete
            </Button>
          }
        >
         Are you sure you want to delete this? 
        </Modal>

        <Modal
          active={active}
          hideModal={() => handleCloseModal()}
          title="Edit"
          footer={
            <Button type="submit" onClick={() => handleSubmit()}>
              Done
            </Button>
          }
        >
          <input
            type="text"
            onChange={handleChange("name")}
            placeholder="Enter Name"
            value={data.name}
            className="modalinput"
          />
          <input
            type="text"
            onChange={handleChange("salary")}
            placeholder="salary"
            value={data.salary}
            className="modalinput"
          />
          <Select
            handleChange={handleChange("gender")}
            selectValue={data.gender}
            className="modalinput"
          />
          <input
            type="date"
            onChange={handleChange("dob")}
            placeholder="Date"
            value={data.dob}
            className="modalinput"
          />
          {/* <StyledButton type="submit" onClick={()=>handleSubmit()}>ADD</StyledButton> */}
        </Modal>
      </div>
    </Container>
  );
};

export default Employee;
