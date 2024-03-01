import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';

function NavbarComponent() {
    return (
        <Navbar expand="lg" className="d-flex flex-row bg-body-tertiary" data-bs-theme="dark" fixed='top'>
            <Container>
                <Container className="d-flex flex-column">
                    <Navbar.Brand className='mb-0' href="#projects" style={{fontSize: "2.5em", marginTop: '-5px'}}>Lucas B. Bittencourt</Navbar.Brand>
                    <Navbar.Text style={{marginTop: '-15px'}}>Game Programmer</Navbar.Text>
                </Container>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link href="#projects">Projects</Nav.Link>
                        <Nav.Link href="#experience">Experience</Nav.Link>
                        <Nav.Link href="#education">Education</Nav.Link>
                    </Nav>
                    <Container className='d-flex flex-row-reverse gap-4'>
                        <a href='https://www.linkedin.com/in/lucasbbittencourt/'>
                        <FontAwesomeIcon icon={faLinkedin} style={{ color: "#ffffff", height: '48px'}} />
                        </a>
                        <a href='https://github.com/lucasbitten'>
                        <FontAwesomeIcon icon={faGithub} style={{ color: "#ffffff", height: '48px'}} />
                        </a>
                    </Container>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default NavbarComponent;