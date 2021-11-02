import React from 'react';
import { useState } from "react";
import { useHistory } from "react-router-dom"

function Dashboard() {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [loggedIn, setLoggedIn] = useState('')
    const [errors, setErrors] = useState ('')
    const history = useHistory()

    function onSubmit(e){
        e.preventDefault()
        const login = {
            email: email,
            password
        }
        // let API_PATH 
        // loggedIn?API_PATH = 'session' : API_PATH = "users"
        fetch(`/login`, {
            method:'POST',
            headers:{'Content-Type': 'application/json'},
            body:JSON.stringify(login)
        })
        .then(res => res.json())
        .then(json => {
            console.log(json)
            if(json.error){
                setErrors(json.error)
            }else {
                setLogin(true)
                console.log(setLogin)
                history.push("/")
            }
        })
    }
  return (
    <div className="Dashboard">
      <p>dashboard</p>
    </div>
  )
}
export default Dashboard;