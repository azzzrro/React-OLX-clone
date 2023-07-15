import React, { useState,useContext } from 'react';
import {FirebaseContext} from '../../store/Context'
import Logo from '../../olx-logo.png';
import './Login.css';
import {useNavigate} from 'react-router-dom'


function Login() {

  const[email,setEmail] = useState('')
  const[password,setPassword] = useState('')
  const {firebase} = useContext(FirebaseContext)

  const navigate = useNavigate()

  const handleLogin =(event)=>{
    event.preventDefault()
    firebase.auth().signInWithEmailAndPassword(email,password).then(()=>{
      navigate('/')
    }).catch((error)=>{
      alert(error.message)
    })
  }

  return (
    <div>
      <div className="loginParentDiv">
      <div className='loginImg'>
        <img width="200px" height="200px" src={Logo}></img>
        </div>
        <form onSubmit={handleLogin} >
          <label htmlFor="fname">Email</label>
          <br />
          <input
            className="input"
            type="email"
            id="fname"
            name="email"
            value={email}
            onChange={(event)=>{
              setEmail(event.target.value)
            }}
          />
          <br />
          <label htmlFor="lname">Password</label>
          <br />
          <input
            className="input"
            type="password"
            id="lname"
            name="password"
            value={password}
            onChange={(event)=>{
              setPassword(event.target.value)
            }}
          />
          <br />
          <br />
          <button>Login</button>
        </form>
        <a>Signup</a>
      </div>
    </div>
  );
}

export default Login;
