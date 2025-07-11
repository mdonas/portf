import IconGitHub from "../icons/iconGitHub.jsx";
import IconLinkedin from "../icons/iconLinkedin.jsx";
import IconGmail from "../icons/iconGmail.jsx";

function Hero() {
  return (
    <>
      <div
        className="py-6 row justify-content-center align-items-center"
        id="hero"
      >
        <div className="col-10 col-md-6 text-white mx-auto mx-md-0">
          <div id="text">
            <h1>
              Hola, soy <br />{" "}
              <span className="text-darkPurple">Marcos Donas</span>
            </h1>
            <h2 className="text-lighterBlack">Desarollador Full Stack y</h2>
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

          <div className="mt-3">
            <a
              className="btn btn-darkPurple text-white col-md-5 col-10 col-sm-7"
              href="/docs/cur.pdf"
              role="button"
              download={true}
            >
              Descargar CV
            </a>
          </div>
        </div>
        <div className="col-10 col-md-6 pt-md-0 pt-5 ">
          <div className="circle-border mx-auto me-md-0">
            <div class="circle-image">
              <img src="/img/yo.png" alt="" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Hero;
