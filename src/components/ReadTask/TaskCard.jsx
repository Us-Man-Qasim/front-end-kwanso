import React from "react";
import "./taskCard.css";

const TaskCard = ({ task }) => {
  return (
    <div className="content">
      <h3>{task.name}</h3>
    </div>
  );
};

export default TaskCard;
