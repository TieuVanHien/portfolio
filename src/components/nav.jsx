import { Link } from "react-scroll";
import React, { useState } from "react";
import { Sling as Hamburger } from "hamburger-react";

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
            smooth={true}
            offset={-5}
            spy={true}
            duration={1200}
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
            spy={true}
            smooth={true}
            offset={0}
            duration={1200}
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
            spy={true}
            smooth={true}
            offset={0}
            duration={1200}
            onClick={() => {
              setClose(false);
              setOpen(false);
            }}
          >
            Skills
          </Link>
          <Link
            className="link"
            to="location"
            spy={true}
            smooth={true}
            offset={0}
            duration={1200}
            onClick={() => {
              setClose(false);
              setOpen(false);
            }}
          >
            Contact
          </Link>
        </div>
      </div>
    </section>
  );
};
