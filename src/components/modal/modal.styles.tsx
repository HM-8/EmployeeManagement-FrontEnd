import styled from "styled-components";

export const ModalBlock = styled.div`
  align-items: center;
  bottom: 0;
  justify-content: center;
  left: 0;
  overflow: hidden;
  padding: 0.4rem;
  position: fixed;
  right: 0;
  top: 0;
  display: flex;
  opacity: 1;
  z-index: 400;
`;

export const ModalOverlay = styled.a`
  background: rgba(247, 248, 249, 0.75);
  bottom: 0;
  cursor: default;
  display: block;
  left: 0;
  position: absolute;
  right: 0;
  top: 0;
`;

export const ModalClose = styled.a`
  float: right !important;
  text-decoration: none !important;
  cursor: pointer;
  font-size: 1rem;
`;

export const ModalContainer = styled.div`
  background: #ffffff;
  border-radius: 0.1rem;
  display: flex;
  flex-direction: column;
  max-height: 75vh;
  max-width: 850px;
  padding: 0 0.8rem;
  width: 100%;
  animation: slide-down 0.2s ease 1;
  z-index: 1;
  box-shadow: 0 0.2rem 0.5rem rgba(48, 55, 66, 0.3);
`;

export const ModalBody = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom:2rem;
  > input {
    width: 16%;
    height: 2.813rem;
    border: solid 1px #e8e8e8;
    padding: 0 20px;
    font-size: 1rem;
    font-family: var(--font-1);
    background: ${({ theme }) => theme.input};
    transition: background 0.4s linear;
    border-radius: 6px;
    
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
`;

export const ModalHeader = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  color: #303742;
  padding: 20px 5px 10px 5px;
`;

export const ModalTitle = styled.span`
  font-size: 30px;
  font-weight: 300;
`;

export const ModalFooter = styled.div`
  text-align: right;
`;

export const Button = styled.button`
  background: ${({ theme }) => theme.primary};
  color: white;
  font-size: 1em;
  margin: 10px;
  padding: 5px 10px;
  border-radius: 6px;
  cursor: pointer;
`;
