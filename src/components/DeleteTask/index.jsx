import React, { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Paths from "../../constants/Paths";
import { TaskContext } from "../../context/TaskContextProvider";
import DeleteTaskCard from "./DeleteTaskCard";
import "./index.css";

const Tasks = () => {
  const { tasks, setTasks } = useContext(TaskContext);
  const navigate = useNavigate();
  const [checkedIds, setCheckedIds] = useState([]);

  const deleteAllCheckedTaskHandler = () => {
    const remaining = tasks.filter((item) => !checkedIds.includes(item.id));
    setTasks(remaining);
  };

  const backHandler = () => {
    return navigate(Paths.LIST_TASKS);
  };

  useEffect(() => {
    console.log("Tasks ", tasks);
  }, [tasks]);
  return (
    <div className="container">
      <div className="taskContainer">
        {tasks.length ? (
          tasks.map((task, index) => (
            <DeleteTaskCard
              task={task}
              key={index}
              setCheckedIds={setCheckedIds}
              tasks={tasks}
            />
          ))
        ) : (
          <h1 style={{ margin: "auto" }}>No task found</h1>
        )}
      </div>
      <div className="btnContainer">
        <button className="btnItem" onClick={deleteAllCheckedTaskHandler}>
          Delete all checked
        </button>
        <button className="btnItem" onClick={backHandler}>
          Back
        </button>
      </div>
    </div>
  );
};

export default Tasks;
