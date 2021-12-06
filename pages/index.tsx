import React, { useState } from "react";
import type { NextPage } from "next";
import Head from "next/head";

import styles from "../styles/Home.module.css";
import { useRecoilValue, useRecoilState } from "recoil";
import { todoState, filterState, sortState } from "../components/atom";
import Filter from "../components/Filter";
import Sort from "../components/Sort";
import { TODO } from "../components/types";
import Todo from "../components/Todo";
import EditForm from "../components/EditForm";
import { Flex } from "@chakra-ui/react";

const Home: NextPage = () => {
  // const [openEdit, setOpenEdit] = useState(false);
  // const [todos, setTodos] = useRecoilState(todoState);
  // const [editing, setEditing] = useRecoilState(editingState);
  // const filterStatus = useRecoilValue(filterState);
  // const sortKey = useRecoilValue(sortState);

  // const handleRegisterClick = () => {
  //   setOpenEdit(true);
  //   const newId: number = Math.max(...todos.map((todo) => todo.id)) + 1;
  //   setEditing({
  //     id: newId,
  //     title: "",
  //     status: "notStarted",
  //   });
  // };

  // const editClickHandler = (id: number) => {
  //   setOpenEdit(true);
  //   const selected = todos.find((todo) => todo.id === id);
  //   if (selected) {
  //     setEditing(selected);
  //   }
  // };

  // const deleteClickHandler = (id: number) => {
  //   setTodos(todos.filter((todo) => todo.id !== id));
  // };

  // const filterTodo = (tds: TODO[]): TODO[] => {
  //   if (filterStatus === "all") return tds;
  //   const filtered = tds.filter((td) => td.status === filterStatus);
  //   return filtered;
  // };

  // const sortTodo = (tds: TODO[]): TODO[] => {
  //   const sorted = [...tds];
  //   sorted.sort((a, b) => {
  //     if (a[sortKey] > b[sortKey]) {
  //       return -1;
  //     }
  //     if (a[sortKey] < b[sortKey]) {
  //       return 1;
  //     }
  //     return 0;
  //   });
  //   return sorted;
  // };

  return (
    <>
      {/* <h1 className={styles.title}>To-Do-List</h1>
      <code className={styles.code}>pages/index.tsx</code>

      <button onClick={handleRegisterClick}>新規登録</button>

      {openEdit && <EditForm setOpenEdit={setOpenEdit} mode='edit' />}

      <span>フィルター</span>
      <Filter />

      <span>ソート</span>
      <Sort />

      <ul>
        {sortTodo(filterTodo(todos)).map((todo) => (
          <Todo
            key={todo.id}
            todo={todo}
            editClickHandler={editClickHandler}
            deleteClickHandler={deleteClickHandler}
          />
        ))}
      </ul> */}
    </>
  );
};

export default Home;
