import { useState, useEffect,useContext } from "react";
import APIservice from "../../APIservice";
import { toast } from "react-toastify";
import { Context } from "../../context";

const Card = ({ task, TaskFilter, setFocus, focus,TimeUpdater }) => {
  let borderColor = `!border-[${task.color}]`;
  let classes = " !border-2 rounded-md bg-white dark:bg-black " + borderColor;
  let [descExpand, setDescExpand] = useState(false);
  let [min, setMin] = useState(0);
  let {state:{user}}=useContext(Context);
  let timer;
  useEffect(() => {
    if (focus != "")
      setTimeout(() => {
        setMin(min + 1);
        TimeUpdater(task.id,min+1)
      }, 60000);
  });
  let expandToggler = () => {
    setDescExpand(!descExpand);
  };
  let saveTaskHandler=async()=>{
      try{
        let res=await APIservice.saveTask(user,task);
        TaskFilter(task.id);
        toast.success("Save successfully!")
      }catch(err){
        toast.error(<div>Some error happened!<br/>Please try again later!</div>)
      }
  }
  let pauseHandler=()=>{
    setFocus("");
    clearTimeout(timer);
  }
  return (
    <div className="col ">
      <div className={classes}>
        <div className="card-body">
          <h1 className="text-3xl text-center dark:text-white">{task.name}</h1>
          <h2 className="text-lg mb-2 text-muted text-center">
            {task.category}
          </h2>
          <div className="accordion" id="accordion">
            <div className="accordion-item">
              <h2 className="accordion-header" id="headingOne">
                <button
                  className={
                    "accordion-button dark:bg-black dark:text-white" +
                    (descExpand ? " collapsed" : "")
                  }
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#description"
                  aria-expanded="true"
                  aria-controls="description"
                  onClick={expandToggler}
                >
                  description
                </button>
              </h2>
              <div
                id="description"
                class={
                  "accordion-collapse collapse" + (descExpand ? " show" : "")
                }
                aria-labelledby="headingOne"
                data-bs-parent="#accordion"
              >
                <div className="accordion-body ">
                  <textarea
                    className="form-control resize-none border-none focus:outline-none mb-2 bg-white "
                    readOnly
                    defaultValue={task.desc}
                    rows={4}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        {focus ? (
          <div
            className={`alert ${borderColor}  dark:bg-black dark:text-white mx-3 text-center`}
          >
            focus {min} min
          </div>
        ) : (
          <div
            className={`alert ${borderColor}  dark:bg-black dark:text-white mx-3 text-center`}
          >
            total {task.time} min
          </div>
        )}
        <div className="px-1 flex flex-wrap justify-around mb-3 ">
          <button className="btn btn-success ring-1 ring-emerald-500" disabled={focus !== ""} onClick={saveTaskHandler}>
            Finish
          </button>
          {!focus ? (
            <button
              className="btn btn-primary ring-1 "
              onClick={() => setFocus(task.id)}
            >
              <i className="bi bi-play"></i>Focus
            </button>
          ) : (
            <button className="btn btn-primary ring-1" onClick={pauseHandler}>
              <i
                className="bi bi-pause"
              ></i>
              Pause
            </button>
          )}
          <button
            className="btn btn-danger ring-1 ring-red-400"
            onClick={() => TaskFilter(task.id)}
            disabled={focus !== ""}
          >
            Delete
          </button>
        </div>
      </div>
    </div>
  );
};
export default Card;
