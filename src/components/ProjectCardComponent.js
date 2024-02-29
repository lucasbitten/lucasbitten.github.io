import React from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';

const ProjectCardComponent = ({ title, time, projectImage, environment, description, playLink, logoSrc }) => {
  return (
    <Card className='card-component'>
      <Container style={{height: "200px", backgroundColor: "#777777"}}>
        <Card.Img variant="top" src={projectImage} style={{height: "100%", objectFit: 'contain'}} />
      </Container>
    <Card.Body>
      <Card.Title>{title}</Card.Title>
      <Card.Subtitle>
      {time} 
      </Card.Subtitle>
      <br/>
      <Card.Text>
      {environment} 
      </Card.Text>
      <Card.Text style={{ height: "75px", overflow: "hidden" }}>
      {description}
      </Card.Text>
      <Container className="d-flex justify-content-between bottom align-items-center">
          <img width="48" height="48" src={logoSrc} alt="Company Logo" />
          {playLink && playLink.trim() !== '' && (
            <Button variant="outline-secondary" href={playLink}>Play</Button>
          )}
      </Container>
    </Card.Body>
  </Card>

  );
};

export default ProjectCardComponent;
