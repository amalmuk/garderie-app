
export default function HomePage() {
  const services = [
    {
      icon: "🎨",
      title: "Activités créatives",
      description:
        "Dessin, peinture et bricolage pour développer l'imagination des enfants.",
    },
    {
      icon: "📚",
      title: "Éveil et apprentissage",
      description:
        "Des jeux éducatifs pour apprendre les couleurs, les chiffres et les lettres.",
    },
    {
      icon: "🧸",
      title: "Jeux et socialisation",
      description:
        "Des moments de partage pour apprendre à jouer et grandir ensemble.",
    },
  ];

  return (
    <main>
      {/* NAVBAR */}
      <nav className="navbar navbar-expand-lg navbar-light bg-white shadow-sm py-3">
        <div className="container">
          <a className="navbar-brand fw-bold text-success fs-4" href="#">
            🧸 Les Petits Explorateurs
          </a>

          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarMenu"
            aria-controls="navbarMenu"
            aria-expanded="false"
            aria-label="Ouvrir le menu"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarMenu">
            <ul className="navbar-nav ms-auto align-items-lg-center gap-lg-3">
              <li className="nav-item">
                <a className="nav-link" href="#accueil">
                  Accueil
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#services">
                  Nos services
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#contact">
                  Contact
                </a>
              </li>
              <li className="nav-item">
                <a className="btn btn-success rounded-pill px-4" href="#contact">
                  Inscrire mon enfant
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      {/* HERO */}
      <section
        id="accueil"
        className="py-5"
        style={{ backgroundColor: "#f0faf3" }}
      >
        <div className="container py-lg-5">
          <div className="row align-items-center g-5">
            <div className="col-lg-6">
              <span className="badge rounded-pill text-bg-warning mb-3 p-2">
                🌟 Bienvenue dans notre garderie
              </span>

              <h1 className="display-4 fw-bold mb-4">
                Un monde de découvertes pour{" "}
                <span className="text-success">vos petits trésors !</span>
              </h1>

              <p className="lead text-secondary mb-4">
                Un environnement chaleureux, sécurisé et amusant où chaque
                enfant apprend, explore et grandit à son rythme.
              </p>

              <a href="#services" className="btn btn-success btn-lg rounded-pill px-4">
                Découvrir nos services →
              </a>

              <p className="mt-3 text-secondary small">
                ❤️ Apprendre, jouer et grandir ensemble.
              </p>
            </div>

            <div className="col-lg-6">
              <img
                src="https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?auto=format&fit=crop&w=1000&q=80"
                alt="Enfant qui joue et découvre le monde"
                className="img-fluid rounded-4 shadow"
                style={{
                  width: "100%",
                  height: "380px",
                  objectFit: "cover",
                }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section id="services" className="py-5">
        <div className="container py-4">
          <div className="text-center mb-5">
            <span className="text-success fw-semibold">
              CE QUE NOUS PROPOSONS
            </span>
            <h2 className="fw-bold mt-2">Nos services</h2>
            <p className="text-secondary">
              Des activités adaptées pour l'épanouissement de chaque enfant.
            </p>
          </div>

          <div className="row g-4">
            {services.map((service) => (
              <div className="col-md-4" key={service.title}>
                <div className="card h-100 border-0 shadow-sm rounded-4 text-center p-4">
                  <div className="display-3 mb-3">{service.icon}</div>
                  <div className="card-body">
                    <h3 className="card-title h5 fw-bold mb-3">
                      {service.title}
                    </h3>
                    <p className="card-text text-secondary">
                      {service.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section
        id="contact"
        className="py-5 text-center text-white"
        style={{ backgroundColor: "#198754" }}
      >
        <div className="container py-3">
          <h2 className="fw-bold">Offrez-lui un bon départ !</h2>
          <p className="mb-4">
            Contactez-nous pour découvrir notre garderie.
          </p>
          <a href="mailto:contact@petitsexplorateurs.tn" className="btn btn-light btn-lg rounded-pill px-4">
            Nous contacter
          </a>
        </div>
      </section>

      <footer className="py-3 text-center bg-light">
        <p className="mb-0 text-secondary">
          © 2026 Les Petits Explorateurs — Tous droits réservés.
        </p>
      </footer>
    </main>
  );
}
