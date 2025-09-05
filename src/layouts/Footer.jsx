import { Link } from "react-scroll";
import IconGitHub from "../icons/iconGitHub";
import IconLinkedin from "../icons/iconLinkedin";
import IconGmail from "../icons/iconGmail";
import { LINKS } from "../utils/constants";

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-newBlack text-white py-5 mt-5">
      <div className="container">
        <div className="row g-4">
          {/* Logo y descripción */}
          <div className="col-lg-4 col-md-6">
            <h5 className="text-darkPurple fw-bold mb-3">Marcos Donas</h5>
            <p className="text-white-50 mb-3">
              Desarrollador Full Stack especializado en crear soluciones web
              innovadoras y seguras. Siempre buscando nuevos desafíos y
              oportunidades de crecimiento.
            </p>
            <div className="d-flex gap-3">
              <a
                href="https://github.com/mdonas"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white-50 hover-text-white"
                aria-label="GitHub"
              >
                <IconGitHub style={{ width: "1.5em", height: "1.5em" }} />
              </a>
              <a
                href="https://www.linkedin.com/in/marcosdonas/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white-50 hover-text-white"
                aria-label="LinkedIn"
              >
                <IconLinkedin style={{ width: "1.5em", height: "1.5em" }} />
              </a>
              <a
                href="mailto:mdonasdev@gmail.com"
                className="text-white-50 hover-text-white"
                aria-label="Email"
              >
                <IconGmail style={{ width: "1.5em", height: "1.5em" }} />
              </a>
            </div>
          </div>

          {/* Enlaces rápidos */}
          <div className="col-lg-2 col-md-6">
            <h6 className="text-white fw-semibold mb-3">Navegación</h6>
            <ul className="list-unstyled">
              {LINKS.map((link) => (
                <li key={link.href} className="mb-2">
                  <Link
                    to={link.href}
                    smooth={true}
                    duration={500}
                    className="text-white-50 text-decoration-none footer-link"
                  >
                    {link.text}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Recursos */}
          <div className="col-lg-3 col-md-6">
            <h6 className="text-white fw-semibold mb-3">Recursos</h6>
            <ul className="list-unstyled">
              <li className="mb-2">
                <a
                  href="/docs/CVMarcosDonasRodríguez-Web.pdf"
                  download
                  className="text-white-50 text-decoration-none footer-link"
                >
                  Descargar CV
                </a>
              </li>
              <li className="mb-2">
                <a
                  href="https://github.com/mdonas"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white-50 text-decoration-none footer-link"
                >
                  GitHub
                </a>
              </li>
              <li className="mb-2">
                <Link
                  to="contact"
                  smooth={true}
                  duration={500}
                  className="text-white-50 text-decoration-none footer-link"
                >
                  Contacto
                </Link>
              </li>
            </ul>
          </div>

          {/* Volver arriba */}
          <div className="col-lg-3 col-md-6 text-center text-lg-end">
            <Link
              to="hero"
              smooth={true}
              duration={500}
              className="btn btn-outline-light btn-sm rounded-pill px-4"
            >
              ↑ Volver arriba
            </Link>
          </div>
        </div>

        <hr className="my-4 border-secondary" />

        {/* Copyright */}
        <div className="row align-items-center">
          <div className="col-md-6 text-center text-md-start">
            <p className="text-white-50 mb-0">
              © {currentYear} Marcos Donas. Todos los derechos reservados.
            </p>
          </div>
          <div className="col-md-6 text-center text-md-end">
            <p className="text-white-50 mb-0">
              Hecho con ❤️ usando React y Bootstrap
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
