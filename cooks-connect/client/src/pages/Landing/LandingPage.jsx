import CustomHeader from "../../layout/Header";
import { useState, useEffect } from "react";
import "./LandingPage.css";
import { Container, Row, Button } from "react-bootstrap";
import CustomFooter from "../../layout/Footer";
import { theme } from "antd";

const LandingPage = () => {
  const [isSpinning, setIsSpinning] = useState(false);
  const [weatherConditions, setWeatherConditions] = useState();

  const {
    token: { colorBgContainer },
  } = theme.useToken();

  const toggleSpin = () => {
    setIsSpinning(!isSpinning);
    if (!isSpinning) {
      setTimeout(() => setIsSpinning(false), 1000); // Adjust the time as needed
    }
  };

  useEffect(() => {
    //weather api
    const url =
      "https://yahoo-weather5.p.rapidapi.com/weather?location=boston&format=json&u=f";
    const options = {
      method: "GET",
      headers: {
        "X-RapidAPI-Key": import.meta.env.VITE_WEATHER_KEY,
        "X-RapidAPI-Host": "yahoo-weather5.p.rapidapi.com",
      },
    };
    const getWeather = async () => {
      const response = await fetch(url, options);

      if (response.ok) {
        const data = await response.json();
        console.log(data.current_observation.condition);
        setWeatherConditions(data.current_observation.condition);
        return;
      }
    };
    getWeather();
  }, []);

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
        {weatherConditions ? (
          <div
            style={{
              backgroundColor: colorBgContainer,
              color: "black",
              width: "20vw",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              margin: "0 37vw",
              borderRadius: "10px",
              border: "dashed black",
            }}
          >
            <h3>{weatherConditions.text}</h3>
            <p>{weatherConditions.temperature}</p>
          </div>
        ) : (
          <p>Fetching weather...</p>
        )}
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
      <div
        style={{
          maringTop: "20vh",
          position: "relative",
          bottom: 0,
          width: "100%",
        }}
      >
        <CustomFooter />
      </div>
    </>
  );
};

export default LandingPage;
