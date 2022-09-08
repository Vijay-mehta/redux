import React, { useEffect,useState } from 'react'
import PublicRouter from './PublicRouter';
import PrivateRouter from './PrivateRouter';
import { authuser } from '../services/actions/Action';
import { useDispatch, useSelector } from 'react-redux';



const MainRout = () => {
  const dispatch = useDispatch()
  const userData = useSelector(state=>state.Index.userData)


   const userRes = useSelector(state=>state.Index.apiRes)

  console.log("userRes",userData)


const [data,setData] =useState(null)
    
  useEffect(() => {
      if(Object.keys(userData).length === 0){
        if(localStorage.getItem("token")){
          dispatch(authuser())
        }else{
          setData(false)
          // navigate('/login')
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
