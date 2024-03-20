import { boardModal, toDoState } from "../recoil/atom";
import { useRecoilState } from "recoil";
import {
  ModalHeader,
  ModalTitle,
  StyledModal,
  // newBoardModalStyle,
  AddBoardForm,
} from "../styles/modalStyle";
// react-icons
import { IoIosClose } from "react-icons/io";
import { FaCirclePlus } from "react-icons/fa6";
import { useState } from "react";

const AddBoardModal = () => {
  // 카테고리 목록
  const [toDos, setToDos] = useRecoilState(toDoState);

  // 보드 추가 모달
  const [modalOpen, setModalOpen] = useRecoilState(boardModal);

  const handleCloseModal = () => setModalOpen(!modalOpen);

  // 보드 추가 로직
  const [newBoardName, setNewBoardName] = useState("");

  const hanldeBoardName = (e: React.FormEvent<HTMLInputElement>) => {
    console.log(e.currentTarget.value);
    setNewBoardName(e.currentTarget.value);
  };

  const handleSubmit = () => {
    setToDos((prevToDos) => {
      const newCategory = newBoardName;
      return {
        ...prevToDos,
        [newCategory]: [],
      };
    });
  };

  return (
    <StyledModal isOpen={modalOpen}>
      <ModalHeader>
        <IoIosClose className="closeModal" onClick={handleCloseModal} />
      </ModalHeader>
      <ModalTitle>
        <h1>생성할 보드 이름을 입력해주세요.</h1>
      </ModalTitle>
      <AddBoardForm onSubmit={handleSubmit}>
        <input type="text" value={newBoardName} onChange={hanldeBoardName} />
        <FaCirclePlus className="addModalBtn" />
      </AddBoardForm>
    </StyledModal>
  );
};

export default AddBoardModal;
