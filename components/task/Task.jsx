import { useEffect, useState } from "react";
import Card from "../task/Card";
import DisabledCard from "./DisabledCard";
import TaskBtn from "./TaskBtn";
import TaskForm from "./TaskForm";
import { toast } from "react-toastify";
const Task = () => {
  if (process.browser) {
    window.onbeforeunload = () => {
      localStorage.setItem("tasks", JSON.stringify(tasks));
    };
    
  }
  let [expand, setExpand] = useState(false);
  let [tasks, setTasks] = useState([]);
  let [focus, setFocus] = useState("");
  useEffect(()=>{
    let prevTasks=JSON.parse(localStorage.getItem("tasks"));
    if(prevTasks)setTasks(prevTasks);
  },[])
  useEffect(()=>{
    return function setUp(){
        localStorage.setItem("tasks", JSON.stringify(tasks));
    }
  })
  let TaskFilter = (id) => {
    setTasks(tasks.filter((task) => task.id != id));
  };
  let TimeUpdater = (id, time) => {
    setTasks(
      tasks.map((task) => {
        return task.id === id ? { ...task, time } : task;
      })
    );
  };
  return (
    <div className="w-5/6 lg:w-4/5 mx-auto max-w-7xl p-3">
      <TaskBtn expand={expand} setExpand={setExpand} />
      {expand && (
        <TaskForm
          tasks={tasks}
          setTasks={setTasks}
          expand={expand}
          setExpand={setExpand}
        />
      )}
      <h1 className="display-4 text-center dark:text-white">Today Tasks</h1>
      <div className="row row-cols-1 row-cols-lg-3 g-4">
        {tasks.map((task) =>
          !focus || focus === task.id ? (
            <Card
              task={task}
              focus={focus}
              setFocus={setFocus}
              TaskFilter={TaskFilter}
              TimeUpdater={TimeUpdater}
            />
          ) : (
            <DisabledCard task={task} />
          )
        )}
      </div>
    </div>
  );
};

export default Task;
