import Header from "./layouts/Header";
import Tech from "./layouts/Tech";
import Projects from "./layouts/Projects";
import Hero from "./layouts/Hero";

function App() {
  return (
    <>
      <div className="bg-newBlack py-5 background-gradient">
        <div className="container">
          <Header />
          <Hero />
          <Tech />
          <Projects />
        </div>
      </div>
    </>
  );
}

export default App;
