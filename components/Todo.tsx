import React from "react";
import { TODO } from "./types";

type Rrops = {
  todo: TODO;
};

const Todo = (props: Rrops) => {
  return (
    <li>
      <span>{props.todo.title}</span>
      <select value={props.todo.status}>
        <option value='notStarted'>未着手</option>
        <option value='inProgress'>作業中</option>
        <option value='done'>完了</option>
        <button>編集</button>
        <button>削除</button>
      </select>
    </li>
  );
};

export default Todo;
