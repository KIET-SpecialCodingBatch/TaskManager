import React from 'react';
import { useNavigate } from "react-router-dom";
import "./adminpage.css";

function Adminpage() {
    const navigate = useNavigate();



  return (
    <div style={{
        display:"flex",
        flexDirection:"row",
        justifyContent:"center"
    }}>
    <button onClick={() => {navigate("/addtask")}}>Add Task</button>
    <button onClick={() => {navigate("/history")}}>History of current task</button>
    <button onClick={() => {navigate("/feedback")}}>Feedback Responses</button>
    </div>
  )
}

export default Adminpage