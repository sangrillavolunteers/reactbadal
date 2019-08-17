import React from "react";
import logo from "../../assets/website-icon-same.png";

function Logo() {
  return (
    <img
      src={logo}
      style={{
        position: "relative",
        width: "5%",
        bottom: "40px",
        left: "-45%"
      }}
    />
  );
}

export default Logo;
