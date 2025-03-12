import { Col, Container, Row } from "react-bootstrap";
import Widget from "./Widget";

export const About = () => {
  return (
    <section className="about" id="about">
      <Container>
        <Row>
          <Col size={12}>
            <h2 className="larger-h2">About</h2>
            <p className="subheading">
              Lurry Putri is more than just an incredibly inquisitive
              specializes frontend developer reactjs ; she's your shoulder to lean on. She
              prioritizes making an impact by consistently practicing her values
              of kindness, empathy, and diligence. Click on the widgets below to
              read more about the unique perspective she brings to the tech
              community.
            </p>
            <Row>
              <Widget
                title="Education"
                imgUrl="/assets/imgs/education.png"
                description="With a degree in Informatics Engineering, I strive to support diverse communities in tech. My background in software development, data analysis, and quality assurance gives me insight into industry challenges. In my spare time, I collaborate on coding projects and engage in tech communities."
              />
              <Widget
                title="Passion"
                imgUrl="/assets/imgs/shaking-hands.webp"
                description="As a woman in tech, I am passionate about empowering diverse and underrepresented groups. My journey in software engineering has given me a unique perspective and strong empathy for industry challenges. In my free time, I collaborate on pair programming, engage in community learning, and discuss the latest tech trends online."
              />
              <Widget
                title="Experience"
                imgUrl="/assets/imgs/seedling.webp"
                description="With over 2 years of experience in fullstack development using PHP CI4, frontend engineering with React.js and Next.js, and WordPress development, I also have expertise in UI/UX design with Figma. I am dedicated to creating dynamic, user-friendly, and visually engaging digital experiences while staying updated with industry trends."
              />
            </Row>
          </Col>
        </Row>
      </Container>
    </section>
  );
};
