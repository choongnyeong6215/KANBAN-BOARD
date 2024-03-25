import { ITodo } from "./todoInterface";

export interface IBoardProps {
  todos: ITodo[];
  boardId: string;
}

// 새 보드 추기
export interface IAddBoardForm {
  newBoard: string;
}
