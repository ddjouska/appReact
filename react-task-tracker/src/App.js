import {useState} from "react";
import Header from "./components/Header";
import Tasks from "./components/Tasks";
import AddTask from './components/AddTask';


function App() {
  const [tasks, setTasks] =  useState ([     {
         id:1,
         text: "Meeting at School",
         day:"Feb 6th at 1:30pm",
       reminder: true
    },
     {
         id:2,
        text: "Launch at School",
         day:"Feb 7th at 6:30pm",
        reminder: true
    } ,{
        id:3,
         text: "Dinner at School",
         day:"Jan 8th at 9:30pm",
         reminder: false
     }
 ])

// Add task
const addTask = (task) =>{
const id= Math.floor(Math.random()* 10000) +1
const newTask = {id, ...task}
setTasks([...tasks, newTask])
}



   //Delete task
  const deleteTask = (id) => {
   setTasks(tasks.filter((task) => task.id!==id))
 }

// Toggle reminder

const toggleReminder = (id) => {
  setTasks(tasks.map((task) => task.id === id ? { ...task, reminder: !task.reminder } : task))
}
   return (
     <div className="container">
         <Header/>
         <AddTask  onAdd={addTask}/>
         <Tasks tasks={tasks} onDelete= {deleteTask} onToggle ={toggleReminder}/>
    </div>
   );
 }


export default App;
