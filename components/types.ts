export interface TODO {
  id: string;
  title: string;
  isDone: boolean;
  deadline: string;
}

export type SORT_KEY = keyof TODO;