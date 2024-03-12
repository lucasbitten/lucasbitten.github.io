import Container from 'react-bootstrap/Container';
import ProjectCardComponent from './ProjectCardComponent';
import SectionHeaderComponent from './SectionHeaderComponent'
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

function ProjectsComponent() {
    return (
        <Container className="bg-section" id="projects">
          <SectionHeaderComponent title={'Commercial Projects'}/>
          <Row xs={1} md={2} lg={3}>
            <Col className='column'>
              <ProjectCardComponent
                title="Disney Magic Kingdom"
                companyName="Gameloft Toronto"
                projectImage="https://t2.gstatic.com/licensed-image?q=tbn:ANd9GcRKrodWjRjr7pwTP_AMc9rmBK1NiRvMyjupMwjofTmnQLiK4cdBCoDTF1JkQYtsEpe3"
                environment="Unity, C#, C++"
                description="Implemented features/tools, fixed bugs."
                playLink="https://play.google.com/store/apps/details?id=com.gameloft.android.ANMP.GloftDYHM"
                logoSrc="https://media.licdn.com/dms/image/D4E0BAQEmwyoTRo6i9w/company-logo_100_100/0/1703064670906/gameloft_logo?e=1717027200&amp;v=beta&amp;t=SmA9SRuEjksUxBFt0l-McQcbVIxy7_ETjOw0Al_oH-U"
              />
            </Col>

            <Col className='column'>
              <ProjectCardComponent
                title="LEGO® Legacy: Heroes Unboxed"
                companyName="Gameloft Toronto"
                projectImage="https://play-lh.googleusercontent.com/pgxuatGUAdw1KHnWM_UKTYcGw8erFmhxY4WIwlGnFlIKMw5zzub_6nQPEXeszXGEzLk4=w240-h480-rw"
                environment="C#, Proprietary Engine"
                description="Implemented features, fixed bugs."
                playLink="https://apps.apple.com/us/app/lego-legacy-heroes-unboxed/id1644208767"
                logoSrc="https://media.licdn.com/dms/image/D4E0BAQEmwyoTRo6i9w/company-logo_100_100/0/1703064670906/gameloft_logo?e=1717027200&amp;v=beta&amp;t=SmA9SRuEjksUxBFt0l-McQcbVIxy7_ETjOw0Al_oH-U"
              />
            </Col>


            <Col className='column'>
              <ProjectCardComponent
                title="SongPop Party"
                companyName="Gameloft Toronto"
                projectImage="https://images.nintendolife.com/d1d7e92f2631b/songpop-party-cover.cover_large.jpg"
                environment="Unity, C#"
                description="Fixed gameplay bugs."
                playLink="https://songpop-party.com/"
                logoSrc="https://media.licdn.com/dms/image/D4E0BAQEmwyoTRo6i9w/company-logo_100_100/0/1703064670906/gameloft_logo?e=1717027200&amp;v=beta&amp;t=SmA9SRuEjksUxBFt0l-McQcbVIxy7_ETjOw0Al_oH-U"
              />
            </Col>

            <Col className='column'>
              <ProjectCardComponent
                title="Smash Ball"
                companyName="Game Pill"
                projectImage="https://media.moddb.com/images/games/1/75/74928/1024_thumb.jpg"
                environment="Unity, C#"
                description="Implemented gameplay functionalities and fixed bugs."
                playLink="https://store.steampowered.com/app/905360/Smash_Ball/"
                logoSrc="https://media.licdn.com/dms/image/D560BAQHhhVGSr4nKeA/company-logo_200_200/0/1684957962085/gamepillinc_logo?e=2147483647&v=beta&t=5uZu5pTSYpeEWFsS_sN6AYGRMU5Y-75gD6BUpTmlH3M"
              />
            </Col>

            <Col className='column'>
              <ProjectCardComponent
                title="Unannounced project"
                companyName="Gameloft Toronto"
                projectImage="Question mark.png"
                environment="Unity, C#"
                description="Implemented gameplay features to rapidly created prototype."
                playLink=""
                logoSrc="https://media.licdn.com/dms/image/D4E0BAQEmwyoTRo6i9w/company-logo_100_100/0/1703064670906/gameloft_logo?e=1717027200&amp;v=beta&amp;t=SmA9SRuEjksUxBFt0l-McQcbVIxy7_ETjOw0Al_oH-U"
              />
            </Col>


            <Col className='column'>
              <ProjectCardComponent
                title="Unannounced project"
                companyName="Gameloft Toronto"
                projectImage="Question mark.png"
                environment="Unity, C#"
                description="Implemented foundation systems and added gameplay functionalities."
                playLink=""
                logoSrc="https://media.licdn.com/dms/image/D4E0BAQEmwyoTRo6i9w/company-logo_100_100/0/1703064670906/gameloft_logo?e=1717027200&amp;v=beta&amp;t=SmA9SRuEjksUxBFt0l-McQcbVIxy7_ETjOw0Al_oH-U"
              />
            </Col>
          </Row>

          <SectionHeaderComponent title={'Personal Projects'}/>
          <Row xs={1} md={2} lg={3}>
            <Col className='column'>
              <ProjectCardComponent
                title="A(maze)ing Race"
                projectImage="AmazingRace.png"
                environment="Unity, C#, Photon"
                description="A mobile game that seamlessly integrates augmented reality, machine learning, multiplayer, and procedurally generated mazes."
                playLink=""
              />
            </Col>

            <Col className='column'>
              <ProjectCardComponent
                title="Silent Ops"
                projectImage="SilentOps.png"
                environment="Unity, C#, Photon Engine"
                description="A co-op multiplayer game where one player is a thief, sneaking to avoid detection, while the other plays the hacker, controlling cameras, doors, and lights to guide the thief through the environment."
                playLink="https://lucasbbitten.itch.io/silent-ops"
              />
            </Col>


            <Col className='column'>
              <ProjectCardComponent
                title="Lost City (Game Jam)"
                projectImage="LostCity.png"
                environment="Unity, C#"
                description="This is a third-person explorer game where players navigate challenging puzzles to discover special skulls to unlock the path to a hidden treasure."
                playLink="https://lucasbbitten.itch.io/lost-city"
              />
            </Col>

            <Col className='column'>
              <ProjectCardComponent
                title="Re-pair (Game Jam)"
                projectImage="Re-pair.png"
                environment="Unity, C#"
                description="Players control both character's movements at the same time but in opposite directions. Use levers, portals, and boxes strategically to reunite them at the center of each level. It's a test of coordination and problem-solving in a fast-paced, split-screen adventure."
                playLink="https://v3.globalgamejam.org/2020/games/re-pair-3-0"
              />
            </Col>

            <Col className='column'>
              <ProjectCardComponent
                title="CO(vi)D Modern Warfare"
                projectImage="CO(vi)D Modern Warfare.png"
                environment="Unity, C#"
                description="FPS game developed during the COVID era. Shoot masks onto uncovered faces with the Mask Blaster and prevent the spread of the virus."
                playLink="https://lucasbbitten.itch.io/covid-modern-warfare"
              />
            </Col>


            <Col className='column'>
              <ProjectCardComponent
                title="Royal Rush"
                projectImage="Royal Rush.png"
                environment="C++, SDL2"
                description="A 2D stealth platformer crafted in C++. The player must utilize shadows to evade enemies and navigate through levels, aiming to reach the end undetected."
                playLink=""
              />
            </Col>
          </Row>
        </Container>
    );
}

export default ProjectsComponent;