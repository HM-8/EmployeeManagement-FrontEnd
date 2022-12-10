import styled from "styled-components";
import React from 'react'

const SelectContainer = styled.div`
  > select {
    appearance: none;
    background-color: transparent;
    border: solid 1px #e8e8e8;
    border-right:none;
    padding: 0 1em 0 0;
    margin: 0;
    width: 20.813rem;
    height: 2.813rem;
    font-family: inherit;
    outline: none;
    color: ${({ theme }) => theme.holder};
    cursor: pointer;
    padding: 0 0 0 20px;
    transition: color 0.4s linear;
  }

  & {
    width: 15%;
    border: solid 1px #e8e8e8;
    border-radius: 6px;
    background: ${({ theme }) => theme.input};
    height: 2.813rem;
    cursor: pointer;
    line-height: 1.1;
    display: flex;
    align-items: center;
    margin: 20px 0;
    padding-right: 20px;
    transition: background 0.4s linear;
    @media (max-width: 768px) {
      width: 50%;
    }
  }

  &::after {
    content: "";
    width: 0.8rem;
    height: 0.5rem;
    background-color: #c7c7c7;
    clip-path: polygon(100% 0%, 0 0%, 50% 100%);
  }

  &:focus-within {
    border: solid 1px var(--primary-color-1);
  }
`;

interface SelectProps {
  selectValue:string;
  handleChange: (event:any) => void;
}

const Select = ({ selectValue, handleChange }:SelectProps) => {
  const types = [
    {
      id: 1,
      val: "Gender",
    },
    {
      id: 2,
      val: "Male",
    },
    {
      id: 3,
      val: 'Female',
    },
  ];
  return (
    <SelectContainer>
      <select value={selectValue} onChange={handleChange}>
        {types.map((type) => (
          <option key={type.id} value={type.val}>
            {type.val}
          </option>
        ))}
      </select>
    </SelectContainer>
  );
};

export default Select;
