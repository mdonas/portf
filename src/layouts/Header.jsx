import { LINKS } from "../utils/constants";
import NavLink from "../components/NavLink";

export default function Header() {
  return (
    <>
      <nav className="navbar navbar-expand-lg glass-navbar w-50">
        <div className="container-fluid">
          <a className="navbar-brand fw-bold text-darkPurple" href="#">
            MD
          </a>

          <button
            className="navbar-toggler bg-darkPurple text-light"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarMain"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarMain">
            <ul className="navbar-nav mb-2 mb-lg-0 gap-3 text-center">
              {LINKS.map((link) => (
                <li className="nav-item" key={link.href}>
                  <NavLink href={link.href} text={link.text} />
                </li>
              ))}
            </ul>
          </div>
          <span></span>
        </div>
      </nav>
    </>
  );
}
