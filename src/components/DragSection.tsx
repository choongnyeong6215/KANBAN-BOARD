import { Draggable } from "react-beautiful-dnd";
import {
  Card,
  ToDoSection,
  EditForm,
  EditBtn,
  CancelBtn,
  ConfirmBtn,
} from "../styles/dndStyle";
import { ICardProps } from "../interfaces/cardInterface";
import React, { useRef, useState } from "react";
import { useRecoilState } from "recoil";
import { toDoState } from "../recoil/atom";
// react-icons
import { FaRegCheckSquare } from "react-icons/fa";
import { FaRegEdit } from "react-icons/fa";
import { FaRegWindowClose } from "react-icons/fa";

const DragSection = ({ todoId, todoText, idx, boardId }: ICardProps) => {
  const [toDos, setTodos] = useRecoilState(toDoState);
  // 수정 아이콘 렌더링
  const [isEdit, setIsEdit] = useState(false);
  // 수정된 투두
  const [editText, setEditText] = useState(todoText);

  const todoRef = useRef<HTMLInputElement>(null);

  // 수정 버튼 활성화
  const openEdit = () => {
    setIsEdit(true);

    // input 활성화
    if (todoRef.current !== null) {
      todoRef.current.disabled = false;
      todoRef.current.focus();
    }
  };

  // 수정 취소
  const cancelEdit = () => {
    setIsEdit(false);
    setEditText(todoText);

    // input 비활성화
    if (todoRef.current !== null) {
      todoRef.current.disabled = true;
      todoRef.current.blur();
    }
  };

  // 수정 내용 업데이트
  const handleSubmit: React.FormEventHandler<HTMLFormElement> = (
    e: React.FormEvent<HTMLFormElement>
  ) => {
    e.preventDefault();

    setTodos((prevToDos) => {
      // 기존 데이터
      const updateToDos = { ...prevToDos };

      // 텍스트 변경 발생할 카테고리
      const editCategory = updateToDos[boardId];

      const finalEditCategory = editCategory.map((toDo) =>
        toDo.id === todoId ? { ...toDo, text: editText } : toDo
      );

      // 최초 편집 아이콘으로 변경
      setIsEdit(false);

      // input 비활성화
      if (todoRef.current !== null) {
        todoRef.current.disabled = true;
        todoRef.current.blur();
      }

      return {
        ...updateToDos,
        [boardId]: finalEditCategory,
      };
    });
  };

  return (
    <Draggable key={todoId} draggableId={String(todoId)} index={idx}>
      {(provided) => (
        <Card
          ref={provided.innerRef}
          {...provided.dragHandleProps}
          {...provided.draggableProps}
        >
          <ToDoSection>
            {/* 아이콘 상태 따라 input 활성화*/}

            <EditForm onSubmit={handleSubmit} $isEdit={isEdit}>
              <input
                type="text"
                ref={todoRef}
                value={editText}
                className="editToDoIpt"
                onChange={(e: React.FormEvent<HTMLInputElement>) => {
                  setEditText(e.currentTarget.value);
                }}
                disabled
              />
              {/* 수정 완료 버튼 */}
              <ConfirmBtn>
                <FaRegCheckSquare className="confirmIcon" />
              </ConfirmBtn>
            </EditForm>

            {/* input 활성화에 따라 버튼 렌더링 */}
            {isEdit ? (
              <CancelBtn>
                <FaRegWindowClose className="cancelIcon" onClick={cancelEdit} />
              </CancelBtn>
            ) : (
              <EditBtn className="editBtn" onClick={openEdit}>
                <FaRegEdit className="editIcon" />
              </EditBtn>
            )}
          </ToDoSection>
        </Card>
      )}
    </Draggable>
  );
};

// 리렌더링 최적화
export default React.memo(DragSection);
