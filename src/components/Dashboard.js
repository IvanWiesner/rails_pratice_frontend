import React from 'react';
import { useState } from "react";
import { useHistory } from "react-router-dom"

function Dashboard() {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [loggedIn, setLoggedIn] = useState('')
    const [errors, setErrors] = useState ('')
    const history = useHistory()
    
  return (
    <div className="Dashboard">
      <p>dashboard</p>
    </div>
  )
}
export default Dashboard;