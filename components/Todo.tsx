import styles from "../styles/Home.module.css";
import React, { MouseEventHandler } from "react";
import { status, TODO } from "./types";

type Rrops = {
  todo: TODO;
  editClickHandler: Function;
  deleteClickHandler: Function;
};

const Todo = (props: Rrops) => {
  const handleEditClick: MouseEventHandler<HTMLButtonElement> = () => {
    props.editClickHandler(props.todo.id);
  };

  const handleDeleteClick: MouseEventHandler<HTMLButtonElement> = () => {
    props.deleteClickHandler(props.todo.id);
  };

  return (
    <>
      <li className={styles.card}>
        <span>{props.todo.title}</span>
        <span>{status[props.todo.status]}</span>
        <button onClick={handleEditClick}>編集</button>
        <button onClick={handleDeleteClick}>削除</button>
      </li>
    </>
  );
};

export default Todo;
