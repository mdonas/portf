import { LINKS } from "../utils/constants";
import { Link } from "react-scroll";
import NavLink from "../components/NavLink";

export default function Header() {
  return (
    <>
      <nav className="navbar navbar-expand-md glass-navbar w-auto fixed-top">
        <div className="container-fluid mx-5">
          <Link
            key={"hero"}
            className="navbar-brand fw-bold text-darkPurple px-2"
            to="hero"
            duration={500}
            offset={-90}
          >
            Marcos Donas
          </Link>
          <button
            className="navbar-toggler bg-darkPurple text-light "
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarMain"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div
            className="collapse navbar-collapse justify-content-end"
            id="navbarMain"
          >
            <ul className="navbar-nav gap-3 text-center">
              {LINKS.map((link) => (
                <li className="nav-item" key={link.href}>
                  <NavLink href={link.href} text={link.text} />
                </li>
              ))}
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}
