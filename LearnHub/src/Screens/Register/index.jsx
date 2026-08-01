import { Navb } from "../../Components/Navb";
import { Container, Form, Row, Col } from "react-bootstrap";
import { Formik } from "formik";
import * as Yup from "yup";
import { Link } from "react-router-dom";
import loginPage from "../../assets/videos/loginPage.mp4";
import API from "../../api/authApi";
import "../../assets/css/responsive.css";
import "../../assets/css/login.css";
import Footer from "../../Components/Footer";

export const Register = () => {
  const registerSchema = Yup.object().shape({
    name: Yup.string()
      .trim()
      .min(3, "Name must be at least 3 characters")
      .required("Name is required"),

    email: Yup.string()
      .trim()
      .email("Please enter a valid email")
      .required("Email is required"),

    password: Yup.string()
      .min(6, "Password must be at least 6 characters")
      .required("Password is required"),

    confirmPassword: Yup.string()
      .oneOf([Yup.ref("password")], "Passwords must match")
      .required("Confirm password is required"),
  });

 const handleRegister = async (values, { resetForm }) => {
  try {
    const response = await API.post("/auth/register", {
      name: values.name,
      email: values.email,
      password: values.password,
    });

    console.log("Response:", response.data);

    resetForm();
  } catch (error) {
    console.log("Register Error:", error.response?.data);
  }
};

  return (
    <>
      <Navb />

      <Container fluid className="login-page p-0">
        <video
          className="login-bg-video"
          autoPlay
          loop
          muted
          playsInline
        >
          <source src={loginPage} type="video/mp4" />
        </video>

        <div className="login-overlay" />

        <div className="login-form">
          <h2 className="text-center mb-1" style={{color:"#7C3AED"}}>Create Account</h2>

          <p className="text-center login-subtitle mb-1">
            Register to start your learning journey
          </p>

          <Formik
            initialValues={{
              name: "",
              email: "",
              password: "",
              confirmPassword: "",
            }}
            validationSchema={registerSchema}
            onSubmit={handleRegister}
          >
            {({
              values,
              errors,
              touched,
              handleChange,
              handleBlur,
              handleSubmit,
              isSubmitting,
            }) => (
              <Form onSubmit={handleSubmit}>
                <Form.Group className="mb-2">
                  <Form.Label>Full Name</Form.Label>

                  <Form.Control
                    type="text"
                    name="name"
                    placeholder="Enter your full name"
                    value={values.name}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    isInvalid={touched.name && !!errors.name}
                  />

                  <Form.Control.Feedback type="invalid">
                    {errors.name}
                  </Form.Control.Feedback>
                </Form.Group>

                <Form.Group className="mb-2">
                  <Form.Label>Email Address</Form.Label>

                  <Form.Control
                    type="email"
                    name="email"
                    placeholder="Enter your email"
                    value={values.email}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    isInvalid={touched.email && !!errors.email}
                  />

                  <Form.Control.Feedback type="invalid">
                    {errors.email}
                  </Form.Control.Feedback>
                </Form.Group>

                <Form.Group className="mb-2">
                  <Form.Label>Password</Form.Label>

                  <Form.Control
                    type="password"
                    name="password"
                    placeholder="Enter your password"
                    value={values.password}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    isInvalid={touched.password && !!errors.password}
                  />

                  <Form.Control.Feedback type="invalid">
                    {errors.password}
                  </Form.Control.Feedback>
                </Form.Group>

                <Form.Group className="mb-2">
                  <Form.Label>Confirm Password</Form.Label>

                  <Form.Control
                    type="password"
                    name="confirmPassword"
                    placeholder="Confirm your password"
                    value={values.confirmPassword}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    isInvalid={
                      touched.confirmPassword && !!errors.confirmPassword
                    }
                  />

                  <Form.Control.Feedback type="invalid">
                    {errors.confirmPassword}
                  </Form.Control.Feedback>
                </Form.Group>

                <button
                  type="submit"
                  className="login-btn"
                  disabled={isSubmitting}
                >
                  Register
                </button>

                <p className="text-center register-text mt-4 mb-0">
                  Already have an account?{" "}
                  <Link  as={Link} to="/login" 
                  style={{
                    textDecoration:"none",
                    color:"#7C3AED"
                  }}><b>Login</b></Link>
                </p>
              </Form>
            )}
          </Formik>
        </div>
      </Container>
    </>
  );
};