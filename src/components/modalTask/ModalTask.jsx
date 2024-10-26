import React, { useContext, useState } from 'react';
import style from "./modal_task.module.css";
import { TaskContext } from '../../context/TasksContext';
import ColorTask from '../colorTasks/ColorTask';

function ModalTask({ taskId, taskName, description, stage, modalTaskVisible, closeModal, taskColorName, taskColorHEX }) {
  const { tasks, setTasks } = useContext(TaskContext);

  const [modalTask, setModalTask] = useState({
    id: taskId,
    taskName: taskName,
    description: description,
    stage: stage,
    colorName: taskColorName,
    colorHEX: taskColorHEX
  });
  
  if (!modalTaskVisible) return null;

  const handleClose = () => {
    const updatedTasks = tasks.map(task => 
      task.id === taskId ? { ...task, ...modalTask } : task
    );

    if (modalTask.taskName === ("")) {
      closeModal();
      return  
    }
    setTasks(updatedTasks);
    closeModal();
  };

  const handleColorChange = (colorName, colorHEX) => {
    setModalTask(prev => ({ ...prev, colorName, colorHEX }));
  };

  return (
    <div className={style.modal_overlay} onClick={handleClose}>
      <div className={style.modal} style={{backgroundColor: modalTask.colorHEX}} onClick={(e) => e.stopPropagation()}>
        <input 
          className={style.task_name}
          type='text'
          value={modalTask.taskName}
          onChange={(e) => setModalTask(prev => ({ ...prev, taskName: e.target.value }))}
          onBlur={() => setModalTask(prev => ({ ...prev }))}
        />
        <input 
          className={style.task_description}
          type='text'
          placeholder='Describe tu tarea'
          value={modalTask.description}
          onChange={(e) => setModalTask(prev => ({ ...prev, description: e.target.value }))}
          onBlur={() => setModalTask(prev => ({ ...prev }))}
        />
        <button className={style.task_close_button} onClick={handleClose}></button>

        <ColorTask modalTask={modalTask} onColorChange={handleColorChange} />
      </div>
    </div>
  );
}

export default ModalTask;

