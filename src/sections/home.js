import TypingEffect from "typing-effect-react";
import { narrow } from "../images";
import { Wave } from "react-animated-text";

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
          <div className="narrow-btn">
            <img src={narrow} alt="narrow button" />
          </div>
        </div>
      </div>
    </section>
  );
};
