import { Link } from "react-scroll";

export default function NavLink({ href, text }) {
  return (
    <>
      <Link
        key={href}
        className="nav-link text-white cursor-pointer"
        to={href}
        duration={500}
        offset={-60}
      >
        {text}
      </Link>
    </>
  );
}
