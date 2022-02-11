import React from "react";
import {
  BrowserRouter,
  Routes,
  Route,
  Link,
} from 'react-router-dom';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Container from 'react-bootstrap/Container';
import { ThemeContext, themes } from 'contexts/ThemeContext';
import ToggleDark from 'components/toggleDark';
import { Button, InputGroup } from 'reactstrap';


const NavBar = () => {
  const [darkMode, setDarkMode] = React.useState(true);

  return (
  
  <Navbar bg="light" expand="lg">
  <Container>
    <Navbar.Brand href="">NAVBAR</Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      
      <Nav className="me-auto">
        <Nav.Link to="/"><Link to="/">Home</Link></Nav.Link>
        <Nav.Link to="/about"><Link to="/about">About</Link></Nav.Link>
        <Nav.Link to="/works"><Link to="/works">Works</Link></Nav.Link>
        <InputGroup>
        <ThemeContext.Consumer>
        {({ changeTheme }) => (
              <Button
                color="blue"
                onClick={() => {
                  setDarkMode(!darkMode);
                  changeTheme(darkMode ? themes.light : themes.dark);
                }}
              >
                <i className={darkMode ? 'fas fa-sun' : 'fas fa-moon'}></i>
                <span className="d-lg-none d-md-block">Switch mode</span>
              </Button>
            )}
        </ThemeContext.Consumer>
      </InputGroup>
        
      </Nav>
    </Navbar.Collapse>
  </Container>
  </Navbar>
)
  }

export default NavBar;