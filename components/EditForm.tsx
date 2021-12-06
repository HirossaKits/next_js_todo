import { E2BIG } from 'constants';
import React, { ChangeEventHandler } from 'react';
import { useRecoilState } from 'recoil';
import { todoState, editingState } from '../components/atom';
// import { status, STATUS_KEY } from "../components/types";

type Props = {
  setOpenEdit: React.Dispatch<React.SetStateAction<boolean>>;
  mode: 'edit' | 'register';
};

const EditForm = (props: Props) => {
  const [todos, setTodos] = useRecoilState(todoState);
  const [editing, setEditing] = useRecoilState(editingState);

  const handleInputChange: ChangeEventHandler<
    HTMLInputElement | HTMLSelectElement
  > = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setEditing({ ...editing, [name]: value });
  };

  const handleRegisterClick = () => {
    if (props.mode === 'edit') {
      const newTodos = todos.filter((todo) => todo.id !== editing.id);
      newTodos.push(editing);
      setTodos(newTodos);
    } else if (props.mode === 'register') {
      const newTodos = [...todos];
      newTodos.push(editing);
      setTodos(newTodos);
    }
    props.setOpenEdit(false);
  };

  const handleCancelClick = () => {
    props.setOpenEdit(false);
  };

  return (
    <>
      <label>
        タイトル
        <input
          name='title'
          type='text'
          value={editing.title}
          onChange={handleInputChange}
        />
      </label>
      <label>
        ステータス
        <select
          name='status'
          // value={editing.status}
          onChange={handleInputChange}
        >
          {Object.keys(status).map((sta, idx) => {
            if (sta !== 'all') {
              return (
                <option key={idx} value={sta}>
                  {/* {status[sta as STATUS_KEY]} */}
                </option>
              );
            }
          })}
        </select>
      </label>

      <button onClick={handleRegisterClick}>編集を保存</button>
      <button onClick={handleCancelClick}>キャンセル</button>
    </>
  );
};

export default EditForm;
