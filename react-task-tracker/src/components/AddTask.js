import React, { useState } from 'react'

const AddTask = () => {
    const [text, setText] = useState("")
    const [day, setDay] = useState("")
    const [reminder, setReminder] = useState(false)
  return (
    <form className='add-form'>
      <div className='form-control'>
        <label>Task</label>
        <input type="text" placeholder="Add Task" value={text} onChange={(e) =>setText(e.target.value)}></input>
      </div>
      <div className='form-control'>
        <label>Day & Time</label>
        <input type="text" placeholder="Add day and time"value={day} onChange={(e) =>setDay(e.currentTarget.checked)}></input>
      </div>
      <div className='form-control form-control-check'>
        <label>Set Reminder</label>
        <input type="checkbox" value={reminder} onChange={(e) =>setReminder(e.target.value)}></input>
      </div>
      <input type="submit" value ="Save Task" className='btn btn-black'></input>
    </form>
  )
}

export default AddTask
