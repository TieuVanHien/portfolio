import { Link } from "react-scroll";
import React, { useState } from "react";
import { Sling as Hamburger } from "hamburger-react";
import { Button } from "@mui/material";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

export const Nav = () => {
  const [open, setOpen] = useState(false);
  const [close, setClose] = useState(false);

  return (
    <section className="nav">
      <div className="container">
        <Hamburger
          size={25}
          color="white"
          rounded
          toggled={close}
          toggle={setClose}
          aria-expanded={close}
          onToggle={(toggled) => {
            if (toggled) {
              setOpen(true);
            } else {
              setOpen(false);
            }
          }}
        />
        <div className={`nav-links ${open ? "" : "closed"}`}>
          <Link
            to="home"
            className="link"
            href="#home"
            smooth={true}
            offset={0}
            spy={true}
            duration={1000}
            onClick={() => {
              setClose(false);
              setOpen(false);
            }}
          >
            Home
          </Link>
          <Link
            className="link"
            to="about"
            href="#about"
            spy={true}
            smooth={true}
            offset={0}
            duration={1000}
            onClick={() => {
              setClose(false);
              setOpen(false);
            }}
          >
            About
          </Link>
          <Link
            className="link"
            to="skill"
            href="#skill"
            spy={true}
            smooth={true}
            offset={0}
            duration={1000}
            onClick={() => {
              setClose(false);
              setOpen(false);
            }}
          >
            Skills
          </Link>
          <Link
            className="link"
            to="project"
            href="#project"
            spy={true}
            smooth={true}
            offset={0}
            duration={1000}
            onClick={() => {
              setClose(false);
              setOpen(false);
            }}
          >
            Projects
          </Link>
          <Link
            className="link"
            to="contact"
            href="#contact"
            spy={true}
            smooth={true}
            offset={0}
            duration={1000}
            onClick={() => {
              setClose(false);
              setOpen(false);
            }}
          >
            Contact
          </Link>
          <div className="social-links">
            <Button target="_blank" href="https://github.com/TieuVanHien">
              <GitHubIcon fontSize="large" sx={{ color: "#f4db7d" }} />
            </Button>
            <Button
              target="_blank"
              href="https://www.linkedin.com/in/van-hien-tieu-4532041b7/"
            >
              <LinkedInIcon fontSize="large" sx={{ color: "#f4db7d" }} />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};
