import Modal from "react-modal";
import { boardModal } from "../recoil/atom";
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

const AddBoardModal = () => {
  const [modalOpen, setModalOpen] = useRecoilState(boardModal);

  const handleCloseModal = () => setModalOpen(!modalOpen);

  return (
    <StyledModal isOpen={modalOpen}>
      <ModalHeader>
        <IoIosClose className="closeModal" onClick={handleCloseModal} />
      </ModalHeader>
      <ModalTitle>
        <h1>생성할 보드 이름을 입력해주세요.</h1>
      </ModalTitle>
      <AddBoardForm>
        <input placeholder="asd" />
        <FaCirclePlus className="addModalBtn" />
      </AddBoardForm>
    </StyledModal>
  );
};

export default AddBoardModal;
