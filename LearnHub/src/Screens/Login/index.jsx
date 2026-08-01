import { Navb } from "../../Components/Navb";
import { Container, Form } from "react-bootstrap";
import { Formik } from "formik";
import * as Yup from "yup";
import { Link, useNavigate } from "react-router-dom";
import loginPage from "../../assets/videos/loginPage.mp4";
import API from '../../api/authApi';
import "../../assets/css/responsive.css";
import "../../assets/css/login.css";

export const Login = () => {
  const navigate = useNavigate();
  const loginSchema = Yup.object().shape({
    email: Yup.string()
      .trim()
      .email("Please enter a valid email")
      .required("Email is required"),

    password: Yup.string()
      .min(6, "Password must be at least 6 characters")
      .required("Password is required"),
  });

  const handleLogin = async (values, { resetForm }) => {
  try {
    const { data } = await API.post("/auth/login", values);

    localStorage.setItem("token", data.token);
    localStorage.setItem("user", JSON.stringify(data.user));

    resetForm();

    switch (data.user.role) {
      case "admin":
        navigate("/admin/dashboard");
        break;

      case "instructor":
        navigate("/instructor-dashboard");
        break;

      default:
        navigate("/student-dashboard");
    }

  } catch (error) {
    console.log(error);

    alert(error.response?.data?.message || "Login Failed");
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
          <h2 className="text-center mb-2" style={{ color: "#7C3AED" }}><b>Welcome Back</b></h2>

          <p className="text-center login-subtitle mb-4">
            Login to continue your learning
          </p>

          <Formik
            initialValues={{
              email: "",
              password: "",
            }}
            validationSchema={loginSchema}
            onSubmit={handleLogin}
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
                <Form.Group className="mb-3">
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

                <Form.Group className="mb-3">
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

                <div className="text-end mb-3">
                  <span className="forgot-password">
                    Forgot Password?
                  </span>
                </div>

                <button
                  type="submit"
                  className="login-btn"
                  disabled={isSubmitting}
                >
                  Login
                </button>

                <p className="text-center register-text mt-4 mb-0">
                  Don't have an account?{" "}
                  <Link as={Link} to="/register"
                    style={{
                      textDecoration: "none",
                      color: "#7C3AED"
                    }}><b>Register</b></Link>
                </p>
              </Form>
            )}
          </Formik>
        </div>
      </Container>
    </>
  );
};