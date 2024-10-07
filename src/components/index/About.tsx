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
                title="Previously"
                imgUrl="/assets/imgs/labcoat.webp"
                description="In her final 2.5 years at Mercu Buana University, Lurry focused on Machine Learning and Data Science, particularly on Coffee Crop Yield Prediction. She also mentored peers in programming and data visualization. After earning her Bachelor’s Degree in Informatics Engineering in 3.5 years, she gained experience as an IT Programmer, contributing to full-stack and automation projects. Lurry’s work is guided by a problem-solving mindset and a people-first approach."
              />
              <Widget
                title="Community"
                imgUrl="/assets/imgs/shaking-hands.webp"
                description="As a woman in tech, Lurry is deeply passionate about empowering others, especially those from diverse and underrepresented backgrounds. Her journey in software engineering has given her a unique perspective and a strong sense of empathy for others facing challenges in the industry. In her free time, you’ll often find her collaborating on pair programming, engaging in community learning, assisting fellow developers in optimizing their code and design, or discussing the latest trends in technology on online platforms and forums"
              />
              <Widget
                title="Mantra"
                imgUrl="/assets/imgs/seedling.webp"
                description="Lurry Putri is passionate about web development, with a focus on frontend. She enjoys crafting user-friendly, visually appealing websites and constantly improving her skills in frameworks like React.js. Always eager to learn, Lurry stays updated on the latest trends and strives to create impactful digital experiences."
              />
            </Row>
          </Col>
        </Row>
      </Container>
    </section>
  );
};
