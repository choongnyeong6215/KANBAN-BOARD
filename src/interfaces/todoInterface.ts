// 카테고리
export interface ITodoState {
  [key: string]: ITodo[];
}

// 할 일 입력 추가 폼
export interface ITodoForm {
  todo: string;
}

// 할 일 데이타
export interface ITodo {
  id: number;
  text: string;
}
