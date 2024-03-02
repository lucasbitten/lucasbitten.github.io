import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import ProjectCardComponent from './components/ProjectCardComponent';
import ExperienceCardComponent from './components/ExperienceCardComponent';
import NavbarComponent from './components/NavbarComponent';
import AboutMeComponent from './components/AboutMeComponent';
import SectionHeaderComponent from './components/SectionHeaderComponent'
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/Container';
import ListGroup from 'react-bootstrap/ListGroup';
import { DarkModeProvider } from './DarkModeContext';

function App() {
  return (
    <DarkModeProvider>
      <Container fluid className='body' style={{ paddingTop: "150px" }}>
        <NavbarComponent/>
        <AboutMeComponent/>
        <Container className="bg-section" id="projects">
          <SectionHeaderComponent title={'Projects'}/>
          <Row xs={1} md={2} lg={3}>
            <Col className='column'>
              <ProjectCardComponent
                title="Disney Magic Kingdom"
                companyName="Gameloft Toronto"
                projectImage="https://t2.gstatic.com/licensed-image?q=tbn:ANd9GcRKrodWjRjr7pwTP_AMc9rmBK1NiRvMyjupMwjofTmnQLiK4cdBCoDTF1JkQYtsEpe3"
                environment="Unity, Visual Studio, C#, C++"
                description="Ported and adapted C++ code to Unity, fixed bugs, implemented features"
                playLink="https://play.google.com/store/apps/details?id=com.gameloft.android.ANMP.GloftDYHM"
                logoSrc="https://media.licdn.com/dms/image/D4E0BAQEmwyoTRo6i9w/company-logo_100_100/0/1703064670906/gameloft_logo?e=1717027200&amp;v=beta&amp;t=SmA9SRuEjksUxBFt0l-McQcbVIxy7_ETjOw0Al_oH-U"
              />
            </Col>

            <Col className='column'>
              <ProjectCardComponent
                title="LEGO® Legacy: Heroes Unboxed"
                companyName="Gameloft Toronto"
                projectImage="https://play-lh.googleusercontent.com/pgxuatGUAdw1KHnWM_UKTYcGw8erFmhxY4WIwlGnFlIKMw5zzub_6nQPEXeszXGEzLk4=w240-h480-rw"
                environment="C#, Visual Studio, Proprietary Engine"
                description="Implemented features, fixed bugs"
                playLink="https://apps.apple.com/us/app/lego-legacy-heroes-unboxed/id1644208767"
                logoSrc="https://media.licdn.com/dms/image/D4E0BAQEmwyoTRo6i9w/company-logo_100_100/0/1703064670906/gameloft_logo?e=1717027200&amp;v=beta&amp;t=SmA9SRuEjksUxBFt0l-McQcbVIxy7_ETjOw0Al_oH-U"
              />
            </Col>


            <Col className='column'>
              <ProjectCardComponent
                title="SongPop Party"
                companyName="Gameloft Toronto"
                projectImage="https://images.nintendolife.com/d1d7e92f2631b/songpop-party-cover.cover_large.jpg"
                environment="Unity, Visual Studio, C#"
                description="Fixed gameplay bugs"
                playLink="https://songpop-party.com/"
                logoSrc="https://media.licdn.com/dms/image/D4E0BAQEmwyoTRo6i9w/company-logo_100_100/0/1703064670906/gameloft_logo?e=1717027200&amp;v=beta&amp;t=SmA9SRuEjksUxBFt0l-McQcbVIxy7_ETjOw0Al_oH-U"
              />
            </Col>

            <Col className='column'>
              <ProjectCardComponent
                title="Smash Ball"
                companyName="Game Pill"
                projectImage="https://media.moddb.com/images/games/1/75/74928/1024_thumb.jpg"
                environment="Unity, Visual Studio, C#, C++"
                description="Implemented gameplay functionalities and fixed bugs"
                playLink="https://store.steampowered.com/app/905360/Smash_Ball/"
                logoSrc="https://media.licdn.com/dms/image/D560BAQHhhVGSr4nKeA/company-logo_200_200/0/1684957962085/gamepillinc_logo?e=2147483647&v=beta&t=5uZu5pTSYpeEWFsS_sN6AYGRMU5Y-75gD6BUpTmlH3M"
              />
            </Col>

            <Col className='column'>
              <ProjectCardComponent
                title="Unannounced project"
                companyName="Gameloft Toronto"
                projectImage="Question mark.png"
                environment="Unity, Visual Studio, C#"
                description="Implemented gameplay features to rapidly created prototype"
                playLink=""
                logoSrc="https://media.licdn.com/dms/image/D4E0BAQEmwyoTRo6i9w/company-logo_100_100/0/1703064670906/gameloft_logo?e=1717027200&amp;v=beta&amp;t=SmA9SRuEjksUxBFt0l-McQcbVIxy7_ETjOw0Al_oH-U"
              />
            </Col>


            <Col className='column'>
              <ProjectCardComponent
                title="Unannounced project"
                companyName="Gameloft Toronto"
                projectImage="Question mark.png"
                environment="Unity, Visual Studio, C#"
                description="Implemented foundation systems and added gameplay functionalities"
                playLink=""
                logoSrc="https://media.licdn.com/dms/image/D4E0BAQEmwyoTRo6i9w/company-logo_100_100/0/1703064670906/gameloft_logo?e=1717027200&amp;v=beta&amp;t=SmA9SRuEjksUxBFt0l-McQcbVIxy7_ETjOw0Al_oH-U"
              />
            </Col>





          </Row>

        </Container>


        <Container fluid className="bg-section" id="experience">
          <Container className="container">

          <SectionHeaderComponent title={'Experience'}/>
            <ListGroup>

              <ListGroup.Item className='experience-list-item'>
                <ExperienceCardComponent
                  title="Game Programmer"
                  companyName="Gameloft Toronto"
                  time="July 2021 - February 2024"
                  place="Toronto, Canada"
                  description="Took part in multiple projects with Unity, C#, and C++, developing gameplay mechanics and tools"
                  logoSrc="https://media.licdn.com/dms/image/D4E0BAQEmwyoTRo6i9w/company-logo_100_100/0/1703064670906/gameloft_logo?e=1717027200&amp;v=beta&amp;t=SmA9SRuEjksUxBFt0l-McQcbVIxy7_ETjOw0Al_oH-U"
                >
                </ExperienceCardComponent>
              </ListGroup.Item>

              <ListGroup.Item className='experience-list-item'>
                <ExperienceCardComponent
                  title="Game Programmer"
                  companyName="Game Pill"
                  time="April 2021 - July 2021"
                  place="Toronto, Canada"
                  description="Took part in multiple projects with Unity, C#, and C++, developing gameplay mechanics and tools"
                  logoSrc="https://media.licdn.com/dms/image/D560BAQHhhVGSr4nKeA/company-logo_200_200/0/1684957962085/gamepillinc_logo?e=2147483647&v=beta&t=5uZu5pTSYpeEWFsS_sN6AYGRMU5Y-75gD6BUpTmlH3M"
                >
                </ExperienceCardComponent>
              </ListGroup.Item>

              <ListGroup.Item className='experience-list-item'>
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

              <ListGroup.Item className='experience-list-item'>
                <ExperienceCardComponent
                  title="Game Programmer Intern"
                  companyName="Gameloft Toronto"
                  time="May 2020 - September 2020"
                  place="Toronto, Canada"
                  description="Took part in LEGO® Legacy: Heroes Unboxed updating features and fixing bugs"
                  logoSrc="https://media.licdn.com/dms/image/D4E0BAQEmwyoTRo6i9w/company-logo_100_100/0/1703064670906/gameloft_logo?e=1717027200&amp;v=beta&amp;t=SmA9SRuEjksUxBFt0l-McQcbVIxy7_ETjOw0Al_oH-U"
                >

                </ExperienceCardComponent>
              </ListGroup.Item>

              <ListGroup.Item className='experience-list-item'>
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

              <ListGroup.Item className='experience-list-item'>
                <ExperienceCardComponent
                  title="Mathematics Teacher"
                  companyName="PIBID - UFF"
                  time="April 2015 - December 2017"
                  place="Rio de Janeiro, Brazil"
                  description=""
                  logoSrc="https://biodocencias.uff.br/wp-content/uploads/sites/695/2023/06/marca-pibid-AI.png"
                >
                </ExperienceCardComponent>
              </ListGroup.Item>

              <ListGroup.Item className='experience-list-item'>
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

        <Container fluid className="bg-section" id="education">
          <Container className="container">

          <SectionHeaderComponent title={'Education'}/>
            <ListGroup>

              <ListGroup.Item className='experience-list-item'>
                <ExperienceCardComponent
                  title="Centennial College"
                  time="2019 - 2021"
                  place="Toronto, Canada"
                  companyName=""
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

              <ListGroup.Item className='experience-list-item'>
                <ExperienceCardComponent
                  title="Universidade Federal Fluminense"
                  time="2011 - 2018"
                  place="Rio de Janeiro, Brazil"
                  description=""
                  companyName=""
                  logoSrc="LogoUff.png"
                >
                </ExperienceCardComponent>
              </ListGroup.Item>

            </ListGroup>



          </Container>
        </Container>

      </Container>
      </DarkModeProvider>

  );
}

export default App;
