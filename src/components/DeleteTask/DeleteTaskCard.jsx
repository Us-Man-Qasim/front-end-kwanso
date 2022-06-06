import React, { useState } from "react";
import "./deleteTaskCard.css";

const TaskCard = ({ task, setCheckedIds }) => {
  const [check, setCheck] = useState(false);
  const onChecked = (id) => {
    setCheckedIds((prevStat) => [...prevStat, id]);
    setCheck(true);
  };

  const onUnchecked = (id) => {
    setCheckedIds((prevStat) =>
      prevStat.filter((prevId) => {
        if (prevId !== id) {
          return prevId;
        }
      })
    );

    setCheck(false);
  };

  return (
    <>
      <div className="content">
        {task.name}
        {check ? (
          <button className="checked" onClick={() => onUnchecked(task.id)}>
            Uncheck
          </button>
        ) : (
          <button onClick={() => onChecked(task.id)}>Check</button>
        )}
      </div>
    </>
  );
};

export default TaskCard;
