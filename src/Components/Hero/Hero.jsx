import React from "react";
import "./Hero.css";
import profile_img from "../../assets/profile-img.png";
import AnchorLink from "react-anchor-link-smooth-scroll";
import { ReactTyped } from "react-typed";

const Hero = () => {
  return (
    <div>
      <div
        className="container d-flex align-items-center flex-column mt-5"
        id="home"
      >
        <div className="profile-img">
          <img
            src={profile_img}
            className=" rounded-circle"
            alt=""
            width={250}
          />
        </div>
        <div className="hero-title m-4 text-center">
          <h1>
            <span>I'm Aniket Ikhar</span>
          </h1>
        </div>
        <div className="profession">
          <h2>
            <ReactTyped
              strings={[
                "Web Developer",
                "MERN Stack Developer",
                "FrontEnd Developer",
                "BackEnd Developer",
            
              ]}
              typeSpeed={100}
              loop
            />
          </h2>
        </div>

        <div className="summary  ">
          <p className="mx-auto my-4">
            Self-motivated and hardworking fresher seeking an opportunity to
            work in a challenging environment to prove my skills and utilise my
            knowledge & intelligence in the growth of the organisation.
          </p>
        </div>
        <div className="hero-action">
          <div className="hero-connect">
            <AnchorLink className="anchor-link" offset={50} href="#contact">
              Connect with me
            </AnchorLink>
          </div>
          <div className="hero-resume">
            <a
              href="https://drive.google.com/file/d/1VNeuUc9qBhFOb64W3antxqDvi0RFF-kE/view?usp=sharing"
              target="blank"
            >
              My Resume
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
