import { boardModal, toDoState } from "../recoil/atom";
import { useRecoilState } from "recoil";
import {
  ModalHeader,
  ModalTitle,
  StyledModal,
  AddBoardForm,
  WarningMsg,
} from "../styles/modalStyle";
import { AddTaskBtn } from "../styles/dndStyle";
// react-icons
import { IoIosClose } from "react-icons/io";
import { FaCirclePlus } from "react-icons/fa6";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { IAddBoardForm } from "../interfaces/boardInterface";

const AddBoardModal = () => {
  // 카테고리 목록
  const [toDos, setToDos] = useRecoilState(toDoState);
  // 보드 추가 모달
  const [modalOpen, setModalOpen] = useRecoilState(boardModal);
  // 새 보드 이름
  const [newBoardName, setNewBoardName] = useState("");

  const handleCloseModal = () => {
    setModalOpen(!modalOpen);
    setValue("newBoard", "");
  };

  // react-hook-form
  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm<IAddBoardForm>();

  // 보드 이름 유효성 체크
  const newBoard = register("newBoard", {
    required: "카테고리 입력은 필수입니다!",
    minLength: {
      value: 2,
      message: "카테고리는 최소 2글자 이상입니다!",
    },
  });

  const isValid = ({ newBoard }: IAddBoardForm) => {
    setToDos((prevToDos) => {
      return {
        ...prevToDos,
        [newBoardName]: [],
      };
    });

    setModalOpen(!modalOpen);
    setValue("newBoard", "");
  };

  return (
    <StyledModal
      isOpen={modalOpen}
      onEscapeKeydown={handleCloseModal} // esc -> 모달 닫기
      onBackgroundClick={handleCloseModal} // overlay 클릭 -> 모달 닫기
    >
      <ModalHeader>
        <IoIosClose className="closeModal" onClick={handleCloseModal} />
      </ModalHeader>
      <ModalTitle>
        <p style={{ fontSize: "1.5rem" }}>생성할 보드 이름을 입력해주세요.</p>
      </ModalTitle>
      <AddBoardForm onSubmit={handleSubmit(isValid)}>
        <input
          type="text"
          value={newBoardName}
          {...newBoard}
          onChange={(e) => {
            newBoard.onChange(e);
            setNewBoardName(e.currentTarget.value);
          }}
        />
        <AddTaskBtn>
          <FaCirclePlus />
        </AddTaskBtn>
        <FaCirclePlus className="classModalBtn" />
      </AddBoardForm>
      <WarningMsg>{errors.newBoard?.message}</WarningMsg>
    </StyledModal>
  );
};

export default AddBoardModal;
