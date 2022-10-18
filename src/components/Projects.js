import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import projImg1 from "../assets/img/project-img1.png";
import projImg2 from "../assets/img/project-img2.png";
import projImg3 from "../assets/img/TSH.PNG";
import colorSharp2 from "../assets/img/color-sharp2.png";
import lowCost from "../assets/img/low-cost.PNG"
import dook from "../assets/img/dook.PNG"
import noah from "../assets/img/Capture.PNG"
import personal from "../assets/img/personal.PNG"
import heroes from "../assets/img/hereos.PNG"
import commerce from "../assets/img/ecommerce.PNG"
import nikeStore from "../assets/img/nikeStore.PNG"
import landing1 from "../assets/img/New Bitmap Image (3).bmp"
import landing2 from "../assets/img/roject-3.bmp"
import landing3 from "../assets/img/New Bitmap Image (2).bmp"
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Projects = () => {

  const projects = [
    {
      title: "Byaan LMS",
      description: "Learning Management System",
      imgUrl: projImg1,
    },
    {
      title: "TSH",
      description: "Food Machinery System",
      imgUrl: projImg3,
    },
    {
      title: "IKafey",
      description: "Multi Tenant",
      imgUrl: projImg2,
    },
    {
      title: "Low Cost",
      description: "Shopping Cart System With Apis",
      imgUrl: lowCost,
    },
    {
      title: "Dook App",
      description: "Design & Development",
      imgUrl: dook,
    },
    {
      title: "Noah Azure",
      description: "Company Portfolio",
      imgUrl: noah,
    },
    {
      title: "Nike Store Clone",
      description: "Design & Development",
      imgUrl: nikeStore,
    },
    {
      title: "Landing Page",
      description: "Design & Development",
      imgUrl: landing1,
    },
    {
      title: "Landing Page",
      description: "Design & Development",
      imgUrl: landing2,
    },
    {
      title: "Landing Page",
      description: "Design & Development",
      imgUrl: landing3,
    },
    {
      title: "Personal Portfolio",
      description: "My Personal Portfolio",
      imgUrl: personal,
    },
    {
      title: "Heroes GYM",
      description: "Full Responsive Website For Gym And Home Workout",
      imgUrl: heroes,
    },
    {
      title: "E-commerce",
      description: "Full Responsive Ecommrce with react hooks and redux toolkit (apis)",
      imgUrl: commerce,
    },
  ];

  const withoutFreamework = [
    {
      title: "Byaan LMS",
      description: "Learning Management System",
      imgUrl: projImg1,
    },
    {
      title: "TSH",
      description: "Food Machinery System",
      imgUrl: projImg3,
    },
    {
      title: "IKafey",
      description: "Multi Tenant",
      imgUrl: projImg2,
    },
    {
      title: "Low Cost",
      description: "Shopping Cart System With Apis",
      imgUrl: lowCost,
    },
    {
      title: "Dook App",
      description: "Design & Development",
      imgUrl: dook,
    },

  ]


  const personalProjects = [
    {
      title: "Nike Store Clone",
      description: "Design & Development",
      imgUrl: nikeStore,
    },
    {
      title: "Landing Page",
      description: "Design & Development",
      imgUrl: landing1,
    },
    {
      title: "Landing Page",
      description: "Design & Development",
      imgUrl: landing2,
    },
    {
      title: "Landing Page",
      description: "Design & Development",
      imgUrl: landing3,
    },
  ]

  const reactProjects = [
    {
      title: "Noah Azure",
      description: "Company Portfolio",
      imgUrl: noah,
    },
    {
      title: "Personal Portfolio",
      description: "My Personal Portfolio",
      imgUrl: personal,
    },
    {
      title: "E-commerce",
      description: "Full Responsive Ecommrce with react hooks and redux toolkit (apis)",
      imgUrl: commerce,
    },
    {
      title: "Heroes GYM",
      description: "Full Responsive Website For Gym And Home Workout",
      imgUrl: heroes,
    },
  ]

  return (
    <section className="project" id="project">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) =>
                <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                  <h2>Projects</h2>
                  <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                  <Tab.Container id="projects-tabs" defaultActiveKey="first">
                    <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                      <Nav.Item>
                        <Nav.Link eventKey="first">All Projects</Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="second">Without Freamework</Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="third">Personal Projects</Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="forth">React Projects</Nav.Link>
                      </Nav.Item>
                    </Nav>
                    <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                      <Tab.Pane eventKey="first">
                        <Row>
                          {
                            projects.map((project, index) => {
                              return (
                                <ProjectCard
                                  key={index}
                                  {...project}
                                />
                              )
                            })
                          }
                        </Row>
                      </Tab.Pane>
                      <Tab.Pane eventKey="second">
                        <Row>
                          {
                            withoutFreamework.map((project, index) => {
                              return (
                                <ProjectCard
                                  key={index}
                                  {...project}
                                />
                              )
                            })
                          }
                        </Row>
                      </Tab.Pane>
                      <Tab.Pane eventKey="third">
                        <Row>
                          {
                            personalProjects.map((project, index) => {
                              return (
                                <ProjectCard
                                  key={index}
                                  {...project}
                                />
                              )
                            })
                          }
                        </Row>
                      </Tab.Pane>
                      <Tab.Pane eventKey="forth">
                        <Row>
                          {
                            reactProjects.map((project, index) => {
                              return (
                                <ProjectCard
                                  key={index}
                                  {...project}
                                />
                              )
                            })
                          }
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
