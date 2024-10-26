import { createContext, useState } from "react";

const TaskContext = createContext();

const TaskProvider = ({ children }) => {

  // Lista de tareas almacenadas
  const [tasks, setTasks] = useState([]);

  // Lista de tareas almacenadas
  const [colorTasks, setColorTask] = useState([
    { colorName:"green", colorHEX:"#60D394" },
    { colorName:"blue", colorHEX:"#3f88c5" },
    { colorName:"purple", colorHEX:"#9a48d0" },
    { colorName:"orange", colorHEX:"#f9a03f" },
    { colorName:"red", colorHEX:"#e84855" }
  ]);


  // Estado del input de tareas
  const [inputText, setInputText] = useState("");



  // Función para ordenar las tareas
  const sortTasks = (tasksArray) => {
    // Separar tareas en pendientes y completadas
    const pendingTasks = tasksArray.filter(
      (task) => task.stage === "pendiente"
    );
    const completedTasks = tasksArray.filter(
      (task) => task.stage === "complete"
    );

    // Ordenar pendientes de más nueva a más antigua
    const sortedPending = pendingTasks.sort(
      (a, b) => b.date.getTime() - a.date.getTime()
    );

    // Ordenar completadas de más antigua a más nueva
    const sortedCompleted = completedTasks.sort(
      (a, b) => a.date.getTime() - b.date.getTime()
    );

    // Concatenar los dos arrays: primero pendientes, luego completadas
    return [...sortedPending, ...sortedCompleted];
  };

  return (
    <TaskContext.Provider
      value={{
        tasks,
        setTasks,
        inputText,
        setInputText,
        sortTasks,
        colorTasks,
        setColorTask
      }}
    >
      {children}
    </TaskContext.Provider>
  );
};

export { TaskContext, TaskProvider };
