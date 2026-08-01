import { useState } from "react";
import { Container, Row, Col, Form, Card } from "react-bootstrap";
import { FaEnvelope, FaPhoneAlt, FaMapMarkerAlt } from "react-icons/fa";
import { Navb } from "../../Components/Navb";
import Footer from "../../Components/Footer";
import "../../assets/css/buttonCss.css";
import { CustomButton } from "../../Components/CustomButton";
import * as Yup from "yup";
import "../../assets/css/contactUs.css";

export const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [errors, setErrors] = useState({});

  const validationSchema = Yup.object({
    name: Yup.string()
      .trim()
      .min(3, "Name must be at least 3 characters")
      .required("Name is required"),

    email: Yup.string()
      .email("Enter valid email")
      .required("Email is required"),

    subject: Yup.string()
      .trim()
      .min(5, "Subject must be at least 5 characters")
      .required("Subject is required"),

    message: Yup.string()
      .trim()
      .min(10, "Message must be at least 10 characters")
      .required("Message is required"),
  });

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData({
      ...formData,
      [name]: value,
    });

    setErrors({
      ...errors,
      [name]: "",
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await validationSchema.validate(formData, {
        abortEarly: false,
      });

      setErrors({});

      alert("Successfully Send");

      setFormData({
        name: "",
        email: "",
        subject: "",
        message: "",
      });
    } catch (error) {
      const validationErrors = {};

      error.inner.forEach((err) => {
        validationErrors[err.path] = err.message;
      });

      setErrors(validationErrors);
    }
  };

  return (
    <>
      <Navb />

      <Container className="contact-page py-5">
        <div className="text-center mb-5">
          <h1 className="fw-bold">Contact Us</h1>
          <p className="text-muted">
            Have questions about courses or learning? We're here to help.
          </p>
        </div>

        <Row className="g-4">
          <Col md={5}>
            <Card className="contact-info-card border-0 p-4 h-100">
              <h3 className="fw-bold mb-4">Get In Touch</h3>

              <div className="d-flex align-items-center mb-4">
                <FaEnvelope size={22} className="contact-icon me-3"  />

                <div>
                  <h6 className="mb-1">Email</h6>
                  <p className="text-muted mb-0">
                    support@learnhub.com
                  </p>
                </div>
              </div>

              <div className="d-flex align-items-center mb-4">
                <FaPhoneAlt size={22}className="contact-icon me-3"  />

                <div>
                  <h6 className="mb-1">Phone</h6>
                  <p className="text-muted mb-0">
                    +91 98765 43210
                  </p>
                </div>
              </div>

              <div className="d-flex align-items-center">
                <FaEnvelope size={22} className="contact-icon me-3" />
                <div>
                  <h6 className="mb-1">Address</h6>
                  <p className="text-muted mb-0">
                    Haryana, India
                  </p>
                </div>
              </div>
            </Card>
          </Col>

          <Col md={7}>
            <Card className="contact-form-card border-0 p-4">
              <h3 className="fw-bold mb-4">
                Send Us a Message
              </h3>

              <Form onSubmit={handleSubmit}>
                <Row>
                  <Col md={6}>
                    <Form.Group className="mb-3">
                      <Form.Label>Name</Form.Label>

                      <Form.Control
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="Enter your name"
                        isInvalid={!!errors.name}
                      />

                      <Form.Control.Feedback type="invalid">
                        {errors.name}
                      </Form.Control.Feedback>
                    </Form.Group>
                  </Col>

                  <Col md={6}>
                    <Form.Group className="mb-3">
                      <Form.Label>Email</Form.Label>

                      <Form.Control
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="Enter your email"
                        isInvalid={!!errors.email}
                      />

                      <Form.Control.Feedback type="invalid">
                        {errors.email}
                      </Form.Control.Feedback>
                    </Form.Group>
                  </Col>
                </Row>

                <Form.Group className="mb-3">
                  <Form.Label>Subject</Form.Label>

                  <Form.Control
                    type="text"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    placeholder="Enter subject"
                    isInvalid={!!errors.subject}
                  />

                  <Form.Control.Feedback type="invalid">
                    {errors.subject}
                  </Form.Control.Feedback>
                </Form.Group>

                <Form.Group className="mb-4">
                  <Form.Label>Message</Form.Label>

                  <Form.Control
                    as="textarea"
                    rows={5}
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Write your message..."
                    isInvalid={!!errors.message}
                  />

                  <Form.Control.Feedback type="invalid">
                    {errors.message}
                  </Form.Control.Feedback>
                </Form.Group>

                <CustomButton
                  text="Send Message"
                  type="submit"
                  className="customButton"
                />
              </Form>
            </Card>
          </Col>
        </Row>
      </Container>

      <Footer />
    </>
  );
};