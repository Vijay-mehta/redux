import React from 'react'
import Dashboard from '../components/Dashboard'
import {Routes,Route, Navigate} from 'react-router-dom'
import PasswordChange from '../components/PasswordChange';


const PrivateRouter = () => {
  
  return (
    <>
  
<Routes>
    <Route exact path="/" element={<Dashboard/>}/>
    <Route exact path="/dashboard" element={<Dashboard/>}/>
    <Route exact path="/passwordchange" element={<PasswordChange/>}/>
    {/* Handel login page in private route */}
    <Route exact path="/login" element={<Navigate to="/dashboard" replace />}/>
    <Route exact path="/signup" element={<Navigate to="/" replace />}/>

  </Routes>
    </>
  )
}

export default PrivateRouter
