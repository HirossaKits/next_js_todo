import React, { ChangeEventHandler } from "react";
import { useRecoilState } from "recoil";
import { filterState } from "./atom";
import { STATUS } from "./types";

const Filter = () => {
  const [filter, setFilter] = useRecoilState(filterState);

  const handleSelectChange: ChangeEventHandler<HTMLSelectElement> = (e) => {
    setFilter(e.target.value as STATUS);
  };

  return (
    <>
      <select value={filter} onChange={handleSelectChange}>
        <option value='all'>すべて</option>
        <option value='notStarted'>未着手</option>
        <option value='inProgress'>作業中</option>
        <option value='done'>完了</option>
      </select>
    </>
  );
};

export default Filter;
