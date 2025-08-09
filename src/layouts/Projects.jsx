import ProjectCard from "../components/ProjectCard";
import { useScrollAnimation } from "../hooks/useScrollAnimation.js";

function Projects() {
  const [projectsRef, projectsVisible] = useScrollAnimation();

  return (
    <>
      <section className="py-6" id="proyects" ref={projectsRef}>
        <h1
          className={`text-center text-white fw-bold mb-3 scroll-animate ${
            projectsVisible ? "visible" : ""
          }`}
        >
          Projectos
        </h1>
        <div className="py-3 row justify-content-center align-items-center gap-4">
          <div
            className={`col-8 col-md-5 scroll-animate-left stagger-animation-1 ${
              projectsVisible ? "visible" : ""
            }`}
          >
            <ProjectCard />
          </div>
          <div
            className={`col-8 col-md-5 scroll-animate-right stagger-animation-2 ${
              projectsVisible ? "visible" : ""
            }`}
          >
            <ProjectCard />
          </div>
        </div>
      </section>
    </>
  );
}

export default Projects;
