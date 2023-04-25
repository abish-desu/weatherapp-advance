import React from "react";
import { BsLinkedin } from "react-icons/bs";
import { SiDiscord } from "react-icons/si";

const Social = () => {
  return (
    <>
      <div className="social">
        <div className="ver"></div>
        <a
          href="https://discord.com/users/697472816471212103"
          target="blank"
          className="icon"
        >
          <SiDiscord />
        </a>
        <a className="icon">
          <BsLinkedin />
        </a>
        <div className="ver"></div>
      </div>
    </>
  );
};

export default Social;
