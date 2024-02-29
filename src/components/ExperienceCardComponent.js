import React from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';

const ExperienceCardComponent = ({ title, companyName, time, place, description, logoSrc }) => {
    return (
        <Card>
            <Card.Body>
                <Container className='d-flex' style={{padding: "0px"}}>
                    <Container style={{padding: "0px"}}>
                        <Card.Title>{title}</Card.Title>
                        <Card.Subtitle>
                            {time}
                        </Card.Subtitle>
                    </Container>
                    <Card.Img variant="top" src={logoSrc} alt="Company Logo" style={{width: "48px", height: "48px" }} />

                </Container>
                <br/>
                <Card.Text>
                    {place}
                </Card.Text>
                <Card.Text>
                    {description}
                </Card.Text>
            </Card.Body>
        </Card>

    );
};

export default ExperienceCardComponent;
