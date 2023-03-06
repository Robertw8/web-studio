import React from "react";

function Hero() {
  function handleClick(e) {
    console.log("+");
  }

  return (
    <>
      <h1 className="mainHeading">
        Effective Solutions<br></br> for Your Business
      </h1>
      <button className="mainBtn" onClick={handleClick}>
        Order Service
      </button>
    </>
  );
}

export default Hero;
