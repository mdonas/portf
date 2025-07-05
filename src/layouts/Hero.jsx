import IconGitHub from "../icons/iconGitHub.jsx";
import IconLinkedin from "../icons/iconLinkedin.jsx";
import IconGmail from "../icons/iconGmail.jsx";

function Hero() {
  return (
    <>
      <div
        className="py-6 row justify-content-between align-items-center"
        id="hero"
      >
        <div className="col-6 text-white">
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
          <div className=" pt-2 row justify-content-start align-items-center text-center ">
            <div className="col-3">
              <IconGitHub />
            </div>
            <div className="col-3">
              <IconLinkedin />
            </div>
            <div className="col-3">
              <IconGmail />
            </div>
          </div>
        </div>
        <div className="col-6">
          <div className="circle-border ms-auto">
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
