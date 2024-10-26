import React, { useContext } from "react";
import { TaskContext } from "../../context/TasksContext";
import style from "./task_list.module.css";
import TaskCard from "../taskCard/TaskCard";

function TasksList() {
  const { tasks, sortTasks } = useContext(TaskContext);

  if (tasks.length < 1) {
    return (
      <div className={style.task_card_container}>
        <h2>No hay tareas pendientes!</h2>
      </div>
    )
  }

  return (

    <div className={style.task_card_container}>
      {sortTasks(tasks).map((task) => (
        <TaskCard
          key={`${task.id}-${task.taskName}`}
          taskName={task.taskName}
          taskDescription={task.description}
          taskStage={task.stage}
          taskId={task.id}
          taskColorHEX={task.colorHEX}
          taskColorName={task.colorName}
        />
      ))}
    </div>
  );
}

export default TasksList;
