import { useContext, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { v4 as uuidv4 } from "uuid";
import Paths from "../../constants/Paths";
import { TaskContext } from "../../context/TaskContextProvider";
import "./index.css";

const CreateTaskPage = () => {
  const { setTasks } = useContext(TaskContext);
  const name = useRef(null);
  const [errorMessage, setErrorMessage] = useState("");
  const navigate = useNavigate();

  const onSubmitHandler = (e) => {
    e.preventDefault();
    if (!name.current)
      return setErrorMessage("Empty or Invalid task you added");
    const task = {
      id: uuidv4(),
      name: name.current,
    };
    setTasks((prevTask) => [...prevTask, task]);
    name.current = "";
    return navigate(Paths.LIST_TASKS);
  };

  const onChangeHandler = (e) => {
    name.current = e.target.value;
  };

  const backHandler = () => {
    return navigate(Paths.LIST_TASKS);
  };

  return (
    <div className="app">
      <form onSubmit={onSubmitHandler}>
        <h1>Add Task</h1>
        <div className="formInput">
          <label>Name</label>
          <input onChange={onChangeHandler} />
          {errorMessage && <span>{errorMessage}</span>}
        </div>
        <button>Submit</button>
        <button onClick={backHandler}>Back</button>
      </form>
    </div>
  );
};

export default CreateTaskPage;
