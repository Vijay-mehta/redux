import React from 'react'
import {Routes,Route,Navigate} from 'react-router-dom'
import Signup from '../components/Signup'
import Login from '../components/Login'

const PublicRouter = () => {




  return (
    <>

  <Routes>
    <Route exact path="/" element={<Login/>}/>
    <Route exact path="/Login" element={<Login/>}/>
    <Route exact path="/signup" element={<Signup/>}/>
    <Route exact path="*" element={<Navigate to="/login" replace />}/>
  </Routes>
      
    </ >
  )
}

export default PublicRouter
