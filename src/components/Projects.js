import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import projImg1 from "../assets/img/project-img1.png";
import projImg2 from "../assets/img/project-img2.png";
import projImg3 from "../assets/img/project-img3.png";
import naruto from "../assets/img/naruto.jpeg";
import titan from "../assets/img/titan.jpg";
import saitama from "../assets/img/saitama.webp";
import gon from "../assets/img/gon.webp";
import lufi from "../assets/img/lufi.jpg";
import steins from "../assets/img/steins.jpg";
import colorSharp2 from "../assets/img/color-sharp2.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Projects = () => {
  const projects = [
    {
      title: "Business Startup",
      description: "Design & Development",
      imgUrl: projImg1,
    },
    {
      title: "Business Startup",
      description: "Design & Development",
      imgUrl: projImg2,
    },
    {
      title: "Business Startup",
      description: "Design & Development",
      imgUrl: projImg3,
    },
    {
      title: "Business Startup",
      description: "Design & Development",
      imgUrl: projImg1,
    },
    {
      title: "Business Startup",
      description: "Design & Development",
      imgUrl: projImg2,
    },
    {
      title: "Business Startup",
      description: "Design & Development",
      imgUrl: projImg3,
    },
  ];

  // Массив с уникальными описаниями для вкладки 'second'
  const projectsUpdated = [
    {
      title: "Naruto Udzumaki",
      description: "Thanks for the site! Now my adventures are available to everyone! This is really a huge help for my village!",
      imgUrl: naruto,
    },
    {
      title: "Eren Yeager",
      description: "Thank you for creating the site. Now my story has become available to everyone. It's a huge addition to my legacy.",
      imgUrl: titan,
    },
    {
      title: "Saitama",
      description: "Thanks for the site! Now my exploits are available to everyone. I hope that this will inspire others to do great deeds and virtue!",
      imgUrl: saitama,
    },
    {
      title: "Gon Freecss",
      description: "Thanks for the site! Now my adventures are available to everyone. This will help me find friends and strong opponents! We will achieve the goal together",
      imgUrl: gon,
    },
    {
      title: "Monkey D. Luffy",
      description: "Hey, cool business with the site! Now my adventures are available to everyone! Thanks guys! Let's search for One Piece together!",
      imgUrl: lufi,
    },
    {
      title: "Okabe Rintaro",
      description: "Thanks for the site. Now all my research is available to the world. This is a step towards changing the future. Elpsycho congru!",
      imgUrl: steins,
    },
  ];

  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__fadeIn": ""}>
                <h2>For familiarization</h2>
                <p>here you can find our projects and reviews from our satisfied customers</p>
                <Tab.Container id="projects-tabs" defaultActiveKey="first">
                  <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                    <Nav.Item>
                      <Nav.Link eventKey="first">Projects</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="second">reviews</Nav.Link>
                    </Nav.Item>
                  </Nav>
                  <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                    <Tab.Pane eventKey="first">
                      <Row>
                        {projects.map((project, index) => (
                          <ProjectCard key={index} {...project} />
                        ))}
                      </Row>
                    </Tab.Pane>
                    <Tab.Pane eventKey="second">
                      <Row>
                        {projectsUpdated.map((project, index) => (
                          <ProjectCard key={index} {...project} />
                        ))}
                      </Row>
                    </Tab.Pane>
                  </Tab.Content>
                </Tab.Container>
              </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2}></img>
    </section>
  )
}
