import React,{useEffect,useContext} from 'react';
import {BrowserRouter,Routes, Route} from 'react-router-dom'
import Signup from './Pages/Signup'
import './App.css';
import Home from './Pages/Home';
import LoginPage from './Pages/Login';
import CreatePage from './Pages/Create';
import ViewPost from './Pages/ViewPost';
import { AuthContext, FirebaseContext } from './store/Context';
import Post from './store/PostContext';

/**
 * ?  =====Import Components=====
 */

function App() {

  const {setUser} = useContext(AuthContext)
  const {firebase} = useContext(FirebaseContext)

  useEffect(()=>{
    firebase.auth().onAuthStateChanged((user)=>{
      setUser(user)
    })
  })

  return (
    <div>
      <Post>

      <BrowserRouter>
      <Routes>
      <Route Component={Home} path='/'/> 
      <Route Component={Signup} path='/signup'/>
      <Route Component={LoginPage} path='/login'/>
      <Route Component={CreatePage} path='/sell'/>
      <Route Component={ViewPost} path='/view'/>
      </Routes>
      </BrowserRouter>
      
      </Post>
    </div>
  );
}

export default App;
