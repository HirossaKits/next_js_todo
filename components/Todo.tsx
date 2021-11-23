import React from "react";
import { TODO } from "./types";

type Rrops = {
  todo: TODO;
};

const Todo = (props: Rrops) => {
  return (
    <li>
      <span>{props.todo.title}</span>
      <select></select>
    </li>
  );
};

export default Todo;
