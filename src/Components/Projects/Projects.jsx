import React from "react";
import theme_pattern from "../../assets/theme_pattern.svg";
import project_1 from "../../assets/project_1.svg";
import "./projects.css";

const Projects = () => {
  return (
    <div className="container d-flex align-items-center flex-column py-5">
      <div className="title mb-4 ">
        <h1>Projects</h1>
        <img src={theme_pattern} alt="" />
      </div>
      <div className="container">
        <div className="row g-5">
          <div className="col-12 col-md-6">
            <img src={project_1} className="img-fluid" alt="" />
          </div>
          <div className="col-12 col-md-6">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nobis sit at nostrum dolores amet soluta voluptatibus odio corrupti iste necessitatibus!
          </div>
        </div>
        <div className="row g-5 my-4">
          <div className="col-12 col-md-6">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Laboriosam asperiores in aperiam dolorum corrupti amet ipsa. Ipsum eligendi voluptatum illum.
          </div>
          <div className="col-12 col-md-6">
          <img src={project_1} className="img-fluid" alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
