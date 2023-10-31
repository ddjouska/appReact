import React, { useEffect } from 'react';
import Header from "./components/Header";
import Tasks from './components/Tasks';
import { useState } from "react"
import AddTask from './components/AddTask';


const App = () => {


  const [showAddTask, setShowAddTask] = useState(false)

  const [tasks, setTasks] = useState([])

  useEffect(() => {


    const getTasks = async () => {

      const tasksFromServer = await fetchTasks()
      setTasks(tasksFromServer)
    }
    getTasks()

  }, [])

  // Fetch Tasks

  const fetchTasks = async () => {

    const res = await fetch('http://localhost:8081/api/v1/tasks')
    const data = await res.json()
    return data

  }

  // Delete Task

  const deleteTask = (id) => {

    const deleteTask = async () => {

      await fetch(`http://localhost:8081/api/v1/tasks/delete/${id}`, {
        method: 'DELETE',
      })

    }

    deleteTask()

    setTasks(tasks.filter((task) => task.id !== id))


  }

  // Toggle Reminder

  const toggleReminder = (id) => {
    setTasks(tasks.map((task) => task.id === id ? { ...task, reminder: !task.reminder } : task))
  }


  // Add Task

  const addTask = async (task) => {

    const res = await fetch('http://localhost:8081/api/v1/tasks/create', {
      method: 'POST',
      headers: {
        'Content-type': 'application/json'
      },
      body: JSON.stringify(task)

    })

    const data = await res.json()

    setTasks([...tasks, data])


  }


  return (

    <div className="container">

      <Header

        onAdd={() => setShowAddTask(!showAddTask)}
        showAdd={showAddTask}

      />
      {
        showAddTask &&
        <AddTask onAdd={addTask}
        />}
      <Tasks tasks={tasks} onDelete={deleteTask} onToggle={toggleReminder} />


    </div>

  );
}



export default App;
