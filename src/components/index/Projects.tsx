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
    {
      title: "Web3 Ethereal",
      description:
        "Web3 Ethereal is a decentralized application that offers a wide range of NFTs, resources, and tools for crypto enthusiasts.",
      imgUrl: "/assets/imgs/ethereal.png",
      githubUrl: "https://github.com/lurapril12/ethereal",
      deployedUrl: "https://ethereal-woad.vercel.app/",
      tech: ["html", "tailwind", "javascript", "node", "react", "next"],
    },
    {
      title: "Web Portfolio",
      description:
        "Web Portfolio is a personal website that showcases a wide range of projects, resources, and tools for developers.",
      imgUrl: "/assets/imgs/portofolio.png",
      githubUrl: "https://github.com/lurapril12/my-portofolio-new-version",
      deployedUrl: "https://my-portofolio-new-version.vercel.app/",
      tech: ["html", "tailwind", "javascript", "react", "next"],
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
        "Myerems is a web aplication for approved memo finance.",
      imgUrl: "/assets/imgs/myerems.png",
      githubUrl: "https://github.com/lurapril12/myerems",
      deployedUrl: "https://myerems.abhatigroup.com/",
      tech: ["html", "css", "javascript", "php", "mysql", "ci4"],
    },
    {
      title: "URUS",
      description:
        "Web application for the management asset company.",
      imgUrl: "/assets/imgs/urus.png",
      deployedUrl: "https://urus.abhatigroup.com/",
      tech: ["html", "css", "javascript", "php", "mysql", "ci4"],
    },
    {
      title: "Ticketing",
      description:
        "Web application for the management request ticketing company.",
      imgUrl: "/assets/imgs/urus.png",
      deployedUrl: "https://ticketing.abhatigroup.com/",
      tech: ["html", "css", "javascript", "php", "mysql", "ci4"],
    },
    {
      title: "Web Company BLV",
      description:
        "Web company with a focus on the development of a website for a company.",
      imgUrl: "/assets/imgs/blv.png",
      deployedUrl: "https://bungursarilakeview.com/",
      tech: ["html", "css", "javascript", "wordpress"],
    },
    {
      title: "Web Company GNK",
      description:
        "Web company with a focus on the development of a website for a company.",
      imgUrl: "/assets/imgs/gnk.png",
      deployedUrl: "https://gnk.co.id/",
      tech: ["html", "css", "javascript", "wordpress"],
    },
    {
      title: "Web Company GLK",
      description:
        "Web company with a focus on the development of a website for a company.",
      imgUrl: "/assets/imgs/glk.png",
      deployedUrl: "https://galalaksana.com/",
      tech: ["html", "css", "javascript", "wordpress"],
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
