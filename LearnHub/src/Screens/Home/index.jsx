import { useEffect, useState } from "react";
import { getAllCourses } from "../../api/courseApi";
import { Container, Row, Col, Carousel, Card } from "react-bootstrap";
import { TiTick } from "react-icons/ti";
import { TbPointerStar } from "react-icons/tb";
import { CgWebsite } from "react-icons/cg";
import { SlPeople } from "react-icons/sl";
import { useNavigate } from "react-router-dom";
import { Navb } from "../../Components/Navb";
import { CustomButton } from "../../Components/CustomButton";
import { cardData, features } from "../../Data/SampleData";
import "../../assets/css/buttonCss.css";
import "../../assets/css/home.css";
import Footer from "../../Components/Footer";
import dark from "../../assets/img/dark.jpeg";
import '../../assets/css/responsive.css'


import web from "../../assets/img/courses/web.jpg";
import python from "../../assets/img/courses/python.jpg";
import java from "../../assets/img/courses/java.jpg";
import c from "../../assets/img/courses/c.png";
import cplus from "../../assets/img/courses/c++.jpg";
import ai from "../../assets/img/courses/ai.png";
import ml from "../../assets/img/courses/ml.png";
import cs from "../../assets/img/courses/cs.png";
import db from "../../assets/img/courses/db.png";
import cloud from "../../assets/img/courses/cloud.png";
import ui from "../../assets/img/courses/ui.png";
import dos from "../../assets/img/courses/do.png";

const courseImages = { web, python, java, c, cplus, ai, ml, cs, db, cloud, ui, dos, };


export const Home = () => {
  const navigate = useNavigate();
  const [courses, setCourses] = useState([]);

  useEffect(() => {
    const fetchCourses = async () => {
      try {
        const response = await getAllCourses();

        setCourses(response.data)
      }
      catch (error) {
        console.log(error)
      }
    }
    fetchCourses();
  }, [])

  return (
    <>
      <Navb />
      <Container fluid className="py-5 home-section">
        <Row className="align-items-center gy-5">
          <Col lg={5} md={12}>
            <h1
              className="animated-heading mb-4"
              style={{
                fontSize: "clamp(2rem,5vw,4.5rem)",
                lineHeight: 1.2,
              }}
            >
              Experience
              <br />
              the Next Generation
              <br />
              of Education.
            </h1>
            <CustomButton
              className="customButton"
              text="Get Started"
              onClick={() => navigate("/login")}
            />
          </Col>

          <Col lg={7} md={12}>
            <Carousel fade interval={3000}>
              {courses.map((course) => (
                <Carousel.Item key={course._id}>
                  <img
                    src={courseImages[course.image]}
                    alt={courseImages[course.title]}
                    className="d-block w-100 rounded-4 img-fluid"
                    style={{
                      height: "clamp(250px,50vw,500px)",
                      objectFit: "cover",
                    }}
                  />
                </Carousel.Item>
              ))}
            </Carousel>
          </Col>

        </Row>
      </Container>

      <Container fluid className="py-5 home-section">
        <Row className="align-items-center gy-5">

          <Col lg={6}>
            <h1
              style={{
                fontSize: "clamp(3rem,5vw,5rem)",
              }}
            >
              Creative
              <br />
              Learning
              <br />
              Made Easy
            </h1>
          </Col>

          <Col lg={6}>
            <div className="text-white">

              {features.map((item, index) => (
                <div
                  key={index}
                  className="feature-item d-flex align-items-center mb-3"
                >
                  <TiTick
                    size={34}
                    className="feature-tick"
                  />

                  <h4 className="mb-0">
                    {item}
                  </h4>
                </div>
              ))}

            </div>
          </Col>

        </Row>

        <Row className="g-4 mt-5 pt-5">
          {cardData.map((cards, index) => (
            <Col
              key={index}
              xl={3}
              lg={3}
              md={6}
              sm={6}
              xs={12}
            >
              <Card className="empower-card h-100">
                <Card.Body className="empower-body">
                  <Card.Title className="empower-rate">
                    {cards.rate}
                  </Card.Title>

                  <Card.Subtitle className="empower-title">
                    {cards.title}
                  </Card.Subtitle>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
        <Row className="align-items-center gy-5 mt-5 pt-lg-5">
          <Col
            lg={6}
            className="text-center text-lg-start mb-5 mb-lg-0"
          >
            <h1
              className="animated-heading mb-5"
              style={{
                fontSize: "clamp(2.2rem, 5vw, 4rem)",
                lineHeight: "1.2",
              }}
            >
              Explore Your
              <br />
              Creative Feed
            </h1>

            {/* Card 1 */}
            <div className="d-flex align-items-start mb-4">
              <TbPointerStar
                size={50}
                className="me-3 text-warning flex-shrink-0"
              />

              <div>
                <h3 className="fw-bold text-white">
                  Stay Inspired
                </h3>

                <p className="text-white mb-0">
                  Discover trending topics, get quick answers,
                  and find your people.
                </p>
              </div>
            </div>

            {/* Card 2 */}
            <div className="d-flex align-items-start mb-4">
              <SlPeople
                size={50}
                className="me-3 text-info flex-shrink-0"
              />

              <div>
                <h3 className="fw-bold text-white">
                  Stay Connected
                </h3>

                <p className="text-white mb-0">
                  Follow your peers and teachers,
                  exchange perspectives and share ideas.
                </p>
              </div>
            </div>

            {/* Card 3 */}
            <div className="d-flex align-items-start">
              <CgWebsite
                size={50}
                className="me-3 text-success flex-shrink-0"
              />

              <div>
                <h3 className="fw-bold text-white">
                  Keep Creating
                </h3>

                <p className="text-white mb-0">
                  Explore new ideas, publish projects,
                  and receive valuable feedback.
                </p>
              </div>
            </div>
          </Col>

          {/* Right Image */}
          <Col
            lg={6}
            className="text-center"
          >
            <img
              src={dark}
              alt="Creative Learning"
              className="creative-image img-fluid rounded-4"
              style={{
                width: "90%",
                maxWidth: "550px",
                height: "auto",
                objectFit: "cover",
              }}
            />
          </Col>

        </Row>

      </Container>
      <Footer />
    </>
  );
};