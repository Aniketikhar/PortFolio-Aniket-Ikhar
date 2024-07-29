import React from "react";
import "./About.css";
import theme_pattern from "../../assets/theme_pattern.svg";
import about_img from "../../assets/about-img.jpg";

const About = () => {
  return (
    <div
      className="about container my-5 d-flex align-items-center flex-column"
      id="about"
    >
      <div className="title mb-4 ">
        <h1>About Me</h1>
        <img src={theme_pattern} alt="" />
      </div>
      <div className="container">
        <div className="row my-1 g-5">
          <div className="col-12 col-md-6 about-left text-center ">
            <img src={about_img} alt="" className="img-fluid" />
          </div>
          <div className="col-12 col-md-6">
            <div className="about-para text-justify ">
              <p>
                I recently completed my Master of Computer Applications (MCA)
                from G H Raisoni Institute of Engineering and Technology,
                Nagpur. During my fourth semester, I undertook a full stack
                developer internship, which significantly enhanced my skills in
                ReactJS, Node.js, MongoDB, and Express.js. Throughout my
                academic journey and internship, I have successfully created
                several projects, including a recipe web application, a crypto
                tracker, an ecommerce web application, and a URL shortener.
              </p>
              <p>
                My hands-on experience with these technologies has not only
                strengthened my technical expertise but also honed my
                problem-solving abilities. I am known for being consistent and
                focused on my work, ensuring that I deliver high-quality
                results. Additionally, I am a good team player, consistently
                contributing to collaborative projects and achieving common
                goals with my peers.
              </p>
              <p>
                In addition to my academic and project experience, I have earned
                several certifications:
                <ul>
                  <li>Certification by Google for Python</li>
                  <li>A 5-star Gold badge in C++ on HackerRank</li>
                  <li>Certification by HackerRank for Problem Solving</li>
                </ul>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
