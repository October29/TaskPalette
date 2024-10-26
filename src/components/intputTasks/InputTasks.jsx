import React, { useContext } from 'react'
import { TaskContext } from '../../context/TasksContext'
import { addTask } from '../../utils/taskHelper.js';
import style from "./input_task.module.css"

function InputTasks() {

  const { tasks, setTasks, inputText, setInputText } = useContext(TaskContext);

  const formHandle = (e) => {
    e.preventDefault();
    if (inputText.trim() != ('')){
      const updateTasks = addTask(tasks, inputText);
      setTasks(updateTasks);
    }
    console.log(tasks);
    setInputText('');
  }

  return (
    <form className={style.form_task} onSubmit={(e) => formHandle(e)}>
      <input className={style.input_text}
        type="text" 
        value={inputText}
        onChange={(e)=>setInputText(e.target.value)}
      />
      <input type="submit" value="Nueva tarea" className={style.send_task_button} />
    </form>
  )
}

export default InputTasks