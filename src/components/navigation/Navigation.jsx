import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import { Link } from 'react-router-dom';


import '../../styles/navigation.css'


function Navigation() {
    return (

    <Navbar data-bs-theme="dark" className="navbar">
        <Container>
          {/* <Nav className="me-auto">
            <Nav.Link href="/" className="nav" id="name">Aavishkar Gautam</Nav.Link>
            <Nav.Link href="/about" className="nav">About Me</Nav.Link>
            <Nav.Link href="/blogs" className="nav">Blog</Nav.Link>
            <Nav.Link href="#projects" className="nav">Projects</Nav.Link>
            <Nav.Link href="#contacts" className="nav">Contact Me</Nav.Link>
          </Nav> */}
          <Nav classname="me-auto">
            <Link to="/personalWebsite" className="nav" id="name">Aavishkar Gautam</Link>
            <Link to="/personalWebsite/about" className="nav">About Me</Link>
            <Link to="/personalWebsite/blogs" className="nav">Blog</Link>
            <Link to="#projects" className="nav">Projects</Link>
            <Link to="#contacts" className="nav">Contact Me</Link>
          </Nav>
        </Container>
    </Navbar>
        
    )
}

export default Navigation;