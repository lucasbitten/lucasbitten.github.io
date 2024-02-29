import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import ProjectCardComponent from './components/ProjectCardComponent';
import ExperienceCardComponent from './components/ExperienceCardComponent';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/Container';
import ListGroup from 'react-bootstrap/ListGroup';

function App() {
  return (

    <Container fluid className='bg_projects'>
      <Container>
        <img height="48" width="56" src="https://pngimg.com/uploads/under_construction/under_construction_PNG54.png" />
        Under Construction...
        <img height="48" width="56" src="https://pngimg.com/uploads/under_construction/under_construction_PNG54.png" />

        <section className="pb-3 mb-4 border-bottom section_title">
          Projects
        </section>
        <Row xs={1} md={2} lg={3}>
          <Col style={{ padding: "5px"}}>
            <ProjectCardComponent
              title="Disney Magic Kingdom"
              time="January 2022 - November 2023"
              projectImage="https://t2.gstatic.com/licensed-image?q=tbn:ANd9GcRKrodWjRjr7pwTP_AMc9rmBK1NiRvMyjupMwjofTmnQLiK4cdBCoDTF1JkQYtsEpe3"
              environment="Unity, Visual Studio, C#, C++"
              description="Ported and adapted C++ code to Unity, fixed bugs, implemented features"
              playLink="https://play.google.com/store/apps/details?id=com.gameloft.android.ANMP.GloftDYHM"
              logoSrc="https://media.licdn.com/dms/image/D4E0BAQEmwyoTRo6i9w/company-logo_100_100/0/1703064670906/gameloft_logo?e=1717027200&amp;v=beta&amp;t=SmA9SRuEjksUxBFt0l-McQcbVIxy7_ETjOw0Al_oH-U"
            />
          </Col>

          <Col style={{ padding: "5px"}}>
            <ProjectCardComponent
              title="LEGO® Legacy: Heroes Unboxed"
              time="April 2020 - September 2020"
              projectImage="https://play-lh.googleusercontent.com/pgxuatGUAdw1KHnWM_UKTYcGw8erFmhxY4WIwlGnFlIKMw5zzub_6nQPEXeszXGEzLk4=w240-h480-rw"
              environment="C#, Visual Studio, Proprietary Engine"
              description="Implemented features, fixed bugs"
              playLink="https://apps.apple.com/us/app/lego-legacy-heroes-unboxed/id1644208767"
              logoSrc="https://media.licdn.com/dms/image/D4E0BAQEmwyoTRo6i9w/company-logo_100_100/0/1703064670906/gameloft_logo?e=1717027200&amp;v=beta&amp;t=SmA9SRuEjksUxBFt0l-McQcbVIxy7_ETjOw0Al_oH-U"
            />
          </Col>


          <Col style={{ padding: "5px"}}>
            <ProjectCardComponent
              title="SongPop Party"
              time="February 2022 - August 2022"
              projectImage="https://images.nintendolife.com/d1d7e92f2631b/songpop-party-cover.cover_large.jpg"
              environment="Unity, Visual Studio, C#"
              description="Fixed gameplay bugs"
              playLink="https://songpop-party.com/"
              logoSrc="https://media.licdn.com/dms/image/D4E0BAQEmwyoTRo6i9w/company-logo_100_100/0/1703064670906/gameloft_logo?e=1717027200&amp;v=beta&amp;t=SmA9SRuEjksUxBFt0l-McQcbVIxy7_ETjOw0Al_oH-U"
            />
          </Col>

        </Row>
        <Row xs={1} md={2} lg={3}>

          <Col style={{ padding: "5px"}}>
            <ProjectCardComponent
              title="Unannounced project"
              time="July 2021 - December 2021"
              projectImage="https://static.wixstatic.com/media/487d10_cfe1f4102da94f06aac7ec1e581c590a~mv2.webp"
              environment="Unity, Visual Studio, C#"
              description="Implemented gameplay features to rapidly created prototype"
              playLink=""
              logoSrc="https://media.licdn.com/dms/image/D4E0BAQEmwyoTRo6i9w/company-logo_100_100/0/1703064670906/gameloft_logo?e=1717027200&amp;v=beta&amp;t=SmA9SRuEjksUxBFt0l-McQcbVIxy7_ETjOw0Al_oH-U"
            />
          </Col>


          <Col style={{ padding: "5px"}}>
            <ProjectCardComponent
              title="Unannounced project"
              time="December 2023 - February 2024"
              projectImage="https://static.wixstatic.com/media/487d10_cfe1f4102da94f06aac7ec1e581c590a~mv2.webp"
              environment="Unity, Visual Studio, C#"
              description="Implemented foundation systems and added gameplay functionalities"
              playLink=""
              logoSrc="https://media.licdn.com/dms/image/D4E0BAQEmwyoTRo6i9w/company-logo_100_100/0/1703064670906/gameloft_logo?e=1717027200&amp;v=beta&amp;t=SmA9SRuEjksUxBFt0l-McQcbVIxy7_ETjOw0Al_oH-U"
            />
          </Col>


          <Col style={{ padding: "5px"}}>
            <ProjectCardComponent
              title="Smash Ball"
              time="April 2021 - July 2021"
              projectImage="https://media.moddb.com/images/games/1/75/74928/1024_thumb.jpg"
              environment="Unity, Visual Studio, C#, C++"
              description="Implemented gameplay functionalities and fixed bugs"
              playLink="https://store.steampowered.com/app/905360/Smash_Ball/"
              logoSrc="https://media.licdn.com/dms/image/D560BAQHhhVGSr4nKeA/company-logo_200_200/0/1684957962085/gamepillinc_logo?e=2147483647&v=beta&t=5uZu5pTSYpeEWFsS_sN6AYGRMU5Y-75gD6BUpTmlH3M"
            />
          </Col>


        </Row>

      </Container>


      <Container fluid className="bg_info">
        <Container className="container">

          <section className="pb-3 mb-4 border-bottom section_title">
            Experience
          </section>

          <ListGroup>

          <ListGroup.Item>
          <ExperienceCardComponent
            title="Game Programer"
            companyName="Gameloft Toronto"
            time="July 2021 - February 2024"
            place="Toronto, Canada"
            description="Took part in multiple projects with Unity, C#, and C++, developing gameplay mechanics and tools"
            logoSrc="https://media.licdn.com/dms/image/D4E0BAQEmwyoTRo6i9w/company-logo_100_100/0/1703064670906/gameloft_logo?e=1717027200&amp;v=beta&amp;t=SmA9SRuEjksUxBFt0l-McQcbVIxy7_ETjOw0Al_oH-U"
            >
            </ExperienceCardComponent>
          </ListGroup.Item>

          <ListGroup.Item>
          <ExperienceCardComponent
            title="Game Programer"
            companyName="Game Pill"
            time="April 2021 - July 2021"
            place="Toronto, Canada"
            description="Took part in multiple projects with Unity, C#, and C++, developing gameplay mechanics and tools"
            logoSrc="https://media.licdn.com/dms/image/D560BAQHhhVGSr4nKeA/company-logo_200_200/0/1684957962085/gamepillinc_logo?e=2147483647&v=beta&t=5uZu5pTSYpeEWFsS_sN6AYGRMU5Y-75gD6BUpTmlH3M"
            >
            </ExperienceCardComponent>
          </ListGroup.Item>

          <ListGroup.Item>
          <ExperienceCardComponent
            title="Frontend Developer"
            companyName="Centennial College"
            time="September 2020 - April 2021"
            place="Toronto, Canada"
            description="
            • Develop and design mobile applications according to client briefs and modify designs to meet changes in client specifications
            • Collaborated with back-end developers to build, test, and improve applications
            • Meeting with clients to discuss requirements, present designs, and handle feedback on work
            • Developed Functional Specification Document.
            • Demonstrated requirements by developing mock-ups."
            logoSrc="https://media.licdn.com/dms/image/D560BAQGDFaZK89FUAQ/company-logo_100_100/0/1696248903527/centennial_college_logo?e=1717027200&v=beta&t=KkSJ7UsSovvZ3se-v0QEcw8HuKpfFBCtQfVzXym0yv4"
            >
            </ExperienceCardComponent>
          </ListGroup.Item>

          <ListGroup.Item>
          <ExperienceCardComponent
            title="Game Programer Intern"
            companyName="Gameloft Toronto"
            time="May 2020 - September 2020"
            place="Toronto, Canada"
            description="Took part in LEGO® Legacy: Heroes Unboxed updating features and fixing bugs"
            logoSrc="https://media.licdn.com/dms/image/D4E0BAQEmwyoTRo6i9w/company-logo_100_100/0/1703064670906/gameloft_logo?e=1717027200&amp;v=beta&amp;t=SmA9SRuEjksUxBFt0l-McQcbVIxy7_ETjOw0Al_oH-U"
            >

            </ExperienceCardComponent>
          </ListGroup.Item>
          
          <ListGroup.Item>
          <ExperienceCardComponent
            title="Frontend Developer"
            companyName="Centennial College"
            time="February 2020 - May 2020"
            place="Toronto, Canada"
            description="
            • Develop and design mobile applications according to client briefs and modify designs to meet changes in client specifications
            • Collaborated with back-end developers to build, test, and improve applications
            • Meeting with clients to discuss requirements, present designs, and handle feedback on work
            • Developed Functional Specification Document.
            • Demonstrated requirements by developing mock-ups."
            logoSrc="https://media.licdn.com/dms/image/D560BAQGDFaZK89FUAQ/company-logo_100_100/0/1696248903527/centennial_college_logo?e=1717027200&v=beta&t=KkSJ7UsSovvZ3se-v0QEcw8HuKpfFBCtQfVzXym0yv4"
            >
            </ExperienceCardComponent>
          </ListGroup.Item>

          <ListGroup.Item>
          <ExperienceCardComponent
            title="Mathematics Teacher"
            companyName="PIBID - UFF"
            time="April 2015 - December 2017"
            place="Rio de Janeiro, Brazil"
            description=""
            logoSrc="https://www.linkedin.com/search/results/all/?keywords=PIBID+-+UFF&lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_position_details%3B4Bn%2FR0JpRPu%2B2Z3fv97SKA%3D%3D"
            >
            </ExperienceCardComponent>
          </ListGroup.Item>

          <ListGroup.Item>
          <ExperienceCardComponent
            title="Mathematics Tutor"
            companyName="Centro Educacional de Niterói"
            time="January 2014 - July 2017"
            place="Rio de Janeiro, Brazil"
            description=""
            logoSrc="https://media.licdn.com/dms/image/C4D0BAQGSGWrNSxK9_Q/company-logo_100_100/0/1631315775925?e=1717027200&v=beta&t=hno4_LIwRw7JLyLj-DSe1ECB38gqblBhg_1Kucfx1g8"
            >
            </ExperienceCardComponent>
          </ListGroup.Item>

          </ListGroup>



        </Container>
      </Container>

      <Container fluid className="bg_info">
        <Container className="container">

          <section className="pb-3 mb-4 border-bottom section_title">
            Education
          </section>

          <ListGroup>

          <ListGroup.Item>
          <ExperienceCardComponent
            title="Centennial College"
            time="2019 - 2021"
            place="Toronto, Canada"
            description="Java Programming (Multithreading, Lambda, Collections, etc.)
            C# and ASP.Net Programming 3 (Lambda, Delegates, Collections, Multithreading, WPF, Entity Framework, etc.)
            Android Applications Development (Intents, Activities, Visual Components, etc)
            Assets for Game Programming (3D Modeling, 2D Sprite, Animations, etc)
            Game Programming (Finite State Machines (FSMs), Artificial Intelligence (AI), Particle Systems (PS), and Multi-Player Networked Games (MPNGs))
            Practical Game Design (Design Integration; Control Schemes; Game Balancing; Gameplay Mechanics; Player Interaction)"
            logoSrc="https://media.licdn.com/dms/image/D560BAQGDFaZK89FUAQ/company-logo_100_100/0/1696248903527/centennial_college_logo?e=1717027200&v=beta&t=KkSJ7UsSovvZ3se-v0QEcw8HuKpfFBCtQfVzXym0yv4"
            >
            </ExperienceCardComponent>
          </ListGroup.Item>

          <ListGroup.Item>
          <ExperienceCardComponent
            title="Universidade Federal Fluminense"
            time="2011 - 2018"
            place="Rio de Janeiro, Brazil"
            description=""
            logoSrc="https://media.licdn.com/dms/image/C560BAQEzOnkCNuO0EQ/company-logo_100_100/0/1653335082223/universidade_federal_fluminense_logo?e=1717027200&v=beta&t=wwXI-x_17w2k7jgxiZDkymxc6r4ouxS3KTVfgHmG-4A"
            >
            </ExperienceCardComponent>
          </ListGroup.Item>

          </ListGroup>



        </Container>
      </Container>

    </Container>
  );
}

export default App;
