import Intro from "./components/intro/Intro";
import About from "./components/About";
import Skills from "./components/Skills";
import Resume from "./components/Resume";
import Contact from "./components/Contact";

function App() {
  return (
    <div className="m-4">
      <Intro />
      <About />
      <Skills />
      <Resume />
      <Contact />
    </div>
  );
}

export default App;
