import about from "../../assets/img/about.png";
import mini from "../../assets/img/mini.png";
import Footer from "../../Components/Footer";
import { Navb } from "../../Components/Navb";
import { Container, Row, Col } from "react-bootstrap";
import "../../assets/css/about.css";

import {
  FaUserGraduate,
  FaChalkboardTeacher,
  FaPlay,
} from "react-icons/fa";

import { MdWorkspacePremium } from "react-icons/md";

export const About = () => {
  const empowerData = [
    {
      icon: <FaUserGraduate />,
      title: "Members",
      text: "Get inspired. Learn new skills. Make discoveries.",
    },
    {
      icon: <FaChalkboardTeacher />,
      title: "Teachers",
      text: "Share expertise. Inspire learners. Give back.",
    },
    {
      icon: <MdWorkspacePremium />,
      title: "Creators",
      text: "Be curious. Make an impact. Build the future.",
    },
  ];

  return (
    <>
      <Navb />

      <main className="about-page">

        {/* HERO */}

        <section className="about-hero">
          <img src={about} alt="About LearnHub" />

          <div className="about-hero-overlay"></div>

          <div className="about-hero-content">
            <span>DISCOVER • CREATE • LEARN</span>

            <h1>
              Inspiring discovery
              <br />
              through <strong>creativity.</strong>
            </h1>

            <p>
              Learn new skills, explore your creativity and build
              a better future with LearnHub.
            </p>
          </div>
        </section>


        {/* ABOUT */}

        <Container className="about-section">
          <Row className="justify-content-center">
            <Col lg={10}>
              <div className="about-content">
                <span className="section-tag">WHO WE ARE</span>

                <h2>
                  Learning has the power to
                  <span> change lives.</span>
                </h2>

                <p>
                  At LearnHub, we've seen how the simple act of creating
                  can become a powerful force for growth, change and
                  discovery. We inspire learners to explore ideas,
                  develop skills and turn curiosity into knowledge.
                </p>

                <p>
                  LearnHub is an online learning community for creative
                  and curious people. Learners come together to discover
                  courses, gain practical skills and take the next step
                  in their learning journey.
                </p>
              </div>
            </Col>
          </Row>


          {/* EMPOWER */}

          <div className="empower-section">
            <span className="section-tag">OUR COMMUNITY</span>

            <h2 className="empower-title">
              At LearnHub, We <span>Empower</span>
            </h2>

            <Row className="g-4 mt-4">
              {empowerData.map((item, index) => (
                <Col lg={4} md={6} key={index}>
                  <div className="empower-card">
                    <div className="empower-icon">
                      {item.icon}
                    </div>

                    <h3>{item.title}</h3>

                    <p>{item.text}</p>

                    <span className="card-number">
                      0{index + 1}
                    </span>
                  </div>
                </Col>
              ))}
            </Row>
          </div>
        </Container>


        {/* STORY */}

        <section className="story-section">
          <img src={mini} alt="LearnHub story" />

          <div className="story-overlay"></div>

          <div className="story-content">
            <span className="section-tag">LEARNER STORY</span>

            <h2>
              “The thing I thought couldn't be possible
              a year or two ago, is actually happening.”
            </h2>

            <p>
              — Mimi Chao, Artist & LearnHub Teacher
            </p>

            <a
              href="https://youtu.be/5W5vhn4-Eyg?si=n-SbwsKDlk04ZrHG"
              target="_blank"
              rel="noreferrer"
              className="story-btn"
            >
              <FaPlay />
              Watch Mimi's Story
            </a>
          </div>
        </section>

      </main>

      <Footer />
    </>
  );
};