import React, { useState } from "react"
import axios from "axios"
import "./Addtask.css";

const Signup = () => {
      const [user, setUser] = useState({ //passes from here
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

        const Signup = () => {
        const { name, rollnumber } = user
    if(name && rollnumber){
        axios.post("http://localhost:9002/Signup", user)
        .then(res => console.log(res)) //here
    }
    else{
        alert("invalid")
    }
}


    return(
        <div class="signup">
            {console.log("User", user)}
    <form>
      <h1>Sign Up</h1>
      <label>Name</label>
      <input type="text" name="name" value={user.name} placeholder="Name" onChange={ handleChange} required/>
      <label>rollnumber</label>
      <input type="string" name="rollnumber" value={user.rollnumber} placeholder="rollnumber" onChange={ handleChange} required/>
      <input type="button" onClick={Signup} value="Sign up"/>
          <center>or</center>
      <input type="button"  value="Log in"/>
    </form>
  </div>
    )
}




export default Signup
