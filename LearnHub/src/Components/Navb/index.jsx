import { Link, useNavigate } from "react-router-dom";
import { Container, Navbar, Nav } from "react-bootstrap";
import logo from '../../assets/img/logo.png'
import '../../assets/css/navb.css'
import { useState, useEffect } from "react";
import { FaBell } from "react-icons/fa";

export const Navb = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState(null)

  const token = localStorage.getItem("token");

  useEffect(() => {
    const storedUser = JSON.parse(localStorage.getItem("user"));

    if (storedUser) {
      setUser(storedUser);
    }
  }, []);

  const role = user?.role;

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");

    navigate("/login");
  };
  return (
    <Navbar bg="black" variant="dark" expand="lg" className="shadow-sm py-2"
    // style={{
    //   position:"fixed", 
    //   top:0,
    //   width:"100%"
    // }}
    >
      <Container fluid >
        <Navbar.Brand as={Link} to="/home">
          <img
            src={logo}
            alt="LearnHub Logo"
            className="img-fluid"
            style={{
              maxWidth: "220px",
              width: "100%",
              height: "auto",
            }}
          />
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="navbar-nav" />

        <Navbar.Collapse id="navbar-nav">
          <Nav className="ms-auto text-center">

            {/* Home sabke liye */}
            <Nav.Link as={Link} to="/home" className="nav-item-link">
              <b>Home</b>
            </Nav.Link>

            {/* Guest */}
            {!token && (
              <>
                <Nav.Link as={Link} to="/courses" className="nav-item-link">
                  <b>Courses</b>
                </Nav.Link>

                <Nav.Link as={Link} to="/login" className="nav-item-link">
                  <b>Login</b>
                </Nav.Link>

                <Nav.Link as={Link} to="/register" className="nav-item-link">
                  <b>Signup</b>
                </Nav.Link>
              </>
            )}

            {/* Student */}
            {token && role === "student" && (
              <>
                <Nav.Link as={Link} to="/student-dashboard" className="nav-item-link">
                  <b>Dashboard</b>
                </Nav.Link>

                <Nav.Link as={Link} to="/courses" className="nav-item-link">
                  <b>Courses</b>
                </Nav.Link>

                <Nav.Link as={Link} to="/myCourses" className="nav-item-link">
                  <b>My Courses</b>
                </Nav.Link>

                <Nav.Link as={Link} to="/profile" className="nav-item-link">
                  <b>Profile</b>
                </Nav.Link>

                <Nav.Link as={Link} to="/notifications" className="nav-item-link notification-link">
                  <div className="notification-icon">
                    <FaBell />
                    <span className="notification-badge">1</span>
                  </div>
                </Nav.Link>
              </>
            )}

            {/* instructor */}
            {token && role === "instructor" && (
              <>
                <Nav.Link as={Link} to="/teacher-dashboard" className="nav-item-link">
                  <b>Dashboard</b>
                </Nav.Link>

                <Nav.Link as={Link} to="/create-course" className="nav-item-link">
                  <b>Create Course</b>
                </Nav.Link>

                <Nav.Link as={Link} to="/profile" className="nav-item-link">
                  <b>Profile</b>
                </Nav.Link>
              </>
            )}

            {/* Admin */}
            {token && role === "admin" && (
              <>
                <Nav.Link
                  as={Link}
                  to="/admin/dashboard"
                  className="nav-item-link"
                >
                  <b>Dashboard</b>
                </Nav.Link>

                <Nav.Link
                  as={Link}
                  to="/admin/users"
                  className="nav-item-link"
                >
                  <b>Students</b>
                </Nav.Link>

                <Nav.Link
                  as={Link}
                  to="/admin/instructors"
                  className="nav-item-link"
                >
                  <b>Instructors</b>
                </Nav.Link>

                <Nav.Link
                  as={Link}
                  to="/admin/courses"
                  className="nav-item-link"
                >
                  <b>Courses</b>
                </Nav.Link>

                <Nav.Link
                  as={Link}
                  to="/admin/courses/add"
                  className="nav-item-link"
                >
                  <b>Add Course</b>
                </Nav.Link>
              </>
            )}

            {/* Common */}
            {token && (
              <>
                <Nav.Link onClick={handleLogout} className="nav-item-link">
                  <b>Logout</b>
                </Nav.Link>

                <div className="user-profile-pill">
                  <div className="user-avatar">
                    {user?.name?.charAt(0).toUpperCase()}
                  </div>
                </div>
              </>
            )}

          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};