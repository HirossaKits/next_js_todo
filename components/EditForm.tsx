import React from "react";

const EditForm = () => {
  const handleInputChange = () => {};

  return (
    <>
      <input
        type='text'
        // label='新しいタイトル'
        value={""}
        onChange={handleInputChange}
      />
      <button>編集を保存</button>
      <button>キャンセル</button>
    </>
  );
};

export default EditForm;
