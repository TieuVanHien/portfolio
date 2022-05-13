import {
  css,
  figma,
  git,
  github,
  html,
  js,
  sass,
  reactjs,
  vercel,
  webflow,
} from "../images";

export const Skills = () => {
  return (
    <section className="skill " id="skill">
      <div className="container">
        <h2>Here Are Some Of My Skills And Tools That I'm Working With</h2>
        <div className="skill list">
          <div className="list-container">
            <div className="skill front-end">
              <h3>Front End</h3>
              <div className="front-end images">
                <img src={reactjs} alt="front-end reactjs" />
                <img src={html} alt="html html" />
                <img src={css} alt="front-end css" />
                <img src={js} alt="front-end js" />
                <img src={sass} alt="front-end sass" />
                <img src={webflow} alt="front-end webflow" />
              </div>
            </div>
            <div
              style={{ marginLeft: "2em", with: "40%" }}
              className="skill DevOps"
            >
              <h3>DevOps</h3>
              <div className="devops image">
                <img src={git} alt="devops git" />
                <img src={github} alt="devops github" />
                <img src={vercel} alt="devops vercel" />
              </div>
            </div>
          </div>
          <div className="skill design">
            <h3>Design</h3>
            <div className="design image">
              <img src={figma} alt="design figma" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
