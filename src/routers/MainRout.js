import React, { useEffect,useState } from 'react'
import {  useNavigate } from 'react-router-dom'
import PublicRouter from './PublicRouter';
import PrivateRouter from './PrivateRouter';
import { authuser } from '../services/actions/Action';
import { useDispatch, useSelector } from 'react-redux';



const MainRout = () => {
  const dispatch = useDispatch()
  const userData = useSelector(state=>state.Index.userData)
const [data,setData] =useState(null)

  let navigate = useNavigate();

    
  useEffect(() => {
      if(Object.keys(userData).length === 0){
        if(localStorage.getItem("token")){
          dispatch(authuser())
        }else{
          setData(false)
          navigate('/login')
        }
      }else{
        setData(true)
      }
  },[userData])
  


  return (
    <>

        {
          data!==null?
           data ?
            <PrivateRouter/>
           :
            <PublicRouter/>
          :
           ""
        }
    </>
  )
}





export default MainRout
