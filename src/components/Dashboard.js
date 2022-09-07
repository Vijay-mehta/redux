import React, {  useState } from 'react'
import { useDispatch, useSelector  } from 'react-redux'
import Header from './Header'
import {Card,Button,Form,Container} from 'react-bootstrap'
import { updateProfile } from '../services/actions/Action'

const Dashboard = (props) => {

  const dispatch = useDispatch()
  const userData = useSelector(state=>state.Index.userData)


  

  console.log(userData,"userData")

  const [updateName, setUpdateName] = useState();
  const [updateUser1, setUpdateUser1] = useState();
  const [updateUser2, setUpdateUser2] = useState();

  const [disImage, setDisImage] = useState("");
  const [image, setImage] = useState("");

    //  console.log(props,"123")
    // useEffect(()=>{
    //   window.location.reload();
    // },[userData])



    const IconImage = (event) => {
      if (event.target.files[0]) {
        let file = event.target.files[0];
        let display = URL.createObjectURL(file);
        setDisImage(display);
        setImage(event.target.files[0]);
      }
    }
  
  
    const renderImage = (image) => {
      return (
        <img
          style={{ width: "70%", height: "100" }}
          src={image}
          key={image}
          alt="userimage"
        />
      );
    };



  const handleClick = (e) => {

    switch (e.target.name) {
      case "name":
     return   setUpdateName(e.target.value)

      case "email":
      return       setUpdateUser1(e.target.value)

      case "phone" :
      return       setUpdateUser2(e.target.value)
 
      default:
        break;
    }

 
  };


    function userProfileDatta  ()  {
      var data = new FormData();
      data.append("name", updateName);
      data.append("email", updateUser1);
      data.append("phone_no", updateUser2);
      data.append("pro_image", image);

      dispatch(updateProfile(data))

      // props.updateProfile(data).then(()=>{
      //   window.location.reload();

      // })
    }  
  
    
  return (
    <>
        <Header/>
        
        <Container style={{ width: '25rem' }}>

<Card className='mt-5'>
  <Card.Title className='text-center pt-3'>User Profile </Card.Title>
  <Card.Body className='cardData'>
       


      <Form>


      <ul>

<li>
  <input type="file" onChange={IconImage} />
  {!disImage ? (
    <img alt='userimage' style={{ width: "70%", height: "100" }}
      src={userData?.pro_image} />
  ) : (
    renderImage(disImage)
  )}
</li>
</ul>



      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Name</Form.Label>
        <Form.Control type="name" name="name" defaultValue={userData?.name} onChange={handleClick} />

      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Email</Form.Label>
        <Form.Control type="email"  name="email" defaultValue={userData?.email} onChange={handleClick} />

      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Phone No.</Form.Label>
    
        <Form.Control type="phone"  name="phone" defaultValue={userData?.phone_no} onChange={handleClick} />

      </Form.Group>
      <Button variant="primary" type="button" onClick={userProfileDatta}>
        Submit
      </Button>
    </Form>
       

      </Card.Body>
    </Card>
    </Container>
    </>
  )
}

// const mapStateToProps = state=>({
//   data:state.Index.userData
//   })

//   const mapDispatchToProps ={
//     updateProfile:updateProfile
//   }
  


export default Dashboard


// export default Dashboard
