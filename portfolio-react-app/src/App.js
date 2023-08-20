import About from "./components/About";
import Contact from "./components/Contact";
import Experience from "./components/Experience";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Skills from "./components/Skills";
import Work from "./components/Work";
import logo from "./assets/logo.svg";

function App() {
  return (
    <div className="">
      <div>
        <img
          src={logo}
          alt="Logo Image"
          style={{
            width: "6rem",
            position: "fixed",
            top: "5px",
            left: "5px",
            height: "5.5rem",
            zIndex: "1",
          }}
        />
      </div>
      <Navbar></Navbar>
      <Home />
      <About />
      <Skills />
      <Experience />
      <Work />
      <Contact />
    </div>
  );
}

export default App;
