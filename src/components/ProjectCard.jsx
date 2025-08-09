import GitHub from "../icons/iconGitHub";

function ProjectCard({ img, title, content, techs = [], githubUrl }) {
  return (
    <>
      <div className="card rounded-3 p-0 border-0 card-background overflow-hidden">
        <div className="position-relative">
          <img
            className="card-img-top rounded-top-3 img-fluid object-fit-cover"
            src={img}
            alt={title || "Imagen del proyecto"}
            height={250}
            style={{ objectFit: "cover", aspectRatio: "16/9" }}
          />
        </div>
        <div className="card-body rounded-bottom-3 p-3 d-flex flex-column">
          <h4 className="card-title text-white mb-2 fw-semibold">{title}</h4>
          <p className="card-text text-white-50 mb-3 lh-base flex-grow-1">
            {content}
          </p>

          {/* Tecnologías */}
          {techs && techs.length > 0 && (
            <div className="mb-3">
              <div className="d-flex flex-wrap gap-2">
                {techs.map((tech, index) => (
                  <span
                    key={index}
                    className="badge bg-dark text-white border border-secondary px-2 py-1 rounded-pill fs-7"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          )}

          {/* Botón de GitHub */}
          {githubUrl && (
            <a
              href={githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-outline-light btn-sm d-flex align-items-center  gap-2 github-btn"
              onClick={(e) => e.stopPropagation()}
            >
              <GitHub style={{ width: "1.2em", height: "1.2em" }} />
              Ver código
            </a>
          )}
        </div>
      </div>
    </>
  );
}

export default ProjectCard;
