import React from "react";
import "./Skill.css";
import theme_pattern from "../../assets/theme_pattern.svg";
import { skills } from "./Skills";
import { motion } from "framer-motion";
import { fadeIn } from "../../varients";

const Skill = () => {
  return (
    <div className="container d-flex align-items-center flex-column " id="skills">
      <div className="title mb-4 ">
        <h1>My Skills</h1>
        <img src={theme_pattern} alt="" />
      </div>
      <motion.div 
      variants={fadeIn("up", 0.9)}
      initial="hidden"
      whileInView={"show"}
      viewport={{ once: false, amount: 0.9 }}
      className="d-flex justify-content-center flex-wrap">
        {
          skills.map((skill, index) => (
            <div key={index} className="col-6 col-md-4">
              <div className="skill rounded-3 m-2 p-2 m-md-4 p-md-4 bg-dark shadow">
                <div className="d-flex justify-content-between">
                  <p className="fw-bold">{skill.skill}</p>
                  <span>{skill.level}%</span>
                </div>
                <div className="progress">
                  <div
                    className="progress-bar bg-info"
                    role="progressbar"
                    style={{ width: skill.level + "%" }}
                    aria-valuenow={skill.level}
                    aria-valuemin="0"
                    aria-valuemax="100"
                  ></div>
                </div>
              </div>
            </div>
          ))
        }
      </motion.div>


      {/* <div className="row w-100 text-center ">
        <div className="col-6 col-md-4">
          <div className="skill rounded-3 m-4 p-4 bg-dark shadow">
            <div className="d-flex justify-content-between">
              <h5>HTML & CSS</h5>
              <span>90%</span>
            </div>
            <div className="progress">
              <div
                className="progress-bar bg-info"
                role="progressbar"
                style={{ width: "90%" }}
                aria-valuenow="95"
                aria-valuemin="0"
                aria-valuemax="100"
              ></div>
            </div>
          </div>
          <div className="skill rounded-3 m-4 p-4 bg-dark shadow">
            <div className="d-flex justify-content-between">
              <h5>Bootstrap</h5>
              <span>80%</span>
            </div>
            <div className="progress">
              <div
                className="progress-bar bg-info"
                role="progressbar"
                style={{ width: "80%" }}
                aria-valuenow="95"
                aria-valuemin="0"
                aria-valuemax="100"
              ></div>
            </div>
          </div>
          <div className="skill rounded-3 m-4  p-4 bg-dark shadow">
            <div className="d-flex justify-content-between">
              <h5>JavaScript</h5>
              <span>80%</span>
            </div>
            <div className="progress">
              <div
                className="progress-bar bg-info"
                role="progressbar"
                style={{ width: "80%" }}
                aria-valuenow="95"
                aria-valuemin="0"
                aria-valuemax="100"
              ></div>
            </div>
          </div>
          
        </div>
        <div className="col-6 col-md-4">
        
          <div className="skill rounded-3 m-4 p-4 bg-dark shadow">
            <div className="d-flex justify-content-between">
              <h5>ReactJS</h5>
              <span>70%</span>
            </div>
            <div className="progress">
              <div
                className="progress-bar bg-info"
                role="progressbar"
                style={{ width: "70%" }}
                aria-valuenow="70"
                aria-valuemin="0"
                aria-valuemax="100"
              ></div>
            </div>
          </div>
          <div className="skill rounded-3 m-4  p-4 bg-dark shadow">
            <div className="d-flex justify-content-between">
              <h5>Git & GitHub</h5>
              <span>70%</span>
            </div>
            <div className="progress">
              <div
                className="progress-bar bg-info"
                role="progressbar"
                style={{ width: "70%" }}
                aria-valuenow="70"
                aria-valuemin="0"
                aria-valuemax="100"
              ></div>
            </div>
          </div>
          <div className="skill rounded-3 m-4  p-4 bg-dark shadow">
            <div className="d-flex justify-content-between">
              <h5>Problem Solving</h5>
              <span>50%</span>
            </div>
            <div className="progress">
              <div
                className="progress-bar bg-info"
                role="progressbar"
                style={{ width: "50%" }}
                aria-valuenow="50"
                aria-valuemin="0"
                aria-valuemax="100"
              ></div>
            </div>
          </div>
          
        </div>
        <div className="col-6 col-md-4">
          <div className="skill rounded-3 m-4  p-4 bg-dark shadow">
            <div className="d-flex justify-content-between">
              <h5>NodeJS</h5>
              <span>50%</span>
            </div>
            <div className="progress">
              <div
                className="progress-bar bg-info"
                role="progressbar"
                style={{ width: "50%" }}
                aria-valuenow="60"
                aria-valuemin="0"
                aria-valuemax="100"
              ></div>
            </div>
          </div>
          <div className="skill rounded-3 m-4  p-4 bg-dark shadow">
            <div className="d-flex justify-content-between">
              <h5>ExpressJS</h5>
              <span>50%</span>
            </div>
            <div className="progress">
              <div
                className="progress-bar bg-info"
                role="progressbar"
                style={{ width: "50%" }}
                aria-valuenow="60"
                aria-valuemin="0"
                aria-valuemax="100"
              ></div>
            </div>
          </div>
          <div className="skill rounded-3 m-4  p-4 bg-dark shadow">
            <div className="d-flex justify-content-between">
              <h5>MongoDB</h5>
              <span>40%</span>
            </div>
            <div className="progress">
              <div
                className="progress-bar bg-info"
                role="progressbar"
                style={{ width: "40%" }}
                aria-valuenow="70"
                aria-valuemin="0"
                aria-valuemax="100"
              ></div>
            </div>
          </div>
          
          
        </div>
      </div> */}
    </div>
  );
};

export default Skill;
