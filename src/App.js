import "./App.css";
import { Routes, Route, BrowserRouter, Navigate } from "react-router-dom";
import ReadTaskPage from "./pages/Tasks/ReadTaskPage";
import CreateTaskPage from "./pages/Tasks/CreateTaskPage";
import DeleteTaskPage from "./pages/Tasks/DeleteTaskPage";
import Paths from "./constants/Paths";

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
