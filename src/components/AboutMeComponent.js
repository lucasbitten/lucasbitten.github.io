import Container from 'react-bootstrap/Container';
import Image from 'react-bootstrap/Image';

function AboutMeComponent() {
    return (
        <Container className='about-me-container'>
          <Image className='responsive-image shadow shadow-md' roundedCircle src='Photo.png'></Image>
          <Container className='d-flex flex-column about-me' style={{ marginLeft: '20px' }}>
            <strong>About me</strong>
            <p>Game programmer experienced in designing and programming game systems and tools for cross-platforms, who enjoys writing effective, well-organized code and is always eager to take on new challenges.</p>
          </Container>
        </Container>
    );
}

export default AboutMeComponent;