import AwesomeSlider from "react-awesome-slider";
import { Button } from "@mui/material";
import "react-awesome-slider/dist/styles.css";
import "react-awesome-slider/dist/custom-animations/fall-animation.css";
import { weather, portfolio, caravelle, coversy, eduvietlink } from "../images";

export const Project = () => {
  return (
    <section className="project" id="project">
      <div className="container">
        <h1>My Projects</h1>
        <AwesomeSlider animation="fallAnimation">
          <div className=" projects coversy">
            <img src={coversy} alt="coversy" />
            <div className="detail">
              <div className="text">
                <h4>React</h4> <span>|</span> <h4>NodeJS</h4>
                <span>|</span> <h4>AWS S3</h4>
                <span>|</span> <h4>Redux</h4>
                <span>|</span> <h4>SASS</h4>
                <span>|</span> <h4>Express</h4>
                <span>|</span> <h4>MongoDB</h4>
              </div>
              <Button
                className="button"
                href="https://coversy.vercel.app/"
                target="_blank"
                variant="contained"
              >
                Live Demo
              </Button>
            </div>
          </div>
          <div className=" projects portfolio">
            <img src={portfolio} alt="portfolio" />
            <div className="detail">
              <div className="text">
                <h4>Webflow</h4>
              </div>
              <Button
                className="button"
                variant="contained"
                href="https://van-hien-tieu-portfolio.webflow.io/"
                target="_blank"
              >
                Live Demo
              </Button>
            </div>
          </div>
          <div className=" projects weather">
            <img src={weather} alt="weather api" />
            <div className="detail">
              <div className="text">
                <h4>React</h4> <span>|</span> <h4>Google API</h4>
              </div>
              <Button
                className="button"
                variant="contained"
                href="https://weather-app-tieuvanhien.vercel.app/"
                target="_blank"
              >
                Live Demo
              </Button>
            </div>
          </div>
          <div className=" projects caravelle">
            <img src={caravelle} alt="caravelle" />
            <div className="detail">
              <div className="text">
                <h4>React</h4>
                <span>|</span> <h4>SASS</h4>
                <span>|</span> <h4>Express</h4>
                <span>|</span> <h4>NodeMailer</h4>
              </div>
              <Button
                className="button"
                variant="contained"
                href="https://caravelle.vercel.app/"
                target="_blank"
              >
                Live Demo
              </Button>
            </div>
          </div>
          <div className=" projects eduvietlink">
            <img src={eduvietlink} alt="eduvietlink" />
            <div className="detail">
              <div className="text">
                <h4>Webflow</h4>
                <span>|</span> <h4>MemberStack</h4>
                <span>|</span> <h4>Zapier</h4>
                <span>|</span> <h4>Airtable</h4>
              </div>
              <Button
                className="button"
                href="https://eduvietlink.webflow.io/"
                target="_blank"
                variant="contained"
              >
                Live Demo
              </Button>
            </div>
          </div>
        </AwesomeSlider>
      </div>
    </section>
  );
};
