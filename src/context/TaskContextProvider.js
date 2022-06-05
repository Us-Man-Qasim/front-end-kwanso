import React, { createContext, useState } from "react";
export const TaskContext = createContext();

const TaskContextProvider = (props) => {
  const [tasks, setTasks] = useState([]);
  const TaskContextValues = {
    tasks,
    setTasks,
  };

  return (
    <TaskContext.Provider value={TaskContextValues}>
      {props.children}
    </TaskContext.Provider>
  );
};

export default TaskContextProvider;
