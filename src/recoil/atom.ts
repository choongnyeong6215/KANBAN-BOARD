import { atom } from "recoil";
import { ITodoState } from "../interfaces/todoInterface";

export const toDoState = atom<ITodoState>({
  key: "todo",
  // 할일, 진행중, 완료 카테고리
  default: {
    할일: [],
    진행중: [],
    완료: [],
  },
});
