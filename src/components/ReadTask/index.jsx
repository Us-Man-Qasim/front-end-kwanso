import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import Paths from "../../constants/Paths";
import { TaskContext } from "../../context/TaskContextProvider";
import "./index.css";
import ReadTaskCard from "./ReadTaskCard";

const ReadTask = () => {
  const { tasks } = useContext(TaskContext);
  const navigate = useNavigate();

  const addTaskHandler = () => navigate(Paths.CREATE_TASK);
  const deleteTaskHandler = () => navigate(Paths.BULK_DELETE);

  return (
    <div className="container">
      <div className="taskContainer">
        {tasks.length ? (
          tasks.map((task, index) => <ReadTaskCard task={task} key={index} />)
        ) : (
          <h1 style={{ margin: "auto" }}>No task found</h1>
        )}
      </div>
      <div className="btnContainer">
        <button className="btnItem" onClick={addTaskHandler}>
          Add Task
        </button>
        <button className="btnItem" onClick={deleteTaskHandler}>
          Delete Task
        </button>
      </div>
    </div>
  );
};

export default ReadTask;
