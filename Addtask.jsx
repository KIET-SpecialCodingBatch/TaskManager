import React from 'react'
import "./Addtask.css";

function Addtask() {
  return (
    <div>
        <h1>Assign Task</h1>
        <form>
          <label>Taskname:
          <input type="text"  required/>
          </label>
          <label>Description:
          <textarea  required/>
          </label>
          <label>AssignedDate:
          <input type="Date"/>
          </label>
          <label>DueDate:
          <input type="Date"/>
          </label>
          <br/>
          <button type="submit">Submit</button>
        </form>
                 
    </div>
  )
}

export default Addtask