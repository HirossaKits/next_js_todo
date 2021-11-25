export const status = {
  all: "すべて",
  notStarted: "未着手",
  inProgress: "作業中",
  done: "完了"
};

export type STATUS_KEY = keyof typeof status;

export interface TODO {
  id: number;
  title: string;
  status: STATUS_KEY;
}

export type SORT_KEY = keyof TODO;