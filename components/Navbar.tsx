export default function Navbar() {
  return (
    <nav
      className="navbar navbar-expand-lg sticky-top py-3"
      style={{
        backgroundColor: "#ffffff",
        borderBottom: "1px solid #edf1eb",
      }}
    >
      <div className="container">
        {/* Logo */}
        <a
          className="navbar-brand fw-bold d-flex align-items-center gap-2"
          href="#accueil"
          style={{
            color: "#405b48",
            fontSize: "1.2rem",
            whiteSpace: "normal",
          }}
        >
          <span
            className="d-flex align-items-center justify-content-center rounded-circle"
            style={{
              width: "42px",
              height: "42px",
              backgroundColor: "#f9e9ec",
              fontSize: "22px",
            }}
          >
            🌸
          </span>
          <span>Les Petits Explorateurs</span>
        </a>

        {/* Menu */}
        <div className="d-flex flex-wrap align-items-center gap-3">
          <a
            className="nav-link fw-semibold"
            href="#accueil"
            style={{ color: "#637d68" }}
          >
            Accueil
          </a>

          <a
            className="nav-link fw-semibold"
            href="#services"
            style={{ color: "#637d68" }}
          >
            Nos services
          </a>

          <a
            className="nav-link fw-semibold"
            href="#contact"
            style={{ color: "#637d68" }}
          >
            Contact
          </a>

          <a
            href="/inscription"
            className="btn rounded-pill px-4 py-2 shadow-sm"
            style={{
              backgroundColor: "#829b83",
              color: "#ffffff",
              border: "1px solid #829b83",
              fontWeight: 600,
            }}
          >
            Inscrire mon enfant
            <span className="ms-2">♡</span>
          </a>
        </div>
      </div>
    </nav>
  );
}