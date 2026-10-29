import { Container } from "./styles";
import ScrollAnimation from "../ScrollAnimation/ScrollAnimation";

const skills = [
  "Java", "C", "C++", "Python", "HTML", "CSS", "React.js",
  "MySQL", "MongoDB", "TensorFlow", "Scikit-learn", "Pandas",
  "NumPy", "Git", "GitHub", "VS Code", "Jupyter Notebook", "Postman"
];

export function About() {
  return (
    <Container id="about">
      <div className="about-text">
        <ScrollAnimation animateIn="fadeInLeft">
          <h2>About Me</h2>
        </ScrollAnimation>
        <ScrollAnimation animateIn="fadeInLeft" delay={100}>
          <p>
            I'm Injam Vamshi Reddy, a Computer Science and Engineering undergraduate
            at Keshav Memorial Institute of Technology (KMIT). I enjoy solving
            Data Structures and Algorithms problems and building projects that
            combine software development and machine learning.
          </p>
        </ScrollAnimation>
        <ScrollAnimation animateIn="fadeInLeft" delay={200} style={{ marginTop: "2rem", marginBottom: "2rem" }}>
          <p>
            I'm continuously improving my programming skills in Java and exploring
            web development, databases, and machine learning tools. I'm interested
            in opportunities where I can learn, collaborate, and build useful technology.
          </p>
        </ScrollAnimation>
        <ScrollAnimation animateIn="fadeInLeft" delay={300}>
          <div className="education">
            <h3>Education</h3>
            <h4>B.Tech in Computer Science and Engineering</h4>
            <p>Keshav Memorial Institute of Technology (KMIT)</p>
            <p>Expected Graduation: 2028</p>
            <p>CGPA: 8.65/10</p>
          </div>
        </ScrollAnimation>
        <ScrollAnimation animateIn="fadeInLeft" delay={400}>
          <h3>Technical Skills</h3>
          <div className="hard-skills">
            {skills.map((skill) => <span className="skill" key={skill}>{skill}</span>)}
          </div>
        </ScrollAnimation>
      </div>
    </Container>
  );
}
