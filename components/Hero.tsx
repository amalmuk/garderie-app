export default function Hero() {
  return (
    <section
      id="accueil"
      className="py-5"
      style={{
        background:
          "linear-gradient(135deg, #f7faf6 0%, #fff5f6 100%)",
      }}
    >
      <div className="container py-lg-5 py-3">
        <div className="row align-items-center g-5">
          {/* Texte */}
          <div className="col-lg-6">
            <span
              className="d-inline-block rounded-pill px-3 py-2 mb-3"
              style={{
                backgroundColor: "#e5eee5",
                color: "#637d68",
                fontSize: "14px",
                fontWeight: 600,
              }}
            >
              Bienvenue dans notre garderie ♡
            </span>

            <h1
              className="fw-bold mb-4"
              style={{
                color: "#405b48",
                fontSize: "clamp(2.2rem, 5vw, 3.5rem)",
                lineHeight: 1.2,
              }}
            >
              Un monde de découvertes
              <span
                className="d-block mt-2"
                style={{ color: "#cf929e" }}
              >
                pour vos petits trésors !
              </span>
            </h1>

            <p
              className="mb-4"
              style={{
                color: "#727b73",
                fontSize: "1.1rem",
                lineHeight: 1.9,
                maxWidth: "520px",
              }}
            >
              Un environnement chaleureux et sécurisé
              où les enfants jouent, apprennent et grandissent
              à leur rythme, entourés d'amour et de bienveillance.
            </p>

            <a
              href="#services"
              className="btn btn-lg rounded-pill px-4 py-3 text-white shadow-sm"
              style={{
                backgroundColor: "#829b83",
                border: "none",
                fontWeight: 600,
              }}
            >
              Découvrir nos services →
            </a>

            <div className="d-flex flex-wrap gap-3 mt-4">
              <span style={{ color: "#637d68" }}>
                ✓ Éveil et apprentissage
              </span>
              <span style={{ color: "#637d68" }}>
                ✓ Équipe attentionnée
              </span>
            </div>
          </div>

          {/* Image principale */}
          <div className="col-lg-6">
            <div
              className="p-2 rounded-5 shadow-sm"
              style={{
                backgroundColor: "#ffffff",
                border: "1px solid #f1e5e7",
              }}
            >
              <img
                src="/images/garderie.jpg.jpg"
                alt="Des enfants qui jouent à la garderie"
                className="img-fluid rounded-5"
                style={{
                  width: "100%",
                  height: "clamp(280px, 40vw, 430px)",
                  objectFit: "cover",
                  display: "block",
                }}
              />
            </div>

            <p
              className="text-center mt-3 mb-0"
              style={{
                color: "#b47d88",
                fontStyle: "italic",
              }}
            >
              Grandir, découvrir et s'épanouir ensemble ♡
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}