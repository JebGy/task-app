import { useEffect, useState } from "react";
import CreateTask from "../components/CreateTask";
import Task from "../components/Task";

function Appmain() {
  const [tasklist, setTasklist] = useState([]);
  const [createTask, setCreateTask] = useState(false);

  //load tasks from localstorage
  useEffect(() => {
    const data = localStorage.getItem("tasks");
    const tasks = JSON.parse(data);
    setTasklist(tasks);
  }, []);

  return (
    <div>
      {createTask ? (
        <CreateTask props={(setCreateTask, createTask)} />
      ) : (
        <>
          <main>
            <header className="app__header">
              <h1 className="app__title">To Do list</h1>
              <button
                className="create__button"
                onClick={() => {
                  setCreateTask(true);
                }}
              >
                Create Task
              </button>
            </header>
            <div className="app__container">
              <div className="tasks__container">
                {tasklist.length >= 1 ? (
                  tasklist.map((task, index) => (
                    <Task task={task} key={index} setTasklist={setTasklist}/>
                  ))
                ) : (
                  <h2 className="app__title">No tasks</h2>
                )}
              </div>
            </div>
          </main>
        </>
      )}
    </div>
  );
}

export default Appmain;
