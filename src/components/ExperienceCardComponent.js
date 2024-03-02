import React from 'react';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';

const ExperienceCardComponent = ({ title, companyName, time, place, description, logoSrc }) => {

    return (
        <Card className='experience-card'>
            <Card.Body>
                <Container className='d-flex' style={{ padding: "0px" }}>
                    <Container style={{ padding: "0px" }}>
                        <Card.Title className='card-text'>
                            {title}
                            {companyName !== '' ? <span> - {companyName}</span> : null}</Card.Title>
                        <Card.Subtitle style={{ fontSize: "0.9em", color: "#999", marginTop: "4px"}}>
                            {time}<br />
                            {place}
                        </Card.Subtitle>
                    </Container>
                    <Card.Img variant="top" src={logoSrc} alt="Company Logo" style={{ width: "48px", height: "48px" }} />

                </Container>
                <br />

                <Card.Text>
                    {description}
                </Card.Text>
            </Card.Body>
        </Card>
    );
};

export default ExperienceCardComponent;
