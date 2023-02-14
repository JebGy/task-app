import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Task from "../components/Task";

function Appmain() {
  const [tasklist, setTasklist] = useState([]);

  //load tasks from localstorage
  useEffect(() => {
    const data = localStorage.getItem("tasks");
    const tasks = JSON.parse(data);
    setTasklist(tasks);
  }, []);

  return (
    <main>
      <header className="app__header">
        <h1 className="app__title">To Do list</h1>
        <Link to="/task-app/create-task" className="create__button" ti>
          Create Task
        </Link>
      </header>
      <div className="app__container">
        <div className="tasks__container">
          {tasklist.length>=1 ? (
            tasklist.map((task, index) => <Task task={task} key={index} />)
          ) : (
            <h2 className="app__title">No tasks</h2>
          )}
        </div>
      </div>
    </main>
  );
}

export default Appmain;
