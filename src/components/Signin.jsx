import axios from 'axios'
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const Signin = () => {

    const navigate= useNavigate()
    const [input, setInput] = useState(
        { "email": "", "password": "" }
    )
    const inputHandler = (event) => {
        setInput({ ...input, [event.target.name]: event.target.value })
    }

    const readValues =() => {
        console.log(input)

        axios.post("http://localhost:3001/signin",input).then(
            (response) => {
                console.log(response.data)
                if (response.data.status == "Incorrect password") 
                    {
                    alert("Incorrect password")

                }
                else if (response.data.status == "Invalid E-mail id") 
                    {
                    alert("Invalid E-mail id")
                }
                else 
                {
                  let token=response.data.token
                  let userId=response.data.userId
                  console.log(token) 
                  console.log(userId) 
                  sessionStorage.setItem("token",token)
                  sessionStorage.setItem("userId",userId)  
                  
                  navigate("/create")
                }
            }
        ).catch(
            (error) => {
                console.log(error)
            })
    }
    return (
        <div>
            <div className="container">
                <div className="row">
                    <div className="col col-12 col-sm-12 col-md-12"></div>
                    <div className="row g-3">
                        <div className="col col-12 col-sm-12 col-md-12">
                            <label htmlFor="" className="form-label">Email id</label>
                            <input type="text" className="form-control" name='email' value={input.email} onChange={inputHandler} />
                        </div>
                        <div className="col col-12 col-sm-12 col-md-12">
                            <label htmlFor="" className="form-label">Password</label>
                            <input type="password" className="form-control" name='password' value={input.password} onChange={inputHandler} />
                        </div>
                        <div className="col col-12 col-sm-12 col-md-12">
                            <button onClick={readValues} className="btn btn-success">Signin</button>
                        </div>
                        <div className="col col-12 col-sm-12 col-md-12">
                            <a href="/signUp" className="btn btn-secondary">New user</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Signin
