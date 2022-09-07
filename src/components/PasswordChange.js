import React from 'react'
import {Form,Button, Container} from 'react-bootstrap'
import {useForm} from 'react-hook-form'
import Header from './Header'
import { PasswordUpdate } from '../services/actions/Action'
import { useDispatch} from 'react-redux'

const PasswordChange = (props) => {

  const dispatch= useDispatch()

  

    const {register,handleSubmit} =useForm('')



    function changepassword  (formData)  {
        
      
        var data = {
          "old_pass":formData.old_pass,
          "new_pass":formData.new_pass,
          "con_pass":formData.con_pass

        };
        dispatch(PasswordUpdate(data))
    }

  return (
    <div>
        <Header/>

<Form onSubmit={handleSubmit(changepassword)}>
<Container>
      <Form.Group className="mb-3 mt-5" controlId="formBasicEmail">
        <Form.Label>Old Password</Form.Label>
        <Form.Control type="text" placeholder="Old Password"  name="old_pass"
        {...register("old_pass",{required:true})}
        />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>New Password</Form.Label>
        <Form.Control type="text" placeholder="New Password"  name="new_pass"
          {...register("new_pass",{required:true})}
        />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>confirm Password</Form.Label>
        <Form.Control type="password" placeholder="New Password" name="con_pass"
         {...register("con_pass",{required:true})}
        />
      </Form.Group>
      <Button variant="primary" type="submit">
        Submit
      </Button>
      </Container>
    </Form>
  
      
    </div>
  )
}

// const mapStateToProps = (state)=>({
//     userData:state.Index.userData
//   })
  
//   const mapDispatchToProps ={
//     PasswordUpdate:PasswordUpdate
//   }
  
  
  export default PasswordChange

// export default PasswordChange
