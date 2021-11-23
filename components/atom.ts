import { atom } from "recoil";
import { TODO } from "./types";

const todoDemo: TODO[] = [
  {
    id: "1",
    title: "掃除",
    status: "notStarted",
  },
  {
    id: "2",
    title: "洗濯",
    status: "inProgress",
  },
  {
    id: "3",
    title: "料理",
    status: "done",
  },
];

// todo
export const todoState = atom<TODO[]>({
  key: "todo",
  default: todoDemo
});

// filter
export const filterState = atom<string>({
  key: "filter",
  default: "all"
});