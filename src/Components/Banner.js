import React from "react";
import img from "../Assets/images/technology 1.png";

function Banner() {
  return (
    <div
      className="wall"
      style={{
        position: "relative",
        background: "skyblue",
        width: "90%",
        height: "650px",
        borderRadius: "1rem",
        margin: "5% 5%",
      }}
    >
      <div
        style={{
          display: "inline-block",
          marginLeft: "150px",
          marginTop: "150px",
        }}
      >
        <p style={{ color: "#2A7CC7", fontWeight: "500" }}>SUMMER 2020</p>
        <h1>NEW COLLECTION</h1>
        <p style={{ color: "#737373" }}>
          We know how large objects will act,
          <br /> but things on a small scale
        </p>
        <button
          style={{
            backgroundColor: "#23A6F0",
            width: "221px",
            height: "62px",
            borderRadius: "0.3rem",
            color: "white",
            fontFamily: "Montserrat",
            border: "none",
            fontWeight: "700",
            fontSize: "1.5rem",
          }}
        >
          Shop Now
        </button>
      </div>
      <div
        style={{
          background:
            "radial-gradient(ellipse, white 0%, white 55%, transparent 0%, transparent 0%)",
          float: "right",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "80px -74px",
          zIndex: "10",
        }}
      >
        <img
          src={img}
          alt="model"
          style={{ width: "100%", marginTop: "5%", marginLeft: "12%" }}
        />
      </div>
    </div>
  );
}

export default Banner;
