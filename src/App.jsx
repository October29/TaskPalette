import './App.css'
import Header from './components/header/Header'
import InputTasks from './components/intputTasks/InputTasks'
import TasksList from './components/tasksList/TasksList'
import { TaskProvider } from './context/TasksContext'

function App() {

  return (
    <TaskProvider>
      <InputTasks />
      <TasksList />
    </TaskProvider>
  )
}

export default App
