import React from 'react';
import { Container, ListGroup } from 'react-bootstrap';
import SectionHeaderComponent from './SectionHeaderComponent';
import ExperienceCardComponent from './ExperienceCardComponent';

const EducationsComponent = () => {
  const educationList = [
    {
      title: "Game Programming Adv. Diploma - Centennial College",
      time: "2019 - 2021",
      place: "Toronto, Canada",
      companyName: "",
      description: "Java Programming (Multithreading, Lambda, Collections, etc.) C# and ASP.Net Programming 3 (Lambda, Delegates, Collections, Multithreading, WPF, Entity Framework, etc.) Android Applications Development (Intents, Activities, Visual Components, etc) Assets for Game Programming (3D Modeling, 2D Sprite, Animations, etc) Game Programming (Finite State Machines (FSMs), Artificial Intelligence (AI), Particle Systems (PS), and Multi-Player Networked Games (MPNGs)) Practical Game Design (Design Integration; Control Schemes; Game Balancing; Gameplay Mechanics; Player Interaction)",
      logoSrc: "https://media.licdn.com/dms/image/D560BAQGDFaZK89FUAQ/company-logo_100_100/0/1696248903527/centennial_college_logo?e=1717027200&v=beta&t=KkSJ7UsSovvZ3se-v0QEcw8HuKpfFBCtQfVzXym0yv4"
    },
    {
      title: "Mathematics Bachelor's Degree - Universidade Federal Fluminense",
      time: "2011 - 2018",
      place: "Rio de Janeiro, Brazil",
      companyName: "",
      description: "",
      logoSrc: "LogoUff.png"
    },
  ];

  return (
    <Container fluid className="bg-section" id="education">
      <Container className="container">
        <SectionHeaderComponent title={'Education'} />
        <ListGroup>
          {educationList.map((education, index) => (
            <ListGroup.Item key={index} className='experience-list-item'>
              <ExperienceCardComponent {...education} />
            </ListGroup.Item>
          ))}
        </ListGroup>
      </Container>
    </Container>
  );
};

export default EducationsComponent;