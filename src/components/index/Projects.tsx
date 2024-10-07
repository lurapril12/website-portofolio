import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import { ProjectProps } from "./ProjectCard";

export const Projects = () => {
  const projects: ProjectProps[] = [
    {
      title: "Luredu",
      description:
        "Luredu is a front-end educational platform that offers a wide range of courses, quizzes, and resources for students and educators.",
      imgUrl: "/assets/imgs/luredu.png",
      githubUrl: "https://github.com/lurapril12/educity",
      deployedUrl: "https://educity-luriaprilia8-gmailcom-luriaprilia8gmailcoms-projects.vercel.app/",
      tech: ["bootstrap", "javascript", "node", "react", "next"],
    },
    {
      title: "Forever",
      description:
        "Forever is fashion e-commerce platform that offers a wide range of clothing, shoes, and accessories for",
      imgUrl: "/assets/imgs/ecommerce-forever.png",
      githubUrl: "https://github.com/lurapril12/ecommerce-app",
      deployedUrl: "/",
      tech: ["react", "mui", "javascript", "node", "figma"],
    },
    {
      title: "JobJourney",
      description:
        "JobJourney is a landing page job search platform that offers a wide range of job listings, resources, and tools for job seekers.",
      imgUrl: "/assets/imgs/jobjourney.png",
      githubUrl: "https://github.com/lurapril12/jobjourney",
      deployedUrl: "https://jobjourney-plum.vercel.app/",
      tech: ["html", "tailwind", "javascript", "node", "react"],
    },
  ];

  const openSource: ProjectProps[] = [
    {
      title: "Coding Resources API",
      description:
        "The Coding Resources API serves educational content for a wide variety of computer science topics, languages, and technologies related to web development.",
      imgUrl: "/assets/imgs/bookselfapp.png",
      githubUrl: "https://github.com/lurapril12/dicoding_bookshelf_app_starter_project",
      deployedUrl: "/",
      tech: ["html", "css", "javascript", "react"],
    },
  ];

  const companyWork: ProjectProps[] = [
    {
      title: "Myerems",
      description:
        "Myerems is a web aplication for approved memo finace.",
      imgUrl: "/assets/imgs/myerems.png",
      githubUrl: "https://github.com/lurapril12/myerems",
      deployedUrl: "https://myerems.abhatigroup.com/",
      tech: ["html", "css", "javascript", "php", "mysql", "ci4"],
    },
    {
      title: "URUS",
      description:
        "Web application for the management asset company.",
      imgUrl: "/assets/imgs/image.png",
      deployedUrl: "https://urus.abhatigroup.com/",
      tech: ["html", "css", "javascript", "php", "mysql", "ci4"],
    },
  ];

  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col size={12}>
            <div>
              <h2>Projects</h2>
              <Tab.Container id="projects-tabs" defaultActiveKey="first">
                <Nav
                  variant="pills"
                  className="nav-pills justify-content-center align-items-center"
                  id="pills-tab"
                >
                  <Nav.Item>
                    <Nav.Link eventKey="first">Projects</Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link eventKey="second">Open Source</Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link eventKey="third">Company Work</Nav.Link>
                  </Nav.Item>
                </Nav>
                <Tab.Content id="slideInUp">
                  <Tab.Pane eventKey="first">
                    <p className="mb-5">
                      Whether it's for learning new technologies or
                      strengthening my large range of skills, I am highly
                      passionate about expressing my creativity by developing
                      modern, responsive full-stack web applications.
                    </p>
                    <Row>
                      {projects.map((project, index) => {
                        return <ProjectCard key={index} {...project} />;
                      })}
                    </Row>
                  </Tab.Pane>
                  <Tab.Pane eventKey="second">
                    <p className="mb-5">
                      I've managed, contributed to, and maintained the following
                      open source projects while effectively utilizing
                      documentation, version control, and high-level
                      organization and communication.
                    </p>
                    <Row>
                      {openSource.map((project, index) => {
                        return <ProjectCard key={index} {...project} />;
                      })}
                    </Row>
                  </Tab.Pane>
                  <Tab.Pane eventKey="third">
                    <p className="mb-5">
                      I have designed and developed interactive, responsive
                      websites under considerably pressing deadlines in order to
                      successfully meet my clients' needs and artistic visions.
                    </p>
                    <Row>
                      {companyWork.map((project, index) => {
                        return <ProjectCard key={index} {...project} />;
                      })}
                    </Row>
                  </Tab.Pane>
                </Tab.Content>
              </Tab.Container>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};
