import { atom } from "recoil";
import { ITodoState } from "../interfaces/todoInterface";

export const toDoState = atom<ITodoState>({
  key: "todo",
  // 할일, 진행중, 완료 카테고리
  default: {
    할일: [
      { id: 1, text: "a" },
      { id: 2, text: "b" },
    ],
    진행중: [{ id: 3, text: "c" }],
    완료: [{ id: 4, text: "d" }],
  },
});
