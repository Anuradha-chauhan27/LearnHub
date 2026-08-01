import { Container, Row, Col, Card } from "react-bootstrap";
import { Navb } from "../../../Components/Navb";
import Footer from "../../../Components/Footer";
import "../../../assets/css/myCourses.css";
import { getMyCourses } from "../../../api/myCourses";
import { useState, useEffect } from "react";
import { CustomButton } from '../../../Components/CustomButton'
import { useNavigate } from "react-router-dom";
import '../../../assets/css/buttonCss.css'

export const MyCourses = () => {
  const [courses, setCourses] = useState([]);
  const navigate = useNavigate();
  useEffect(() => {
    fetchCourses();
  }, [])

  const fetchCourses = async () => {
    try {
      const data = await getMyCourses();
      console.log("API Response:", data.myCourses);
      setCourses(data.myCourses);
    }
    catch (error) {
      console.log(error);
    }
  }
  return (
    <>
      <Navb />

      <section className="my-course-section">
        <Container>

          <div className="heading-area">
            <h1 className="name"><span className="my-span">MY</span> Courses</h1>
            <p>Continue your learning journey 🚀</p>
          </div>

          {courses.length === 0 ? (

            <div className="empty-course">
              <h3>No Courses Enrolled</h3>
              <p>Enroll in your first course.</p>
            </div>

          ) : (

            <Row className="g-4">
              {courses.map((item) => (
                <Col lg={12} key={item._id}>
                  <Card className="mycourse-card">

                    <Row className="g-0 align-items-center">

                      <Col md={4}>
                        <Card.Img
                          src={item.course.images[0]}
                          className="mycourse-image"
                        />
                      </Col>

                      <Col md={8}>
                        <Card.Body>

                          <h3 className="course-title">
                            {item.course.title}
                          </h3>

                          <p className="course-instructor">
                            👨‍🏫 {item.course.instructor}
                          </p>

                          <p className="mycourse-desc">
                            {item.course.description}
                          </p>

                          <div className="course-meta">

                            <span>⭐ {item.course.rating}</span>

                            <span>⏱ {item.course.duration}</span>

                            <span>📚 {item.course.lessons} Lessons</span>

                            <span>👨‍🎓 {item.course.students}+ Students</span>

                          </div>

                          <div className="progress-info">
                            <span>Progress</span>
                            <span>0%</span>
                          </div>

                          <div className="progress">
                            <div
                              className="progress-bar"
                              style={{ width: "0%" }}
                            ></div>
                          </div>

                          <div className="mt-4"  >
                            <CustomButton
                              className="continueBtn"
                              text="Continue Learning"
                              onClick={() => navigate(`/learning/${item.course._id}`)}
                            />
                          </div>

                        </Card.Body>
                      </Col>

                    </Row>

                  </Card>
                </Col>
              ))}
            </Row>
          )}
        </Container>
      </section>

      <Footer />
    </>
  );
};