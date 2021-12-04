import { STATUS_CODES } from "http";
import React, { ChangeEventHandler } from "react";
import { useRecoilState } from "recoil";
import { filterState } from "./atom";

const status = {
  OnGoing: "進行中",
  Done: "完了",
};
type STATUS_KEY = keyof typeof status;

const Filter = () => {
  const [filter, setFilter] = useRecoilState(filterState);

  const handleSelectChange: ChangeEventHandler<HTMLSelectElement> = (e) => {
    setFilter(e.target.value as STATUS_KEY);
  };

  return (
    <>
      <select value={filter} onChange={handleSelectChange}>
        {Object.keys(status).map((st, idx) => (
          <option key={idx} value={st}>
            {status[st as STATUS_KEY]}
          </option>
        ))}
      </select>
    </>
  );
};

export default Filter;
