import React from 'react';
import { Container, ListGroup } from 'react-bootstrap';
import SectionHeaderComponent from './SectionHeaderComponent'
import ExperienceCardComponent from './ExperienceCardComponent';

function ExperienceComponent() {

    const experiences = [
        {
            title: "Game Programmer",
            companyName: "Gameloft Toronto",
            time: "July 2021 - February 2024",
            place: "Toronto, Canada",
            description: "Took part in multiple projects with Unity, C#, and C++, developing gameplay mechanics and tools",
            logoSrc: "https://media.licdn.com/dms/image/D4E0BAQEmwyoTRo6i9w/company-logo_100_100/0/1703064670906/gameloft_logo?e=1717027200&amp;v=beta&amp;t=SmA9SRuEjksUxBFt0l-McQcbVIxy7_ETjOw0Al_oH-U"
        },
        {
            title: "Game Programmer",
            companyName: "Game Pill",
            time: "April 2021 - July 2021",
            place: "Toronto, Canada",
            description: "Took part in multiple projects with Unity, C#, and C++, developing gameplay mechanics and tools",
            logoSrc: "https://media.licdn.com/dms/image/D560BAQHhhVGSr4nKeA/company-logo_200_200/0/1684957962085/gamepillinc_logo?e=2147483647&v=beta&t=5uZu5pTSYpeEWFsS_sN6AYGRMU5Y-75gD6BUpTmlH3M"
        },
        {
            title: "Frontend Developer",
            companyName: "Centennial College",
            time: "September 2020 - April 2021",
            place: "Toronto, Canada",
            description: "• Develop and design mobile applications according to client briefs and modify designs to meet changes in client specifications • Collaborated with back-end developers to build, test, and improve applications • Meeting with clients to discuss requirements, present designs, and handle feedback on work • Developed Functional Specification Document. • Demonstrated requirements by developing mock-ups.",
            logoSrc: "https://media.licdn.com/dms/image/D560BAQGDFaZK89FUAQ/company-logo_100_100/0/1696248903527/centennial_college_logo?e=1717027200&v=beta&t=KkSJ7UsSovvZ3se-v0QEcw8HuKpfFBCtQfVzXym0yv4"
        },
        {
            title: "Game Programmer Intern",
            companyName: "Gameloft Toronto",
            time: "May 2020 - September 2020",
            place: "Toronto, Canada",
            description: "Took part in LEGO® Legacy: Heroes Unboxed updating features and fixing bugs",
            logoSrc: "https://media.licdn.com/dms/image/D4E0BAQEmwyoTRo6i9w/company-logo_100_100/0/1703064670906/gameloft_logo?e=1717027200&amp;v=beta&amp;t=SmA9SRuEjksUxBFt0l-McQcbVIxy7_ETjOw0Al_oH-U"
        },
        {
            title: "Frontend Developer",
            companyName: "Centennial College",
            time: "February 2020 - May 2020",
            place: "Toronto, Canada",
            description: "• Develop and design mobile applications according to client briefs and modify designs to meet changes in client specifications • Collaborated with back-end developers to build, test, and improve applications • Meeting with clients to discuss requirements, present designs, and handle feedback on work • Developed Functional Specification Document. • Demonstrated requirements by developing mock-ups.",
            logoSrc: "https://media.licdn.com/dms/image/D560BAQGDFaZK89FUAQ/company-logo_100_100/0/1696248903527/centennial_college_logo?e=1717027200&v=beta&t=KkSJ7UsSovvZ3se-v0QEcw8HuKpfFBCtQfVzXym0yv4"
        },
        {
            title: "Mathematics Teacher",
            companyName: "PIBID - UFF",
            time: "April 2015 - December 2017",
            place: "Rio de Janeiro, Brazil",
            description: "",
            logoSrc: "https://biodocencias.uff.br/wp-content/uploads/sites/695/2023/06/marca-pibid-AI.png"
        },
        {
            title: "Mathematics Tutor",
            companyName: "Centro Educacional de Niterói",
            time: "January 2014 - July 2017",
            place: "Rio de Janeiro, Brazil",
            description: "",
            logoSrc: "https://media.licdn.com/dms/image/C4D0BAQGSGWrNSxK9_Q/company-logo_100_100/0/1631315775925?e=1717027200&v=beta&t=hno4_LIwRw7JLyLj-DSe1ECB38gqblBhg_1Kucfx1g8"
        },
    ];

    return (
        <Container fluid className="bg-section" id="experience">
            <Container className="container">
                <SectionHeaderComponent title={'Experience'} />
                <ListGroup>
                    {experiences.map((experience, index) => (
                        <ListGroup.Item key={index} className='experience-list-item'>
                            <ExperienceCardComponent {...experience} />
                        </ListGroup.Item>
                    ))}
                </ListGroup>
            </Container>
        </Container>
    );
}

export default ExperienceComponent;