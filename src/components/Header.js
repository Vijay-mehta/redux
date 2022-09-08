import React, { useEffect, useState } from 'react'
import { Navbar, Container, Nav, Dropdown, Button } from 'react-bootstrap'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import './style.css'



const Header = () => {

  const userData = useSelector(state=>state.Index.userData)

  const [isNotLoggedIn, setIsNotLoggedIn] = useState(false)


  const removeToken = () => {
    localStorage.removeItem("token");
  };


  useEffect(() => {
    if (localStorage.getItem('token')) {
      const token = (localStorage.getItem('token'));
      setIsNotLoggedIn(token)
    }
  }, [])
  return (
    <div>

      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand >Navbar with text</Navbar.Brand>
          <Navbar.Toggle />

          {
            !isNotLoggedIn ? (
              <Navbar.Collapse className="justify-content-end">
                <Navbar.Text>
                  <Nav.Item>
                    <Link to="/Login">
                      <Button variant="outline-light" size="md">
                        Login
                      </Button>
                    </Link>
                  </Nav.Item>
                </Navbar.Text>
              </Navbar.Collapse>
            ) : (
              <Dropdown className="menuDrop">

                <Dropdown.Toggle variant="success" id="dropdown-basic">

                  {userData?.name}

                </Dropdown.Toggle>
                <Dropdown.Menu>
                  <Dropdown.Item href="passwordchange"> Change password
                  </Dropdown.Item>
                  <Dropdown.Item onClick={removeToken} href="login"> Logout 
                  
                  </Dropdown.Item>
                  {/* <Dropdown.Item > <Link to="/">Logout</Link> </Dropdown.Item> */}
                </Dropdown.Menu>

              </Dropdown>
            )
          }



        </Container>
      </Navbar>
    </div>
  )
}



export default Header



