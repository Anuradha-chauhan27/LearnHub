import { Navb } from "../../Components/Navb";
import {Container,Row,Col,Form,Button,Card,OverlayTrigger,Tooltip,} from "react-bootstrap"
import { useEffect, useState } from "react";
import { getAllCourses } from "../../api/courseApi";
import Footer from "../../Components/Footer";
import { useNavigate } from "react-router-dom";
import { CustomButton } from "../../Components/CustomButton";

import "../../assets/css/buttonCss.css";
import "../../assets/css/course.css";

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


export const Courses = () => {
  const navigate = useNavigate();
  const [courses, setCourses] = useState([]);

  useEffect(() => {
    const fetchCourses = async () => {

      try {
        const response = await getAllCourses();

        setCourses(response.data)

      } catch (error) {
        console.log(error)
      }
    }
    fetchCourses();
  }, [])
  return (
    <>
      <Navb />

      <Container fluid className="courses-page min-vh-100">
        <section className="course-search-section">
          <Container>
            <h1 className="animated-heading text-center mb-4">
              Explore Our Courses
            </h1>

            <p className="course-page-subtitle text-center">
              Discover new skills and start your learning journey.
            </p>

            <div className="course-search-box">
              <Form.Control
                type="text"
                placeholder="Search courses..."
              />

              <Button>Search</Button>
            </div>
          </Container>
        </section>

        <Container className="py-5">
          <Row className="g-4">
            {courses.map((course) => (
              <Col
                key={course._id}
                lg={4}
                md={6}
                sm={12}
              >
                <Card className="course-card h-100">
                  <div className="course-image-box">
                    <Card.Img
                      src={courseImages[course.image]}
                      alt={course.title}
                      className="course-image"
                    />
                  </div>

                  <Card.Body className="course-card-body">
                    <Card.Title className="course-title">
                      {course.title}
                    </Card.Title>

                    <OverlayTrigger
                      placement="top"
                      overlay={
                        <Tooltip>
                          {course.description}
                        </Tooltip>
                      }
                    >
                      <Card.Text className="course-description">
                        {course.description}
                      </Card.Text>
                    </OverlayTrigger>

                    <div className="mt-auto">
                      <CustomButton
                        onClick={() =>
                          navigate(`/courses/${course._id}`)
                        }
                        text="Explore More"
                        className="courseBtn"
                      />
                    </div>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        </Container>
      </Container>

      <Footer />
    </>
  );
};