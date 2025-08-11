import { Link } from "react-scroll";
import ProjectCard from "../components/ProjectCard";
import { useScrollAnimation } from "../hooks/useScrollAnimation.jsx";

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
          Proyectos
        </h1>
        <div className="py-3 row justify-content-center align-items-stretch g-4">
          <div className="col-12 col-md-6 col-lg-4 d-flex">
            <a
              href="https://mochai.mdonas.com"
              target="_blank"
              rel="noopener noreferrer"
              className={`w-100 text-decoration-none scroll-animate-left stagger-animation-1 ${
                projectsVisible ? "visible" : ""
              }`}
            >
              <ProjectCard
                img={"/img/mochaChai.png"}
                title={"Testing sobre API"}
                content={
                  "Web con HTML5, CSS3, Bootstrap y JavaScript que consume la API de Rick y Morty. Incluye tests automatizados con Mocha y Chai para validar el consumo de la API y la renderización de personajes. Implementa paginación eficiente y manejo de errores."
                }
                techs={[
                  "HTML5",
                  "CSS3",
                  "JavaScript",
                  "Bootstrap",
                  "Mocha",
                  "Chai",
                  "API Testing",
                ]}
                githubUrl="https://github.com/mdonas/mocha-chai"
              />
            </a>
          </div>
          <div className="col-12 col-md-6 col-lg-4 d-flex">
            <a
              href="https://meals.mdonas.com"
              target="_blank"
              rel="noopener noreferrer"
              className={`w-100 text-decoration-none scroll-animate-right stagger-animation-2 ${
                projectsVisible ? "visible" : ""
              }`}
            >
              <ProjectCard
                img={"/img/mealPrep.png"}
                title={"Generador de Menús"}
                content={
                  "Aplicación web inteligente que genera menús semanales personalizados a partir de un JSON de recetas. Implementa algoritmos complejos para evitar repetición de ingredientes, tipos de comida y recetas. Optimiza la planificación de comidas de forma automática."
                }
                techs={["HTML5", "CSS3", "JavaScript", "JSON", "Algoritmos"]}
                githubUrl="https://github.com/mdonas/MealsCalendar"
              />
            </a>
          </div>
          <div className="col-12 col-md-6 col-lg-4 d-flex mx-auto">
            <Link
              to={"hero"}
              smooth={true}
              duration={500}
              className={`w-100 text-decoration-none scroll-animate-left stagger-animation-3 ${
                projectsVisible ? "visible" : ""
              }`}
            >
              <ProjectCard
                img={"/img/portfolio.png"}
                title={"Portfolio Personal"}
                content={
                  "Portfolio web responsivo desarrollado con React y Bootstrap. Incluye animaciones de scroll personalizadas, formulario de contacto funcional con EmailJS, sección de tecnologías interactiva y diseño completamente responsive. Optimizado para SEO y rendimiento."
                }
                techs={[
                  "React",
                  "Bootstrap",
                  "SCSS",
                  "JavaScript",
                  "EmailJS",
                  "Vite",
                  "Git",
                ]}
                githubUrl="https://github.com/mdonas/portf"
              />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}

export default Projects;
