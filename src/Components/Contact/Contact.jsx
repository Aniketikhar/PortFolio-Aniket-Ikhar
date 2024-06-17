import React from "react";
import "./Contact.css";
import theme_pattern from "../../assets/theme_pattern.svg";
import mail from "../../assets/mail_icon.svg";
import call from "../../assets/call_icon.svg";
import location from "../../assets/location_icon.svg";

const Contact = () => {
  const [result, setResult] = React.useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "497433c2-de7b-43d4-8797-eb5412cb1bcb");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully");
      event.target.reset();
      alert("form submit succcessfully");
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };
  return (
    <div className="container d-flex align-items-center flex-column py-5">
      <div className="title mb-4 ">
        <h1>Get In Touch</h1>
        <img src={theme_pattern} alt="" />
      </div>
      <div className="container my-5">
        <div className="row g-3">
          <div className="col-12 col-md-6 contact-left">
            <h1>Let's Talk</h1>
            <p>
              I am always open to discussing new opportunities, collaborations,
              or any interesting projects. Feel free to reach out to me through
              any of the following ways:
            </p>
            <div className="contact-details">
              <div className="contact-detail d-flex m-3">
                <img src={mail} alt="" />
                <p className="ps-4">Aniketikhar88@gmail.com</p>
              </div>
              <div className="contact-detail d-flex m-3">
                <img src={call} alt="" className="pe-1" />
                <p className="ps-4">+91 9518926199</p>
              </div>
              <div className="contact-detail d-flex m-3">
                <img src={location} alt="" className="pe-2" />
                <p className="ps-4">Nagpur</p>
              </div>
            </div>
          </div>
          <div className="col-12 col-md-6">
            <form onSubmit={onSubmit} className="contact-right">
              <label htmlFor="">Your Name</label>
              <input
                type="text"
                name="name"
                id="name "
                placeholder="Enter your name"
                className="form-control bg-dark text-light mb-3 mt-1"
              />
              <label htmlFor="">Your Email</label>
              <input
                type="email"
                name="email"
                id="email "
                placeholder="Enter your email"
                className="form-control bg-dark text-light mb-3 mt-1"
              />
              <label htmlFor="">write your message here</label>
              <textarea name="message" id="message" rows="8" className="form-control bg-dark text-light mb-3 mt-1"></textarea>
              <button className="contact-submit" >Submit Now</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
