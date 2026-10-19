export default function Navbar() {
  return (
    <nav className="navbar bg-white shadow-sm py-3">
      <div className="container d-flex flex-wrap align-items-center justify-content-between">
        <a className="navbar-brand fw-bold" href="#accueil">
          🧸 Les Petits Explorateurs
        </a>

        <div className="d-flex flex-wrap align-items-center gap-3">
          <a className="nav-link" href="#accueil">Accueil</a>
          <a className="nav-link" href="#services">Nos services</a>
          <a className="nav-link" href="#contact">Contact</a>
          <a className="btn btn-success" href="#contact">
            Inscrire mon enfant
          </a>
        </div>
      </div>
    </nav>
  );
}