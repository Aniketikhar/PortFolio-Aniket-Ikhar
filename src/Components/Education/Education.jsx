import React from "react";
import "./Education.css";
import theme_pattern from "../../assets/theme_pattern.svg";

const Education = () => {
  return (
    <>
      <div
        className="container d-flex align-items-center flex-column "
        id="skills"
      >
        <div className="title mb-4 ">
          <h1>Education</h1>
          <img src={theme_pattern} alt="" />
        </div>
        <div className="row g-5">
          <div className="col-12 col-md-6 p-5">
            <section>
              <div className="rt-container">
                <div className="col-rt-12">
                  <div className="Scriptcontent">
                  <h3 className="pb-4">Education</h3>
                    {/* Stepper HTML */}
                    <div className="step step-active">
                      <div>
                        <div className="circle">
                          <i className="fa fa-check" />
                        </div>
                      </div>
                      <div>
                        <div className="title">Master Of  Computer Application     ( MCA )</div>
                        <div className="caption">
                          <p>G H Raisoni Institute of Engineering and Technology, Nagpur <br/>
                           CGPA - 8.81 </p>
                        </div>
                      </div>
                    </div>
                    <div className="step ">
                      <div>
                        <div className="circle">3</div>
                      </div>
                      <div>
                        <div className="title">Bachelor of Computer Applications ( BCA ) </div>
                        <div className="caption">
                          <p>Kamala Nehru Collage Nagpur <br />
                          Percentage - 75.66 %</p>
                        </div>
                      </div>
                    </div>
                    <div className="step">
                      <div>
                        <div className="circle">2</div>
                      </div>
                      <div>
                        <div className="title">12<sup>th</sup> ( XII )</div>
                        <div className="caption">
                          <p>Nanaji Joshi Junior College Shahapur, Bhandara <br />
                          Percentage - 60 % </p>
                        </div>
                      </div>
                    </div>
                    <div className="step">
                      <div>
                        <div className="circle">1</div>
                      </div>
                      <div>
                        <div className="title">10<sup>th</sup> ( X )</div>
                        <div className="caption">
                          <p>Janata High School Mouda<br />
                          Percentage - 70 % </p>
                        </div>
                      </div>
                    </div>
                    {/* End Stepper HTML */}
                  </div>
                </div>
              </div>
            </section>
          </div>
          <div className="col-12 col-md-6 p-5">
          <section>
              <div className="rt-container">
                <div className="col-rt-12">
                  <div className="Scriptcontent">
                    <h3 className="pb-4">Experience</h3>
                    {/* Stepper HTML */}
                    <div className="step step-active">
                      <div>
                        <div className="circle">
                          <i className="fa fa-check" />
                        </div>
                      </div>
                      <div>
                        <div className="title">Full Stack Developer</div>
                        <div className="caption">
                          <p>ICEICO Technologies pvt ltd, Nagpur<br />
                            Jan 2024 - June 2024
                            </p>
                          </div>
                      </div>
                    </div>
                    
                   
                    {/* End Stepper HTML */}
                  </div>
                </div>
              </div>
            </section>
          </div>
        </div>
      </div>
    </>
  );
};

export default Education;
