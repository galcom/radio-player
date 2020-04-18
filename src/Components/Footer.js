import React from "react";
import "./Footer.css";

function Footer(props) {
  return (
    <React.Fragment>
      <div
        style={{
          color: props.foregroundColor,
        }}
      >
        <span className="text-contents">
          a{" "}
          <a href="https://faithtech.com/">
            <strong>FAITH</strong>TECH
          </a>{" "}
          product
        </span>
        <span className="text-contents">
          hosted by{" "}
          <strong>
            <a href="http://www.galcom.org/">GALCOM</a>
          </strong>
        </span>
      </div>
    </React.Fragment>
  );
}

export default Footer;
