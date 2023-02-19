import "./main.css"
import React, { useState } from "react"
import axios from "axios"
import {  useNavigate } from "react-router-dom"
const Main=()=>{
    const navigate=useNavigate()
      const Handleuserpage=()=>{
       
        navigate('/userlogin')
      }
    const Handleadminpage=()=>{
        navigate('/adminlogin')
      }
     
    return(
        <> 
        <div >
            <button>Home</button>
            <button>About</button>
            <button>Queries</button>
            </div>
                <button onClick={Handleuserpage}>User login/</button>
                <button onClick={Handleadminpage}>Admin login</button>
                
           
        </>
    );
}

export default Main;