import CustomHeader from "../../layout/Header";
import { useState } from "react";
import "./LandingPage.css";
import { Container, Row, Button } from "react-bootstrap";
import CustomFooter from "../../layout/Footer";

const LandingPage = () => {
  const [isSpinning, setIsSpinning] = useState(false);

  const toggleSpin = () => {
    setIsSpinning(!isSpinning);
    if (!isSpinning) {
      setTimeout(() => setIsSpinning(false), 1000); // Adjust the time as needed
    }
  };

  return (
    <>
      <CustomHeader />
      <img
        src="https://cdn-icons-png.flaticon.com/512/4253/4253632.png"
        className={isSpinning ? "spin" : ""}
        alt="logo"
        width="200px"
        onClick={toggleSpin}
      ></img>
      <div className="intro">
        <h1>Cooks Connect</h1>
        <p>To be implemented soon...</p>
        <div className="buttonContainer">
          <a href="/login">
            <Button size="lg" className="landingbutton">
              Login
            </Button>
          </a>
          <a href="/register">
            <Button
              size="lg"
              className="landingbutton"
              variant="outline-primary"
            >
              Signup
            </Button>
          </a>
        </div>
      </div>
      <div style={{ position: "absolute", bottom: 0, width: "100%" }}>
        <CustomFooter />
      </div>
    </>
  );
};

export default LandingPage;
