import { atom } from "recoil";
import { TODO, SORT_KEY } from "./types";


const todoDemo: TODO[] = [
  {
    id: "1",
    title: "A掃除",
    isDone: false,
    deadline: "2021-12-19",
  },
  {
    id: "2",
    title: "B洗濯",
    isDone: false,
    deadline: "2021-12-20",
  },
  {
    id: "3",
    title: "C料理",
    isDone: true,
    deadline: "2021-12-04",
  },
];

// todo
export const todoState = atom<TODO[]>({
  key: "todo",
  default: todoDemo
});

// editing
// export const editingState = atom<TODO>({
//   key: "editing",
//   default: {
//     id: :0",
//     title: "",
//     status: "notStarted"
//   }
// });

// filter
export const filterState = atom({
  key: "filter",
  default: "all"
});

// sort
export const sortState = atom<SORT_KEY>({
  key: "sort",
  default: "id"
});

