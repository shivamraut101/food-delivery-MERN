import React, { useState } from "react";
import { Link } from "react-router-dom";

export const Signup = () => {

    const [credentials, setCredintials] = useState({
        name:"",
        email:"",
        password:"",
        geolocation:""
    })

    const handleSubmit = async(e) =>{
        e.preventDefault();
        const response = await fetch("http://localhost:5000/api/createuser",{
            method:'POST',
            headers:{
                'Content-Type':'application/json'
            },
            body:JSON.stringify({
                name:credentials.name,
                email:credentials.email,
                password:credentials.password,
                location:credentials.geolocation
            })
        })

        const json = await response.json()
        console.log(json);
        if(!json.success){
            alert("Enter Valid Credintials")
        }else{
            alert("Registered Succesfully")
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
          <label htmlFor="Name" className="form-label">
            Name
          </label>
          <input
            type="text"
            className="form-control"
            id="Name"
            name="name"
            value={credentials.name}
            onChange={handleOnChange}
          />
        </div>
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
        <div className="mb-3">
          <label htmlFor="Address" className="form-label">
            Address
          </label>
          <input
            type="text"
            className="form-control"
            id="Address"
            name="geolocation"
            value={credentials.geolocation}
            onChange={handleOnChange}
          />
        </div>
        {/* <div className="mb-3 form-check">
          <input
            type="checkbox"
            className="form-check-input"
            id="consentCheckBox"
          />
          <label className="form-check-label" htmlFor="consentCheckBox">
            Check me out
          </label>
        </div> */}
        <button type="submit" className="m-3 btn btn-sucess">
          Submit
        </button>
        <Link to={"/login"} className="m-3 btn btn-danger">Already a User</Link>
      </form>
    </div>
  );
};
