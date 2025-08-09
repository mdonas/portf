import IconGitHub from "../icons/iconGitHub.jsx";
import IconLinkedin from "../icons/iconLinkedin.jsx";
import IconGmail from "../icons/iconGmail.jsx";
import { useScrollAnimation } from "../hooks/useScrollAnimation.jsx";
import { Link } from "react-scroll";

function Hero() {
  const [heroRef, heroVisible] = useScrollAnimation();

  return (
    <>
      <div
        className="py-6 row justify-content-center align-items-center"
        id="hero"
        ref={heroRef}
      >
        <div
          className={`col-10 col-md-6 text-white mx-auto mx-md-0 scroll-animate ${
            heroVisible ? "visible" : ""
          }`}
        >
          <div id="text">
            <h1>
              Hola, soy <br />{" "}
              <span className="text-darkPurple">Marcos Donas</span>
            </h1>
            <h2 className="text-lighterBlack">Desarrollador Full Stack y</h2>
            <h2 className="text-lighterBlack">
              Especialista en Ciberseguridad
            </h2>
          </div>
          <div className=" pt-2 row justify-content-start align-items-center gap-4 gap-sm-1">
            <div className="col-2">
              <a
                href="https://github.com/mdonas"
                target="_blank"
                rel="noopener noreferrer"
              >
                <IconGitHub />
              </a>
            </div>
            <div className="col-2">
              <a
                href="https://www.linkedin.com/in/marcosdonas/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <IconLinkedin />
              </a>
            </div>
            <div className="col-2">
              <a
                href="mailto:mdonasdev@gmail.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <IconGmail />
              </a>
            </div>
          </div>

          <div className="mt-4 d-flex flex-column flex-sm-row gap-3">
            <a
              className="btn btn-darkPurple text-white px-4"
              href="/docs/CVMarcosDonas0725.pdf"
              role="button"
              download={true}
            >
              Descargar CV
            </a>
            <Link
              to="contact"
              smooth={true}
              duration={500}
              className="btn btn-outline-light px-4"
            >
              Hablemos
            </Link>
          </div>
        </div>
        <div className="col-10 col-md-6 pt-md-0 pt-5 ">
          <div className="circle-border mx-auto me-md-0">
            <div className="circle-image">
              <img
                src="/img/yo.png"
                alt="Marcos Donas - Desarrollador Full Stack"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Hero;
