import React, { useState } from "react";
import theme_pattern from "../../assets/theme_pattern.svg";
import "./projects.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronRight,
  faChevronLeft,
} from "@fortawesome/free-solid-svg-icons";

import { Link } from "react-router-dom";

const Projects = (props) => {
  const [activeSlide, setactiveSlide] = useState(props.activeSlide);

  const next = () =>
    activeSlide < props.data.length - 1 && setactiveSlide(activeSlide + 1);

  const prev = () => activeSlide > 0 && setactiveSlide(activeSlide - 1);

  const getStyles = (index) => {
    if (activeSlide === index)
      return {
        opacity: 1,
        transform: "translateX(0px) translateZ(0px) rotateY(0deg)",
        zIndex: 10,
      };
    else if (activeSlide - 1 === index)
      return {
        opacity: 1,
        transform: "translateX(-240px) translateZ(-400px) rotateY(35deg)",
        zIndex: 9,
      };
    else if (activeSlide + 1 === index)
      return {
        opacity: 1,
        transform: "translateX(240px) translateZ(-400px) rotateY(-35deg)",
        zIndex: 9,
      };
    else if (activeSlide - 2 === index)
      return {
        opacity: 1,
        transform: "translateX(-480px) translateZ(-500px) rotateY(35deg)",
        zIndex: 8,
      };
    else if (activeSlide + 2 === index)
      return {
        opacity: 1,
        transform: "translateX(480px) translateZ(-500px) rotateY(-35deg)",
        zIndex: 8,
      };
    else if (index < activeSlide - 2)
      return {
        opacity: 0,
        transform: "translateX(-480px) translateZ(-500px) rotateY(35deg)",
        zIndex: 7,
      };
    else if (index > activeSlide + 2)
      return {
        opacity: 0,
        transform: "translateX(480px) translateZ(-500px) rotateY(-35deg)",
        zIndex: 7,
      };
  };
  return (
    <div className="d-flex align-items-center flex-column py-5" id="project">
      <div className="title mb-5 ">
        <h1>Projects</h1>
        <img src={theme_pattern} alt="" />
      </div>
      <div className="container-fluid">
        {/* carousel */}
        <div className="slideC">
          {props.data.map((item, i) => (
            <React.Fragment key={item.id}>
              <div
                className="slide"
                style={{
                  background: item.bgColor,
                  boxShadow: `0 5px 20px ${item.bgColor}30`,
                  ...getStyles(i),
                }}
              >
                <SliderContent {...item} />
              </div>
              <div
                className="reflection"
                style={{
                  background: `linear-gradient(to bottom, ${item.bgColor}40, transparent)`,
                  ...getStyles(i),
                }}
              />
            </React.Fragment>
          ))}
        </div>
        {/* carousel */}

        <div className="d-flex justify-content-center ">
          <div className="btns">
            <FontAwesomeIcon
              className="btn fs-4"
              onClick={prev}
              icon={faChevronLeft}
              color="#fff"
              size="2x"
            />
            <FontAwesomeIcon
              className="btn fs-4"
              onClick={next}
              icon={faChevronRight}
              color="#fff"
              size="2x"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

const SliderContent = (props) => {
  return (
    <div className="sliderContent">
      
      <a href={props.url} target="blank" className="text-decoration-none">
        <div
          className="card p-0 bg-transparent border-0"
          style={{ width: "100%" }}
        >
          <img
            src={props.icon}
            className="card-img-top px-3 "
            alt={props.title}
          />
          <div className="card-body">
            <h6 className="card-title">{props.title}</h6>
            <p className="card-text" style={{ fontSize: "10px" }}>
              {props.desc}
            </p>
          </div>
        </div>
      </a>
    </div>
  );
};

export default Projects;
