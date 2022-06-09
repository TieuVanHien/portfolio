import { BrowserRouter as Router } from "react-router-dom";
import { Nav } from "./components";
import { Home, About, Skills, Contact, Project } from "./sections";
import ParticlesBg from "particles-bg";

function App() {
  return (
    <div className="App">
      <Router>
        <h2 id="logo">Van Hien Tieu</h2>
        <ParticlesBg
          width="100%"
          height="auto"
          type="cobweb"
          color="#ffffff"
          num={20}
          bg={{
            position: "fixed",
            zIndex: -1,
            width: "100%",
            height: "100%",
          }}
        />
        <Nav />
        <Home />
        <About />
        <Skills />
        <Project />
        <Contact />
      </Router>
    </div>
  );
}

export default App;
