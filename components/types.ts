export type STATUS = "all" | "notStarted" | "inProgress" | "done";

export interface TODO {
  id: string;
  title: string;
  status: STATUS;
}

export type SORT_KEY = keyof TODO;