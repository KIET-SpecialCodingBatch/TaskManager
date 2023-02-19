import React, {useState} from "react";
import User from "./userpage";
import "./Home.css"
import axios from "axios"
import { useNavigate } from "react-router-dom";


const Signup = () => {
  const [Name,setName]=useState()
  const[Rollnumber,setRollnumber]=useState()
  

  const HandleName=(e)=>{
    setName(e.target.value)
  }
  const Handleroll=(e)=>{
    setRollnumber(e.target.value)
  }

  const Handlesubmit=()=>{
    axios.post('http://localhost:8080/add-User',{Name,Rollnumber})
    navigate("/userpage")
  }

  const navigate = useNavigate(); 
  //() => {}


  return (
    <div class="Signup">
          <h1>Signup</h1>
          <input type="name" placeholder="name"  pattern="" onChange={HandleName} required/>
          <label>rollnumber</label>
          <input type="rollnumber" placeholder="rollnumber" onChange={Handleroll} required/>
          <input type="button" onClick={Handlesubmit} value="Signup"/>
      </div>
  )
}

export default Signup;
