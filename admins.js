import React, {useState} from "react"
import axios from "axios"
import { useNavigate } from "react-router-dom"

const Admin = () => {
  const [user, setUser] = useState({
    name: "",
    rollnumber: "",
 })
 const handleChange = e => {
     console.log(e.target)
     const { name, value } = e.target
     setUser({
         ...user,
         [name]: value
     })
 }

const Login = () => {
 const { name, rollnumber } = user
 if(name && rollnumber){

 }
 axios.post("http://localhost:9002/Login", user)
}

const navigate = useNavigate();

  return(
      <div class="login">
       {console.log(user)}
          <form>
          <h1>Login</h1>
            <label>Email</label>
            <input type="email" value={user.email} placeholder="Email" pattern=",+@globex\.com" onChange={ handleChange} required/>
            <label>password</label>
            <input type="password" value={user.password} placeholder="password" onChange={ handleChange} required/>
            <input type="button" onClick={() => {navigate("/adminpage")}} value="Log in"/>
          </form>
          </div>
  )

  }

  export default Admin;
