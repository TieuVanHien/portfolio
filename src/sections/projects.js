import AwesomeSlider from "react-awesome-slider";
import "react-awesome-slider/dist/styles.css";
import { Caravelle } from "../components";
import { weather } from "../images";

export const Project = () => {
  return (
    <section className="project" id="project">
      <div className="container">
        <AwesomeSlider>
          <Caravelle />
          <div>
            <div className="project-container">
              <img src={weather} alt="weather api" />
              <div className="detail">
                <h3>React</h3> <span>|</span> <h3>Google API</h3>
              </div>
            </div>
          </div>
        </AwesomeSlider>
      </div>
    </section>
  );
};
