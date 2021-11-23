import React, { ChangeEventHandler } from "react";
import { useRecoilState } from "recoil";
import { sortState } from "./atom";
import { SORT_KEY } from "./types";

const Sort = () => {
  const [sort, setSort] = useRecoilState(sortState);

  const handleSelectChange: ChangeEventHandler<HTMLSelectElement> = (e) => {
    setSort(e.target.value as SORT_KEY);
  };

  return (
    <>
      <select value={sort} onChange={handleSelectChange}>
        <option value='id'>id順</option>
        <option value='name'>名前順</option>
      </select>
    </>
  );
};

export default Sort;
