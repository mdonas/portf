import Header from "./layouts/Header";
import Tech from "./layouts/Tech";
import Projects from "./layouts/Projects";
import Hero from "./layouts/Hero";
import About from "./layouts/About";
import Contact from "./layouts/Contact";

function App() {
  return (
    <>
      <div className="bg-newBlack py-5 background-gradient">
        <div className="container">
          <Header />
          <Hero />
          <Tech />
          <Projects />
          <About />
          <Contact />
        </div>
      </div>
    </>
  );
}

export default App;
