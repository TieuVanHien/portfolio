import { BrowserRouter as Router } from "react-router-dom";
import { Nav } from "./components";
import { Home, About } from "./sections";
import ParticlesBg from "particles-bg";

function App() {
  return (
    <div className="App">
      <Router>
        <ParticlesBg
          width="100%"
          height="auto"
          type="cobweb"
          color="#ffffff"
          num={50}
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
      </Router>
    </div>
  );
}

export default App;
