import { atom } from "recoil";
import { TODO, STATUS, SORT_KEY } from "./types";

const todoDemo: TODO[] = [
  {
    id: "1",
    title: "A掃除",
    status: "notStarted",
  },
  {
    id: "2",
    title: "B洗濯",
    status: "inProgress",
  },
  {
    id: "3",
    title: "C料理",
    status: "done",
  },
];

// todo
export const todoState = atom<TODO[]>({
  key: "todo",
  default: todoDemo
});

// filter
export const filterState = atom<STATUS>({
  key: "filter",
  default: "all"
});

// sort
export const sortState = atom<SORT_KEY>({
  key: "sort",
  default: "id"
});