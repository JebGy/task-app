import { BrowserRouter, Route, Routes } from "react-router-dom";
import CreateTask from "./components/Createtask";
import Appmain from "./pages/Appmain";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="task-app/" element={<Appmain />} />
        <Route path="task-app/create-task" element={<CreateTask />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;