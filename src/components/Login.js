import React from 'react'
import {Form,Button,Container} from 'react-bootstrap'
import {useForm} from 'react-hook-form'
import {  useDispatch, useSelector } from 'react-redux'
import {Link} from 'react-router-dom'
import { loginfun } from '../services/actions/Action'
import './style.css'


const Login = () => {

  const dispatch = useDispatch()
  // const userData = useSelector(state=>state.Index.userData)
  const userError = useSelector(state=>state.Index.apiRes)


  console.log(userError.message)

  const {register,handleSubmit,formState:{errors}} = useForm();

  function loginData  (formData)  {
      
    var data = {
      "email":formData.email,
      "password":formData.password
    };
    dispatch(loginfun(data))
}

  return (
    <div className='mt-5'>
       <Form onSubmit={handleSubmit(loginData)}>
       <Container>
       
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email </Form.Label>
        <Form.Control type="email" placeholder="Enter email" name="name"
        {...register("email",{required:true})}
        />
        {errors?.email?.type === "required" &&(
          <span>This field is required</span>
        )}
      {/* <span>{userError.message}</span>  */}
      <span>{userError.message === "Authorization failed" ? userError.message : ''}</span>
 
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" placeholder="Password" 
        name="password" {...register("password",{required:true})}
        />
        {errors?.password?.type === "required" &&(
          <span>This field is required</span>
        )}
      </Form.Group>

      <Button variant="primary" type="submit">
        Submit
      </Button>
      <span className='signupButton'><Link to='/signup' >Signup</Link></span>   
      </Container>
    </Form>
 
    </div>
  )
}

export default Login

