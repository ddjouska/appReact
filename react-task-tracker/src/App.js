import {useState} from "react";
import Header from "./components/Header";
import Tasks from "./components/Tasks";


function App() {
  const [tasks, setTasks] =  useState ([
    {
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
  //Delete task
  const deleteTask = (id) => {
   setTasks(tasks.filter((task) => task.id!==id))
}
   return (
     <div className="container">
         <Header/>
         <Tasks tasks={tasks} onDelete= {deleteTask}/>
    </div>
   );
 }


export default App;
