import React, { useState } from "react";
import "./deleteTaskCard.css";

const TaskCard = ({ task, setCheckedIds }) => {
  const [check, setCheck] = useState(false);
  const onChecked = (id) => {
    setCheckedIds((prevStat) => [...prevStat, id]);
    setCheck(true);
  };
  return (
    <>
      <div className="content">
        {task.name}
        {check ? (
          <button className="checked">Uncheck</button>
        ) : (
          <button onClick={() => onChecked(task.id)}>Check</button>
        )}
      </div>
    </>
  );
};

export default TaskCard;
