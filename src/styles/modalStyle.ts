import styled from "styled-components";

export const newBoardModalStyle: ReactModal.Styles = {
  overlay: {
    backgroundColor: "rgba(0, 0, 0, 0.4)",
    width: "100%",
    height: "100vh",
    zIndex: "10",
    position: "fixed",
    top: "0",
    left: "0",
  },
  content: {
    width: "350px",
    height: "350px",
    zIndex: "150",
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    borderRadius: "10px",
    border: "none",
    boxShadow: "2px 2px 2px rgba(0, 0, 0, 0.25)",
    backgroundColor: "rgb(173, 173, 173)",
    justifyContent: "center",
    overflow: "auto",
  },
};

export const ModalTitle = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 2rem;
`;

export const ModalHeader = styled.div`
  display: flex;
  justify-content: flex-end;
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
  }
  .addModalBtn {
    position: absolute;
    top: 4.2rem;
    right: 3rem;
    display: none;
  }
`;
