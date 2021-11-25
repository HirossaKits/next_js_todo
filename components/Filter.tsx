import { STATUS_CODES } from "http";
import React, { ChangeEventHandler } from "react";
import { useRecoilState } from "recoil";
import { filterState } from "./atom";
import { status, STATUS_KEY } from "./types";

const Filter = () => {
  const [filter, setFilter] = useRecoilState(filterState);

  const handleSelectChange: ChangeEventHandler<HTMLSelectElement> = (e) => {
    setFilter(e.target.value as STATUS_KEY);
  };

  return (
    <>
      <select value={filter} onChange={handleSelectChange}>
        {Object.keys(status).map((sta, idx) => (
          <option key={idx} value={sta}>
            {status[sta as STATUS_KEY]}
          </option>
        ))}
      </select>
    </>
  );
};

export default Filter;
