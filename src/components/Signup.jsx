import axios from 'axios'
import React, { useState } from 'react'

const Signup = () => {
    const [input, setInput] = new useState(
        {
            "name": "",
            "phone": "",
            "email": "",
            "password": "",
            "cnfpass": ""
        }
    )

    const inputHandler = (event) => {
        setInput({ ...input, [event.target.name]: event.target.value })
    }

    const readValue = () => {
        if (input.password == input.cnfpass) {
            console.log(input)

            let newInput = {
                "name": input.name,
                "phone": input.phone,
                "email": input.email,
                "password": input.password
            }
           

            axios.post("http://localhost:3001/signUp", newInput).then(
                (response) => {
                    console.log(response.data)
                    if (response.data.status =="Success")
                         {
                        alert("Registered succesfully")
                        setInput({  "name": "",
                            "phone": "",
                            "email": "",
                            "password": "",
                            "cnfpass": ""})
                    }
                     else 
                     {
                        alert("E-mail already exists")
                       setInput( {  "name": "",
                            "phone": "",
                            "email": "",
                            "password": "",
                            "cnfpass": "" })
                    }
                }).catch(
                    (error)=>{
                        console.log(error)
                    }
                )
        } 
        else 
        {
            alert("Password and confirm password does not match")
        }
    }
    return (
        <div>
            <div className="container">
                <div className="row">
                    <div className="col col-12 col-sm-12 col-md-12">
                        <div className="row g-3">
                            <div className="col col-12 col-sm-12 col-md-12">
                                <label htmlFor="" className="form-label">Name</label>
                                <input type="text" className="form-control" name='name' value={input.name} onChange={inputHandler} />
                            </div>
                            <div className="col col-12 col-sm-12 col-md-12">
                                <label htmlFor="" className="form-label">Phone</label>
                                <input type="text" className="form-control" name='phone' value={input.phone} onChange={inputHandler} />
                            </div>

                            <div className="col col-12 col-sm-12 col-md-12">
                                <label htmlFor="" className="form-label">E-mail</label>
                                <input type="text" className="form-control" name='email' value={input.email} onChange={inputHandler} />
                            </div>
                            <div className="col col-12 col-sm-12 col-md-12">
                                <label htmlFor="" className="form-label">Password</label>
                                <input type="password" className="form-control" name='password' value={input.password} onChange={inputHandler} />
                            </div>
                            <div className="container">
                                <div className="row">
                                    <div className="col col-12 col-sm-12 col-md-12">
                                        <label htmlFor="" className="form-label">Confirm Password</label>
                                        <input type="password" className="form-control" name='cnfpass' value={input.cnfpass} onChange={inputHandler} />
                                    </div>
                                </div>
                            </div>
                            <div className="col col-12 col-sm-12 col-md-12">
                                <button onClick={readValue} className="btn btn-success">Register</button>
                            </div>
                            <div className="col col-12 col-sm-12 col-md-12">
                                <a href="/" className="btn btn-primary">Back to login</a>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default Signup
