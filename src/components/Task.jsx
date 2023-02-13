import { useState } from "react";
import "../styles/main.css";
function Task(task) {
    const check=()=>{
        if(task.task.completed){
            return ("fa-solid")
        }else{
            return ("fa-regular")
        }
    }
  return (
    <div className="task__container" id={task.task.id}>
      <h2 className="task-title">{task.task.title}</h2>
      <p className="task-description">{task.task.description}</p>

      <button
        className={`check__button ${task.task.completed?"fa-solid":"fa-regular"} fa-square-check`}
        onClick={(e) => {
          //update at localstorage
          const data = localStorage.getItem("tasks");
          const tasks = JSON.parse(data);
          const newTasks = tasks.map((task) => {
            if (task.id === e.target.parentElement.id) {
              task.completed = !task.completed;
            }

            if(task.completed){
                e.target.classList.remove("fa-regular");
                e.target.classList.add("fa-solid");
            }else{
                e.target.classList.remove("fa-solid");
                e.target.classList.add("fa-regular");
            }

            return task;
          });
          localStorage.setItem("tasks", JSON.stringify(newTasks));
        }}
      ></button>

      <button
        className="trash__button fa-regular fa-trash-can"
        onClick={(e) => {
          //remove task from localstorage
          const data = localStorage.getItem("tasks");
          const tasks = JSON.parse(data);
          const newTasks = tasks.filter((task) => {
            return task.id !== e.target.parentElement.id;
          });
          e.target.parentElement.remove();
          localStorage.setItem("tasks", JSON.stringify(newTasks));
        }}
      ></button>
    </div>
  );
}

export default Task;
