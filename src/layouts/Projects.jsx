import ProjectCard from "../components/ProjectCard";
function Projects() {
  return (
    <>
      <div className="py-6" id="proyects">
        <h1 className="text-center text-white fw-bold mb-3">PROJECTOS</h1>
        <div className="py-3 row justify-content-center align-items-center gap-4">
          <ProjectCard />
          <ProjectCard />
        </div>
      </div>
    </>
  );
}

export default Projects;
