import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';
import {openInNewTab} from '../utils/Utils'

function NavbarComponent() {
    return (
        <Navbar expand="md" className="d-flex flex-row bg-body-tertiary" data-bs-theme="dark" fixed='top'>
            <Container>
                <div className="d-flex flex-column d-inline">
                    <Navbar.Brand className='mb-0 brand-name' href="#projects">Lucas B. Bittencourt</Navbar.Brand>
                    <Navbar.Text className='d-flex flex-column' style={{marginTop: '-15px'}}>Game Programmer</Navbar.Text>
                </div>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ms-auto" style={{marginRight: "20px"}}>
                        <Nav.Link href="#projects">Projects</Nav.Link>
                        <Nav.Link href="#experience">Experience</Nav.Link>
                        <Nav.Link href="#education">Education</Nav.Link>
                    </Nav>
                    <div className='d-flex gap-4 d-inline social-icons-container'>
                        <a  onClick={() => openInNewTab('https://www.linkedin.com/in/lucasbbittencourt/')}>
                        <FontAwesomeIcon icon={faLinkedin} className='social-icons'/>
                        </a>
                        <a  onClick={() => openInNewTab('https://github.com/lucasbitten')}>
                        <FontAwesomeIcon icon={faGithub} className='social-icons' />
                        </a>
                    </div>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default NavbarComponent;