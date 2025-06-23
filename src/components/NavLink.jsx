export default function NavLink({ href, text }) {
    return (
        <>
            <a className="nav-link text-white" href={href}>{text}</a >
        </>
    )
}