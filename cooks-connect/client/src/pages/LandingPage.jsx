import CustomHeader from "../layout/Header";
import { useState } from "react";

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
      <h1>Cooks Connect</h1>
      <p>To be implemented soon...</p>
      <a href="./recipes">Try the beta</a>
    </>
  );
};

export default LandingPage;
