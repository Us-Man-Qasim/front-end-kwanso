import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import "./App.css";
import Paths from "./constants/Paths";
import CreateTaskPage from "./pages/Tasks/CreateTaskPage";
import DeleteTaskPage from "./pages/Tasks/DeleteTaskPage";
import ReadTaskPage from "./pages/Tasks/ReadTaskPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index path={Paths.LIST_TASKS} element={<ReadTaskPage />} />
        <Route index path={Paths.CREATE_TASK} element={<CreateTaskPage />} />
        <Route index path={Paths.BULK_DELETE} element={<DeleteTaskPage />} />
        <Route path="/*" element={<Navigate to={Paths.LIST_TASKS} />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
