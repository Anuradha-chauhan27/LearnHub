import LandPage from "../../assets/img/LandingPage.png";
import { Link } from "react-router-dom";
import { Container } from "react-bootstrap";
import { CustomButton } from "../../Components/CustomButton";
import '../../assets/css/buttonCss.css';
import { useNavigate } from "react-router-dom";

export const LandingPage = () => {

  const navigate = useNavigate()
  return (
    <Container
      fluid
      className="landing-page p-0 position-relative"
      style={{
        height: "100vh",
        overflow: "hidden",
      }}
    >
      <img
        src={LandPage}
        alt="LearnHub Background"
        style={{
          width: "100%",
          height: "100%",
          objectFit: "cover",
        }}
      />

      <div
        style={{
          position: "absolute",
          inset: 0,
          background: "rgba(0,0,0,0.35)",
        }}
      ></div>

      <div
        className="position-absolute d-flex align-items-center"
        style={{
          inset: 0,
          zIndex: 2,
        }}
      >
        <div
          className="text-white px-4"
          style={{
            maxWidth: "650px",
            marginLeft: "8%",
          }}
        >
          <h1
            className="fw-bold"
            style={{
              fontSize: "clamp(1rem, 4vw, 4rem)",
              lineHeight: "1",
            }}
          >
            Every Lesson,
            <br />
            One Step Closer to Success.
          </h1>

          <hr
            style={{
              width: "70%",
              height: "4px",
              border: "none",
              background:
                "linear-gradient(90deg,#7C3AED,#A855F7,#ffffff)",
              borderRadius: "10px",
              opacity: 1,
              margin: "25px 0",
            }}
          />

          <CustomButton
            onClick={() => navigate("/home")}
            className="landedButton"
            text="Get Started"
          />
        </div>
      </div>
    </Container>
  );
};