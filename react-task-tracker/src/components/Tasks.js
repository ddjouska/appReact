import {useState} from "react";

const Tasks = () => {
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
    return (
   <>
    {tasks.map((task) => (<h3 key={task.id}>{task.text}</h3>))}</>
  )
}

export default Tasks
