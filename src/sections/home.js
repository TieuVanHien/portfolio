import TypingEffect from "typing-effect-react";
import { Link } from "react-scroll";
import { Workbench } from "../components/3d-model";

export const Home = () => {
  return (
    <section className="home" id="home">
      <div className="container">
        <div className="home headings">
          <h1>
            <span style={{ color: "#F4DB7D" }}> Hello</span>, I'm Van Hien Tieu
          </h1>
          <h1>
            I'm a{" "}
            <TypingEffect
              className="home heading-effect"
              data={["Front End Developer", "Webflow Developer"]}
            />
          </h1>

          <Link
            to="contact"
            className="button"
            href="#contact"
            smooth={true}
            offset={0}
            spy={true}
            duration={1000}
          >
            Contact
          </Link>
        </div>
        <Workbench />
      </div>
    </section>
  );
};
