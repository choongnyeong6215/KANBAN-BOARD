// 카테고리
export interface ITodoState {
  [key: string]: string[];
}

// 할일 입력 추가 폼
export interface ITodoForm {
  todo: string;
}
