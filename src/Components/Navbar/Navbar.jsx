import React , { useState } from 'react';
import underline from "../../assets/nav_underline.svg";
import AnchorLink from "react-anchor-link-smooth-scroll";
import './Navbar.css'

const Navbar = () => {
    const [menu, setMenu] = useState("home");
  return (
    <nav className="navbar navbar-expand-lg sticky-top  navbar-dark ">
        <div className="container py-2 navigation px-5 rounded-3">
          <a className="navbar-brand" href="#">
            ANIKET
          </a>
          
          <div
            className="collapse justify-content-center navbar-collapse"
            id="navbarTogglerDemo03"
          >
            <ul className="navbar-nav nav-menu  mb-2 mb-lg-0">
              <li>
                <AnchorLink className="anchor-link" href="#home">
                  <p onClick={() => setMenu("home")}>Home</p>
                </AnchorLink>
                {menu === "home" ? (
                  <img
                    src={underline}
                    style={{ transition: "0.5s" }}
                    alt="home"
                  />
                ) : (
                  <></>
                )}
              </li>
              <li>
                <AnchorLink className="anchor-link" offset={50} href="#about">
                  <p onClick={() => setMenu("about")}>About</p>
                </AnchorLink>
                {menu === "about" ? <img src={underline} alt="about" /> : <></>}
              </li>
              <li>
                <AnchorLink className="anchor-link" offset={50} href="#skills">
                  <p onClick={() => setMenu("skills")}>Skills</p>
                </AnchorLink>
                {menu === "skills" ? (
                  <img src={underline} alt="skills" />
                ) : (
                  <></>
                )}
              </li>
              <li>
                <AnchorLink className="anchor-link" offset={50} href="#project">
                  <p onClick={() => setMenu("project")}>Projects</p>
                </AnchorLink>
                {menu === "project" ? (
                  <img src={underline} alt="project" />
                ) : (
                  <></>
                )}
              </li>
              <li>
                <AnchorLink className="anchor-link" offset={50} href="#contact">
                  <p onClick={() => setMenu("Contact")}>Contact</p>
                </AnchorLink>
                {menu === "Contact" ? (
                  <img src={underline} alt="contact" />
                ) : (
                  <></>
                )}
              </li>
            </ul>
          </div>
          <div className="d-flex " id="right">
            <div className="nav-connect">
              <AnchorLink className="anchor-link" offset={50} href="#contact">
                Connect With Me
              </AnchorLink>
            </div>
          </div>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarTogglerDemo03"
            aria-controls="navbarTogglerDemo03"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>
        </div>
      </nav>
  )
}

export default Navbar
