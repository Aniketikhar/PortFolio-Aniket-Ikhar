import React from "react";
import "./Skill.css";
import theme_pattern from "../../assets/theme_pattern.svg";
import about_img from "../../assets/about-img.jpg";

const Skill = () => {
  return (
    <div className="container d-flex align-items-center flex-column">
      <div className="title mb-4 ">
        <h1>My Skills</h1>
        <img src={theme_pattern} alt="" />
      </div>
      <div className="row w-100 text-center">
        <div className="col-12 col-md-6">
            <div className="card">
                <div className="d-flex justify-content-between">
                    <div>
                        html
                    </div>
                    <div>
                        80%
                    </div>
                </div>
                <div>
                    <input type="range" name="level" disabled />
                </div>
                <div></div>
            </div>
        </div>
        <div className="col-12 col-md-6">
            <div>
                css
            </div>
        </div>
      </div>
    </div>
  );
};

export default Skill;
