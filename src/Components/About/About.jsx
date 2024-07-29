import React from 'react';
import './About.css';
import theme_pattern from "../../assets/theme_pattern.svg";
import about_img from "../../assets/about-img.jpg";

const About = () => {
  return (
    <div className="about container my-5 d-flex align-items-center flex-column" id='about'>
      <div className="title mb-4 ">
        <h1>About Me</h1>
        <img src={theme_pattern} alt="" />
      </div>
      <div className="container">
        <div className="row my-1 g-5">
          <div className="col-12 col-md-6 about-left text-center ">
            <img src={about_img} alt="" className='img-fluid'   />
          </div>
          <div className="col-12 col-md-6">
            <div className="about-para text-justify ">
              <p>
                I am currently pursuing a Master of Computer Application ( MCA )
                at G. H. Raisoni Institute of Engineering and Technology, Nagpur,
                building upon my strong foundation in the field. Previously, I
                successfully completed my Bachelor of Computer Application ( BCA )
                from RTMNU, Nagpur, where I honed my fundamental skills in the IT
                domain.
              </p>
              <p>
                Driven by my passion for technology, I am actively seeking
                opportunities within the dynamic field of IT. Proficient in a
                variety of web development languages including HTML, CSS, and
                JavaScript, as well as in PHP, I possess a strong understanding of
                the intricacies of web development. Additionally, my proficiency
                extends to programming languages such as C++ and Python, allowing
                me to approach problem-solving with a versatile and comprehensive
                skill set.
              </p>
              <p>
                My academic journey has instilled in me a deep commitment to
                excellence and a drive for continuous learning. With a keen eye
                for detail and a proactive approach, I am dedicated to delivering
                innovative solutions and contributing to the advancement of the IT
                industry.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About
