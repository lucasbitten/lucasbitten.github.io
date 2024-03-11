import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import ProjectCardComponent from './components/ProjectCardComponent';
import ExperienceCardComponent from './components/ExperienceCardComponent';
import NavbarComponent from './components/NavbarComponent';
import AboutMeComponent from './components/AboutMeComponent';
import SectionHeaderComponent from './components/SectionHeaderComponent'

import Container from 'react-bootstrap/Container';
import ListGroup from 'react-bootstrap/ListGroup';
import { DarkModeProvider } from './DarkModeContext';
import ExperiencesComponent from './components/ExperiencesComponent'
import ProjectsComponent from './components/ProjectsComponent'
import EducationsComponent from './components/EducationsComponent'

function App() {
  return (
    <DarkModeProvider>
      <Container fluid className='body' style={{ paddingTop: "150px" }}>
        <NavbarComponent/>
        <AboutMeComponent/>
        <ProjectsComponent/>
        <ExperiencesComponent/>
        <EducationsComponent/>
      </Container>
      </DarkModeProvider>

  );
}

export default App;
