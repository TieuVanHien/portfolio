import { Nav } from "./components";
import { Home, About } from "./sections";
import ParticlesBg from "particles-bg";

function App() {
  return (
    <div className="App">
      <ParticlesBg
        width="100%"
        height="auto"
        type="cobweb"
        color="#ffffff"
        num={70}
        bg={{
          position: "fixed",
          zIndex: -1,
          width: "100%",
          height: "auto",
        }}
      />
      <Nav />
      <Home />
      <About />
    </div>
  );
}

export default App;
