import React from "react";
import "./Logo.css";

function Logo(props) {
  return <img src={props.logo} alt="logo" id="logo" />;
}

export default Logo;
