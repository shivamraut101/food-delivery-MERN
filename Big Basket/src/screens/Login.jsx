import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

export const Login = () => {

    const navigate = useNavigate()

    const [credentials, setCredintials] = useState({
        email:"",
        password:""
    })

    const handleSubmit = async(e) =>{
        e.preventDefault();
        const response = await fetch("http://localhost:5000/api/loginuser",{
            method:'POST',
            headers:{
                'Content-Type':'application/json'
            },
            body:JSON.stringify({
                email:credentials.email,
                password:credentials.password,
            })
        })

        const json = await response.json()
        console.log(json);
        if(!json.success){
            alert("Enter Valid Credintials")
        }else{
            alert("Login Succesfully")
            navigate("/")
        }

        
    }

    const handleOnChange = (e) =>{
        const {name, value} = e.target
        setCredintials((prevCredinitails)=>({
            ...prevCredinitails,
            [name]:value
        }))
    }

  return (
    <div className="container">
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="Email" className="form-label">
            Email address
          </label>
          <input
            type="email"
            className="form-control"
            id="Email"
            aria-describedby="emailHelp"
            name="email"
            value={credentials.email}
            onChange={handleOnChange}
          />
          <div id="emailHelp" className="form-text">
            We'll never share your email with anyone else.
          </div>
        </div>
        <div className="mb-3">
          <label htmlFor="Password" className="form-label">
            Password
          </label>
          <input
            type="password"
            className="form-control"
            id="Password"
            name="password"
            value={credentials.password}
            onChange={handleOnChange}
          />
        </div>
        
        <button type="submit" className="m-3 btn btn-sucess">
          Login
        </button>
        <Link to={"/createuser"} className="m-3 btn btn-danger">Register</Link>
      </form>
    </div>
  )
}
