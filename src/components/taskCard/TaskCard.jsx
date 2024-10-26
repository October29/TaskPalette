import React, { useContext, useState } from "react";
import style from "./task_card.module.css"
import { completeTask } from "../../utils/taskHelper.js";
import { TaskContext } from "../../context/TasksContext";
import ModalTask from "../modalTask/ModalTask.jsx";

function TaskCard({ taskName, taskDescription, taskStage, taskId, taskColorName, taskColorHEX }) {

    const { tasks, setTasks } = useContext(TaskContext);

    //Estado del modal para editar tareas
    const [modalTaskVisible, setModalTaskVisible] = useState(false);

    const openModal = () => {   // Función para abrir el modal
      setModalTaskVisible(true);
    };
  
      const closeModal = () => {  // Función para cerrar el modal
        setModalTaskVisible(false);
    };

    const deleteCardTask = (idToRemove) => {
      const updatedTasks = tasks.filter(task => task.id !== idToRemove);
      setTasks(updatedTasks);
    }

    
  return (
    <div
      className={taskStage === "complete" ?
        style.task_card_complete  :
        style.task_card_pending}
      style={{backgroundColor: taskColorHEX}} >
      <div className={style.name_task_container}>
        <h3 className={style.task_name}>{taskName}</h3>
        { taskStage === "complete" ? <></> : <button onClick={()=> openModal()} className={style.edit_button}></button>}
      </div>
      <p className={style.task_description}>{taskDescription}</p>
      <fieldset className={style.buttons_container}>
        <div className={style.stage_container}>
          <label className={style.check_label} style={{color: taskColorHEX}} htmlFor="checkTask"> {taskStage === "pendiente" ?  "Completar tarea" : "Completada"} </label>
          <input
            className={style.task_check}
            type="checkbox"
            name="checkTask"
            onChange={() => completeTask( tasks, taskId, setTasks)}
          />
        </div>
        <button className={style.delete_button} onClick={() => deleteCardTask(taskId)}></button>
      </fieldset>
      { modalTaskVisible ? <ModalTask
        taskId={taskId}
        taskName={taskName}
        description ={taskDescription}
        stage={taskStage}
        taskColorName={taskColorName}
        taskColorHEX={taskColorHEX}
        modalTaskVisible ={setModalTaskVisible}
        closeModal ={closeModal}
      /> : <></>}
    </div>
  );
}

export default TaskCard;
