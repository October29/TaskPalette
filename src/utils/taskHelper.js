import { v4 as uuidv4 } from 'uuid';

// Función para agregar una nueva tarea
const addTask = (tasksStored, newTask) => {
  const newTaskObject = {
    id: uuidv4(),
    taskName: newTask,
    description: "",
    stage: "pendiente",
    date: new Date(),
    colorName:"green",
    colorHEX:"#60D394"
  };
  // Agregar la nueva tarea y ordenar
  return [...tasksStored, newTaskObject];
};

// Función para actualizar el estado de una tarea (toggle entre "complete" y "pendiente")
const completeTask = (storedTasks, targetTaskID, setTasks) => {
  const updatedTasks = storedTasks.map(task => {
    if (task.id === targetTaskID) {
      return {
        ...task,
        stage: task.stage === "complete" ? "pendiente" : "complete" // Cambia el estado
      };
    }
    return task; // Las tareas que no coincidan se devuelven sin cambios
  });
  // Actualiza el estado con la lista de tareas modificada
  setTasks(updatedTasks);
  console.log(updatedTasks);
};

export { addTask, completeTask };