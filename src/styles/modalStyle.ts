import styled from "styled-components";
import Modal from "styled-react-modal";

export const StyledModal = Modal.styled`
  width: 350px;
  height: 350px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  border-radius: 1rem;
  background-color: ${(props: { theme: { bgColor: any } }) =>
    props.theme.bgColor};
  .overlay {
    backgroundColor: "rgba(0, 0, 0, 0.4)";
    width: 100%;
    height: 100vh;
    zIndex: 10;
    position: fixed;
    top: 0;
    left: 0;
  }
`;

export const ModalTitle = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 2rem;
`;

export const ModalHeader = styled.div`
  display: flex;
  justify-content: flex-end;
  margin: 1rem 1em;
  .closeModal {
    font-size: 2rem;
    cursor: pointer;
  }
`;

export const AddBoardForm = styled.form`
  margin: 1rem 0;
  display: flex;
  justify-content: center;
  position: relative;
  input {
    padding: 1rem;
    width: 80%;
    margin: 3rem 0;
    outline: none;
    border-radius: 1rem;
    border: none;
    background-color: ${(props) => props.theme.cardColor};
    color: ${(props) => props.theme.fontColor};
  }
  .addModalBtn {
    position: absolute;
    top: 4.2rem;
    right: 3rem;
    display: none;
  }
`;
