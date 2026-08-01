import { useParams, useNavigate } from "react-router-dom";
import { Card, Container, Row, Col, OverlayTrigger, Tooltip, } from "react-bootstrap";
import { Modal, Form } from "react-bootstrap";
import { useEffect, useState } from "react";
import { getAllCourses } from "../../api/courseApi";
import { CustomButton } from "../../Components/CustomButton";
import { Navb } from "../../Components/Navb";
import Footer from "../../Components/Footer";
import '../../assets/css/courseDetail.css'
import '../../assets/css/buttonCss.css'
import { enrollCourse, checkEnrollment } from "../../api/enrollmentApi";
import axios from "axios";



export const DetailCourses = () => {
  const navigate = useNavigate();
  const [courses, setCourses] = useState([]);
  const [alreadyEnroll, setAlreadyEnroll] = useState(false);
  const [showPayment, setShowPayment] = useState(false);
  const [isWishlisted, setIsWishlisted] = useState(false);
  const [paymentData, setPaymentData] = useState({
    cardName: "",
    cardNumber: "",
    expiry: "",
    cvv: "",
  });

  const [paymentSuccess, setPaymentSuccess] = useState(false);
  const { id } = useParams();
  console.log("URL ID:", id);
  const course = courses.find(
    (item) => item._id === id
  );

  useEffect(() => {

    const checkCourse = async () => {

      const token = localStorage.getItem("token");

      if (!token) return;

      try {

        const response = await checkEnrollment(id);

        console.log("Enrollment Check:", response);

        setAlreadyEnroll(response.enrolled);

      }
      catch (error) {
        console.log(error);
      }

    }

    if (id) {
      checkCourse();
    }

  }, [id]);
  const handleEnroll = () => {
    const token = localStorage.getItem("token");

    if (alreadyEnroll) {
      navigate('/myCourses')
      return
    }

    if (!token) {
      navigate("/login");
      return;
    }

    setShowPayment(true);
  };

  useEffect(() => {
    const fetchCourses = async () => {

      try {
        const response = await getAllCourses();
        console.log("API DATA:", response.data);

        setCourses(response.data)

      } catch (error) {
        console.log(error)
      }
    }
    fetchCourses();
  }, [])



  if (courses.length === 0) {
    return (
      <>
        <Navb />
        <div className="text-center text-white py-5">
          <h2>Loading...</h2>
        </div>
      </>
    );
  }

  if (!course) {
    return (
      <>
        <Navb />
        <div className="text-center text-white py-5">
          <h2>Course Not Found</h2>
        </div>
      </>
    );
  }
  const handlePayment = async () => {
    try {

      const response = await enrollCourse(course._id);

      console.log(response);

      if (response.success) {
        setShowPayment(false);
        setPaymentSuccess(true);
      }

    } catch (error) {
      console.log(error.response);
      console.log(error.response.data);
      alert("Something went wrong");
    }
  };
  const handleWishlist = async () => {
  try {

    const token = localStorage.getItem("token");

    console.log("TOKEN:", token);
    console.log("COURSE ID:", course._id);

    if (!token) {
      navigate("/login");
      return;
    }

    const response = await axios.post(
      "http://localhost:5000/api/wishlist/add",
      {
        courseId: course._id,
      },
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );

    console.log("Wishlist Response:", response.data);

    setIsWishlisted(true);

    alert("❤️ Added to Wishlist");

  } catch (error) {

    console.log("Wishlist Error:", error.response?.data || error);

  }
};
  return (
    <>
      <Navb />

      <main className="course-detail-page">


        <Container className="py-5">
          <Card className="detail-course-card">
            <Row className="g-4 align-items-center">

              <Col lg={7}>
                <img
                  src={course.images[0]}
                  alt={course.title}
                  className="detail-hero-image"
                />
              </Col>

              <Col lg={5}>

                <Card className="course-info-card">

                  <span className="course-label">
                    LEARNHUB COURSE
                  </span>

                  <h1 className="course-detail-title">
                    {course.title}
                  </h1>

                  <div className="rating-row">

                    ⭐ {course.rating}

                    <span>
                      ({course.reviews} Reviews)
                    </span>

                  </div>

                  <p className="student-count">

                    👨‍🎓 {course.students}+ Students

                  </p>

                  <div className="price-row">

                    <h2 className="new-price">
                      ₹{course.price}
                    </h2>

                    <span className="old-price">
                      ₹{course.oldPrice}
                    </span>

                    <span className="discount-badge">
                      {course.discount}
                    </span>

                  </div>

                  <hr />

                  <div className="course-feature">
                    ⏳ Duration
                    <span>{course.duration}</span>
                  </div>

                  <div className="course-feature">
                    📚 Lessons
                    <span>{course.lessons}</span>
                  </div>

                  <div className="course-feature">
                    💻 Projects
                    <span>{course.projects}</span>
                  </div>

                  <div className="course-feature">
                    👨‍🏫 Instructor
                    <span>{course.instructor}</span>
                  </div>

                  <div className="course-feature">
                    📜 Certificate
                    <span>
                      {course.certificate ? "Yes" : "No"}
                    </span>
                  </div>

                  <div className="course-feature">
                    ♾ Lifetime Access
                    <span>
                      {course.lifetimeAccess ? "Yes" : "No"}
                    </span>
                  </div>

                  <div className="d-flex gap-3 mt-4">

                    <CustomButton
                      text="Enroll Now"
                      className="wishlistBtn flex-fill"
                      onClick={handleEnroll} />

                    <CustomButton
                      text={
                        isWishlisted
                          ? "❤️ Wishlisted"
                          : "♡ Add to Wishlist"
                      }
                      className="wishlistBtn flex-fill"
                      onClick={handleWishlist}
                    />

                  </div>
                </Card>

              </Col>

            </Row>
          </Card>
        </Container>
        <Container className="py-5">

          <Card className="overview-card">

            <h2>Course Overview</h2>

            <p>{course.description}</p>

          </Card>

        </Container>

        <Container className="pb-5">
          <Card className="overview-card feature-card p-4">

            <Row className="g-4">

              <Col md={6}>
                <h4 className="feature-heading">
                  This course covers
                </h4>

                <ul className="feature-list">
                  {course.covers?.map((item, index) => (
                    <li key={index}>
                      <span className="feature-icon">✓</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </Col>

              <Col md={6}>
                <h4 className="feature-heading">
                  This course includes
                </h4>

                <ul className="feature-list">
                  {course.includes?.map((item, index) => (
                    <li key={index}>
                      <span className="feature-icon">✓</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </Col>

            </Row>

          </Card>
        </Container>


        {/* <Container className="py-5 video-section">

          <h2 className="animated-heading text-center mb-5">
            Course Videos
          </h2>

          <Row className="g-4">

            {course.videos.map((video) => (
              <Col
                key={video._id || video.url}
                lg={4}
                md={6}
                sm={12}
                className="d-flex"
              >

                <Card className="video-card w-100">

                  <div className="video-frame">
                    <iframe
                      src={`https://www.youtube.com/embed/${new URL(video.url).searchParams.get("v")
                        }?start=${new URL(video.url)
                          .searchParams
                          .get("t")
                          ?.replace("s", "") || 0
                        }`}
                      title={video.title}
                      allowFullScreen
                    />
                  </div>

                  <Card.Body className="d-flex flex-column text-center">

                    <OverlayTrigger
                      placement="top"
                      overlay={
                        <Tooltip>
                          {video.title}
                        </Tooltip>
                      }
                    >
                      <Card.Title className="video-title">
                        {video.title}
                      </Card.Title>
                    </OverlayTrigger>

                    <div className="mt-auto">
                      <CustomButton
                        onClick={() =>
                          window.open(video.url, "_blank")
                        }
                        text="Watch Video"
                        className="vedioBtn"
                      />
                    </div>

                  </Card.Body>

                </Card>

              </Col>
            ))}

          </Row>

        </Container>*/}

      </main>
      <Modal
        show={showPayment}
        onHide={() => setShowPayment(false)}
        centered
        className="payment-modal"
      >
        <Modal.Header closeButton>
          <Modal.Title>Course Payment</Modal.Title>
        </Modal.Header>

        <Modal.Body>

          <h5 className="mb-3">
            {course.title}
          </h5>

          <h4 className="text-success mb-4">
            ₹{course.price}
          </h4>

          <Form>

            <Form.Group className="mb-3">
              <Form.Label>Card Holder Name</Form.Label>

              <Form.Control
                type="text"
                placeholder="Enter Name"
                value={paymentData.cardName}
                onChange={(e) =>
                  setPaymentData({
                    ...paymentData,
                    cardName: e.target.value
                  })
                }
              />

            </Form.Group>

            <Form.Group className="mb-3">

              <Form.Label>Card Number</Form.Label>

              <Form.Control
                type="text"
                placeholder="1234 5678 9012 3456"
              />

            </Form.Group>

            <Row>

              <Col>

                <Form.Group>

                  <Form.Label>Expiry</Form.Label>

                  <Form.Control
                    placeholder="MM/YY"
                  />

                </Form.Group>

              </Col>

              <Col>

                <Form.Group>

                  <Form.Label>CVV</Form.Label>

                  <Form.Control
                    type="password"
                    placeholder="123"
                  />

                </Form.Group>

              </Col>

            </Row>

          </Form>

        </Modal.Body>

        <Modal.Footer>

          <CustomButton
            text="Pay Now"
            className="wishlistBtn"
            onClick={handlePayment}

          />

        </Modal.Footer>

      </Modal>
      <Modal
        show={paymentSuccess}
        onHide={() => setPaymentSuccess(false)}
        centered
        className="success-modal"
      >

        <Modal.Body className="text-center">

          <h2>🎉 Congratulations!</h2>

          <h5>
            You have successfully enrolled in
          </h5>

          <h4>
            {course.title}
          </h4>

          <CustomButton
            text="Go To My Courses"
            className="wishlistBtn"
            onClick={() => navigate("/mycourses")}
          />

        </Modal.Body>

      </Modal>

      <Footer />
    </>
  );
};