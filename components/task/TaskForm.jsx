import { useState } from "react";
import {v4 as uuidv4} from "uuid";
import ColorBtn from "./colorBtn";

const TaskForm = ({ tasks, setTasks }) => {
  let [newTask, setNewTask] = useState({ color: "#00b894", time: 0 });
  let nameHandler = (e) => {
    setNewTask({ ...newTask, name: e.target.value });
  };
  let colorHandler = (color) => {
    setNewTask({ ...newTask, color: color });
  };
  let categoryHandler = (e) => {
    setNewTask({ ...newTask, category: e.target.value });
  };
  let timeHandler = (e) => {
    setNewTask({ ...newTask, time: Number(e.target.value) });
  };
  let descriptionHandler = (e) => {
    setNewTask({ ...newTask, desc: e.target.value });
  };
  let check = () => {
    return newTask.name && newTask.category;
  };
  let createNewTask = (e) => {
    newTask.id=uuidv4();
    setTasks([...tasks,newTask]);
  };
  return (
    <form className=" card absolute right-0 top-40  w-96 z-10 p-4 dark:border-white dark:bg-black">
      <div className="mb-2">
        <input
          type="text"
          name="taskname"
          className="form-control"
          placeholder="Task Name"
          required
          onChange={nameHandler}
          autoComplete="off"
        />
      </div>
      <div className="mb-2">
        <select className="form-select" required onChange={categoryHandler}>
          <option selected disabled>
            Category
          </option>
          <option value="financial">Financial</option>
          <option value="daily">Daily</option>
          <option value="health">Health</option>
          <option value="ability">Ability</option>
          <option value="hw">Hw</option>
          <option value="learning">Learning</option>
        </select>
      </div>

      <div className="btn-group mb-2">
        <ColorBtn
          newTask={newTask}
          colorHandler={colorHandler}
          color="#ef4444"
          bgClass={"bg-[#ef4444]"}
          borderClass={"border-[#ef4444] "}
        />
        <ColorBtn
          newTask={newTask}
          colorHandler={colorHandler}
          color="#f87315"
          bgClass={"bg-[#f87315]"}
          borderClass={"border-[#f87315] "}
        />
        <ColorBtn
          newTask={newTask}
          colorHandler={colorHandler}
          color="#eab305"
          bgClass={"bg-[#eab305]"}
          borderClass={"border-[#eab305] "}
        />
        <ColorBtn
          newTask={newTask}
          colorHandler={colorHandler}
          color="#00b894"
          bgClass={"bg-[#00b894]"}
          borderClass={"border-[#00b894] "}
        />
        <ColorBtn
          newTask={newTask}
          colorHandler={colorHandler}
          color="#3b81f6"
          bgClass={"bg-[#3b81f6]"}
          borderClass={"border-[#3b81f6] "}
        />
        <ColorBtn
          newTask={newTask}
          colorHandler={colorHandler}
          color="#6b5ce7"
          bgClass={"bg-[#6b5ce7]"}
          borderClass={"border-[#6b5ce7] "}
        />
      </div>
      <div className="mb-2">
        <input
          type="Number"
          className="form-control"
          placeholder="Already used minute (optional)"
          min={0}
          onChange={timeHandler}
          autoComplete="off"
        />
      </div>
      <div className="mb-2">
        <textarea
          className="form-control"
          rows={2}
          placeholder="Description (optional)"
          onChange={descriptionHandler}
        />
      </div>
      <div className="mb-2">
        <button
          className="form-control bg-blue-300 dark:bg-black dark:text-white"
          type="reset"
          disabled={!check()}
          onClick={createNewTask}
        >
          Create New Task
        </button>
      </div>
    </form>
  );
};

export default TaskForm;
