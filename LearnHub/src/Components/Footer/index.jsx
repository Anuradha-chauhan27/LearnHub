import {FaFacebookF,FaLinkedinIn,FaInstagram,FaYoutube,FaXTwitter,FaPhone,FaEnvelope,
  FaLocationDot,FaGlobe,FaUsers,FaBookOpen,FaGraduationCap,
} from "react-icons/fa6";

import { FaChalkboardTeacher } from "react-icons/fa";

import { Container, Row, Col, Form, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import "../../assets/css/footer.css";

export default function Footer() {
  return (
    <>
      {/* <section className="newsletter-section py-4">
        <Container>
          <Row className="align-items-center g-3">
            <Col lg={5}>
              <h3>Stay Updated 📚</h3>
              <p>
                Subscribe to receive the latest courses, learning resources,
                and platform updates.
              </p>
            </Col>

            <Col lg={7}>
              <div className="newsletter-box">
                <Form.Control
                  type="email"
                  placeholder="Enter your email"
                />

                <Button>Subscribe →</Button>
              </div>
            </Col>
          </Row>
        </Container>
      </section> */}

  
      <footer className="footer">
        <Container>
          <Row className="gy-5">
         
            <Col lg={3} md={6}>
              <h2 className="logo">
                Learn<span>Hub</span>
              </h2>

              <small>LEARN • GROW • SUCCEED</small>

              <p className="mt-4">
                LearnHub is an online Learning Management System designed to
                help students learn new skills through quality courses,
                experienced instructors, and interactive learning.
              </p>

              <Row className="stats mt-4">
                <Col xs={6}>
                  <FaBookOpen />
                  <h5>200+</h5>
                  <span>Courses</span>
                </Col>

                <Col xs={6}>
                  <FaUsers />
                  <h5>10K+</h5>
                  <span>Students</span>
                </Col>

                <Col xs={6}>
                  <FaChalkboardTeacher />
                  <h5>50+</h5>
                  <span>Instructors</span>
                </Col>

                <Col xs={6}>
                  <FaGraduationCap />
                  <h5>95%</h5>
                  <span>Success</span>
                </Col>
              </Row>
            </Col>

       
            <Col lg={2} md={6}>
              <h5>Quick Links</h5>

              <ul>
                <li><Link to="/home">Home</Link></li>
                <li><Link to="/about">About</Link></li>
                <li><Link to="/courses">Courses</Link></li>
                <li><Link to="/categories">Categories</Link></li>
                <li><Link to="/instructors">Instructors</Link></li>
                <li><Link to="/contact">Contact</Link></li>
              </ul>
            </Col>

            <Col lg={2} md={6}>
              <h5>Popular Courses</h5>

              <ul>
                <li>Web Development</li>
                <li>Python</li>
                <li>Data Science</li>
                <li>UI/UX Design</li>
                <li>Digital Marketing</li>
                <li>Machine Learning</li>
              </ul>
            </Col>

            {/* Services */}
            <Col lg={2} md={6}>
              <h5>Our Services</h5>

              <ul>
                <li>Online Learning</li>
                <li>Certification</li>
                <li>Expert Mentors</li>
                <li>Assignments</li>
                <li>Progress Tracking</li>
                <li>24/7 Support</li>
              </ul>
            </Col>

            {/* Contact */}
            <Col lg={3} md={6}>
              <h5>Contact Us</h5>

              <div className="contact-item">
                <FaLocationDot />
                <span>
                  New Delhi,
                  <br />
                  India
                </span>
              </div>

              <div className="contact-item">
                <FaPhone />
                <span>+91 98765 43210</span>
              </div>

              <div className="contact-item">
                <FaEnvelope />
                <span>support@learnhub.com</span>
              </div>

              <div className="contact-item">
                <FaGlobe />
                <span>www.learnhub.com</span>
              </div>

              <div className="social-icons">
                <FaFacebookF />
                <FaLinkedinIn />
                <FaInstagram />
                <FaYoutube />
                <FaXTwitter />
              </div>
            </Col>
          </Row>

          <hr />

          <Row className="bottom-footer">
            <Col md={6}>
              © 2026 <span>LearnHub</span>. All Rights Reserved.
            </Col>

            <Col md={6} className="text-md-end">
              <Link to="/privacy">Privacy Policy</Link>
              &nbsp; | &nbsp;
              <Link to="/terms">Terms & Conditions</Link>
              &nbsp; | &nbsp;
              <Link to="/faq">FAQ</Link>
            </Col>
          </Row>
        </Container>
      </footer>
    </>
  );
}