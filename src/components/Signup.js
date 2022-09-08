import React, { useEffect } from 'react'
import { Form, Button, Container } from 'react-bootstrap'
import { useForm } from 'react-hook-form'
import { useDispatch, useSelector } from 'react-redux'
import { restApiRes, Signupfun } from '../services/actions/Action'
import { useNavigate } from 'react-router-dom'
import Header from './Header'


const Signup = () => {

  const navigate = useNavigate()
  const dispatch = useDispatch()

  const apiRes = useSelector(state => state.Index.apiRes)



  useEffect(() => {
    console.log(apiRes.statusCode, "apiRes")
    if (apiRes.statusCode === 200) {
      dispatch(restApiRes())
      navigate('/login')
    }
  }, [apiRes])

  const { register, handleSubmit, formState: { errors } } = useForm('')

  function signupData1(formData) {

    var data = {
      "name": formData.name,
      "email": formData.email,
      "phone_no": formData.phone,
      "password": formData.password,
    }
    dispatch(Signupfun(data))
  }
  return (
    <div >
      <Header />
      <Form onSubmit={handleSubmit(signupData1)} className='mt-5'>
        <Container>
          <Form.Group className="mb-3" >
            <Form.Label>Name</Form.Label>
            <Form.Control type="text" placeholder=" Name" name="name"
              {...register("name", { required: true, pattern: /^[A-Za-z]{1,15}/, })}
            />
            {errors?.name?.type === "required" && (
              <span>This field is required</span>
            )}

            {errors?.name?.type === "pattern" && (
              <span>This is not valid name</span>
            )}
          </Form.Group>

          <Form.Group className="mb-3" >
            <Form.Label>Eamil</Form.Label><br></br>
            <span>{apiRes.message === "Email Allready taken" ? apiRes.message : ''}</span>

            <Form.Control type="email" placeholder=" Email" name="email"
              {...register("email", { required: true, pattern: /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/ })}

            />
            {errors?.email?.type === "required" && (
              <span>This field is required</span>
            )}

            {errors?.email?.type === "pattern" && (
              <span>This is not valid email</span>
            )}
            {/* <span>{apiRes.message}</span> */}

          </Form.Group>

          <Form.Group className="mb-3" >
            <Form.Label>Phone</Form.Label><br></br>
            <span>{apiRes.message === "Phone Number Allready taken" ? apiRes.message : ''}</span>

            <Form.Control type="number" placeholder="Phone Nol" name="phone"
              {...register("phone", { required: true, pattern: /^((\\+91-?)|0)?[0-9]{10}$/, })}
            />
            {errors?.phone?.type === "required" && (
              <span>This field is required</span>
            )}

            {errors?.phone?.type === "pattern" && (
              <span>10 digit is required</span>
            )}
            {/* <span>{apiRes.message}</span> */}

          </Form.Group>

          <Form.Group className="mb-3" >
            <Form.Label>password</Form.Label>
            <Form.Control type="password" placeholder="Password" name="password"
              {...register("password", { required: true })}
            />
            {errors?.password?.type === "required" && (
              <span>This field is required</span>
            )}
          </Form.Group>

          <Button variant="primary" type="submit">
            Submit
          </Button>
        </Container>
      </Form>
    </div>
  )
}

export default Signup

