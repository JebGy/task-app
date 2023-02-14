import { BrowserRouter, Route, Routes } from "react-router-dom";
import CreateTask from "./components/Createtask";
import Appmain from "./pages/Appmain";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Appmain />} />
      <Route path="/create-task" element={<CreateTask />} />
    </Routes>
  );
}

export default App;
