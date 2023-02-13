import { BrowserRouter, Route, Routes } from "react-router-dom";
import CreateTask from "./components/Createtask";
import Home from "./pages/Home";
import Main from "./pages/Main";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="task-app/" element={<Main />} />
        <Route path="task-app/create-task" element={<CreateTask />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
