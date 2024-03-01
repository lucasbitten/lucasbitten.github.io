import React from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';

const ProjectCardComponent = ({ title, companyName, projectImage, environment, description, playLink, logoSrc }) => {
  return (
    <Card className='card-component shadow shadow-md'>
      <Container style={{height: "200px", borderBottom: "solid 1px #dddddd", overflow: 'hidden'}}>
        <Card.Img className='blurred-image' src={projectImage} style={{height: `calc(100% + 20px)`, width: `calc(100% + 40px)`}}/>

        <Card.Img src={projectImage} className='project-image'/>
      </Container>
    <Card.Body>
      <Card.Title>{title}</Card.Title>
      <Card.Subtitle>
      {companyName} 
      </Card.Subtitle>
      <br/>
      <Card.Text>
      {environment} 
      </Card.Text>
      <Card.Text style={{ height: "75px", overflow: "hidden" }}>
      {description}
      </Card.Text>
      <Container className="d-flex justify-content-between card-bottom align-items-center" style={{padding: "0px"}} >
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
