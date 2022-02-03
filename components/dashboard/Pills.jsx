import { useState } from "react";
import User from "./User";
import Graph from "./Graph";
const Pills = () => {
  let [curPill, setCurPill] = useState("user");
  return (
    <div className="w-full  lg:w-2/3 mx-auto   mt-5 ">
      <nav>
        <div className="nav nav-tabs !border-b-0 " id="nav-tab" role="tablist">
          <button
            className={"nav-link  " + (curPill === "user" ? "active dark:!bg-black  dark:border-b-0  " : "")}
            id="nav-user-tab"
            data-bs-toggle="tab"
            data-bs-target="#nav-user"
            type="button"
            role="tab"
            aria-controls="nav-user"
            aria-selected="true"
            onClick={() => setCurPill("user")}
          >
            <i className="bi bi-person-circle text-3xl "></i>
          </button>
          <button
            className={"nav-link  " + (curPill === "task" ? "active dark:!bg-black dark:border-b-0 " : "")}
            id="nav-task-tab"
            data-bs-toggle="tab"
            data-bs-target="#nav-task"
            type="button"
            role="tab"
            aria-controls="nav-task"
            aria-selected="false"
            onClick={() => setCurPill("task")}
          >
            <i className="bi bi-clipboard-data text-3xl"></i>
          </button>
          {/* <button
            className={"nav-link  " + (curPill === "time" ? "active dark:!bg-black dark:border-b-0" : "")}
            id="nav-time-tab"
            data-bs-toggle="tab"
            data-bs-target="#nav-time"
            type="button"
            role="tab"
            aria-controls="nav-time"
            aria-selected="false"
            onClick={() => setCurPill("time")}
          >
            <i className="bi bi-clock-history text-3xl"></i>
          </button> */}
        </div>
      </nav>
      <div className="tab-content h-full" id="nav-tabContent">
        <div
          className={
            "tab-pane fade h-full " + (curPill === "user" ? "show active" : "")
          }
          id="nav-user"
          role="tabpanel"
          aria-labelledby="nav-home-tab"
        >
          <User />
        </div>
        <div
          className={
            "tab-pane fade h-full " + (curPill === "task" ? "show active" : "")
          }
          id="nav-task"
          role="tabpanel"
          aria-labelledby="nav-task-tab"
        >
          <Graph />
        </div>
        {/* <div
          className={
            "tab-pane fade h-full " + (curPill === "time" ? "show active" : "")
          }
          id="nav-time"
          role="tabpanel"
          aria-labelledby="nav-time-tab"
        >
          time
        </div> */}
      </div>
    </div>
  );
};

export default Pills;
