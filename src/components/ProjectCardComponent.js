import React from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import { useDarkMode } from '../DarkModeContext';

const ProjectCardComponent = ({ title, companyName, projectImage, environment, description, playLink, logoSrc }) => {
  const { isDarkMode, toggleDarkMode } = useDarkMode();

  return (
    <Card className='project-card-component shadow shadow-md'>
      <Container className='project-card-image-container'>
        <Card.Img className='blurred-image' src={projectImage} style={{height: `calc(100% + 20px)`, width: `calc(100% + 40px)`}}/>

        <Card.Img src={projectImage} className='project-image'/>
      </Container>
    <Card.Body className='project-card-body'>
      <Card.Title className='card-text project-card-title'>{title}</Card.Title>
      <Card.Subtitle className='card-text'>
      {companyName} 
      </Card.Subtitle>
      <br/>
      <Card.Text>
      {environment} 
      </Card.Text>
      <Card.Text style={{ height: "75px", overflow: "hidden" }}>
      {description}
      </Card.Text>
      <Container className="d-flex justify-content-between project-card-bottom align-items-center" style={{padding: "0px"}} >
          <img className='company-logo' src={logoSrc} alt="Company Logo" />
          {playLink && playLink.trim() !== '' && (
            <Button variant={isDarkMode ? 'dark' : 'outline-secondary'} href={playLink}>Play</Button>
          )}
      </Container>
    </Card.Body>
  </Card>

  );
};

export default ProjectCardComponent;
