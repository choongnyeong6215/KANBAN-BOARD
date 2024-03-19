import { atom } from "recoil";
import { ITodoState } from "../interfaces/todoInterface";
import { recoilPersist } from "recoil-persist";

// localSotrage 저장
const { persistAtom } = recoilPersist({
  key: "todoLocalStorage",
  storage: localStorage,
});

export const toDoState = atom<ITodoState>({
  key: "todo",
  // 할일, 진행중, 완료 카테고리
  default: {
    할일: [],
    진행중: [],
    완료: [],
  },
  effects_UNSTABLE: [persistAtom],
});

// 디크모드
export const isDarkMode = atom({
  key: "darkMode",
  default: localStorage.getItem("mode") === "true" ? true : false,
});

// 보드 추가 입력 모달
export const boardModal = atom({
  key: "boardModal",
  default: false,
});
