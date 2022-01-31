import { useState } from "react";
import { v4 as uuidv4 } from "uuid";

const Memolist = ({ memo, setMemo }) => {
  let [newMemo, setNewMemo] = useState("");
  let addMemoHandler = (e) => {
    if (e.key === "Enter") {
      let newItem = {
        title: newMemo,
        id: uuidv4(),
      };
      memo.push(newItem);
      setMemo(memo);
      setNewMemo("");
    }
  };
  let memoFilter = (id) => {
    memo = memo.filter((item) => item.id != id);
    setMemo(memo);
  };

  return (
    <div
      className={
        "card left-0   !absolute top-40  p-6 dark:bg-black dark:border-white z-10"
      }
    >
      <div className="card-header border-black dark:text-white dark:border-white">
        Memo
      </div>
      <div className="alert alert-info">
        <i className="bi bi-exclamation-circle"></i> Memo will lost when leave
      </div>
      <ul className="list-group list-group-flush">
        {memo.map((item) => (
          <li className="list-group-item w-full relative dark:bg-black dark:text-white dark:border-gray-500">
            {item.title}
            <button
              className="rounded-full btn btn-success btn-sm absolute  right-0 top-1"
              onClick={() => memoFilter(item.id)}
            >
              <i className="bi bi-check "></i>
            </button>
          </li>
        ))}
      </ul>
      <input
        type="text"
        className="form-control mt-3"
        onChange={(e) => setNewMemo(e.target.value)}
        value={newMemo}
        onKeyDown={addMemoHandler}
        required
      />
    </div>
  );
};

export default Memolist;
