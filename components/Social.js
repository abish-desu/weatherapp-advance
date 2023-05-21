import React from "react";
import { BsLinkedin } from "react-icons/bs";
import { SiDiscord } from "react-icons/si";
import {BsGithub} from "react-icons/bs"


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
        <a className="icon"
          target="blank"
        href="https://github.com/abish-desu">
          <BsGithub
          />
        </a>
        <a className="icon"
          target="blank"
        href="https://www.linkedin.com/in/abish-magar-01170a235/">
          <BsLinkedin />
        </a>
        <div className="ver"></div>
      </div>
    </>
  );
};

export default Social;
