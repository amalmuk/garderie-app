const services = [
  {
    icon: "🎨",
    title: "Activités créatives",
    description:
      "Dessin, peinture et bricolage pour développer l'imagination et la créativité de chaque enfant.",
    color: "#f8e8eb",
  },
  {
    icon: "📚",
    title: "Éveil et apprentissage",
    description:
      "Des activités ludiques et adaptées à chaque âge pour apprendre, explorer et grandir.",
    color: "#e7efe5",
  },
  {
    icon: "🧸",
    title: "Jeux et socialisation",
    description:
      "Des moments de partage pour apprendre à communiquer, coopérer et créer des amitiés.",
    color: "#f8f0e3",
  },
];

export default function Services() {
  return (
    <section
      id="services"
      className="py-5"
      style={{ backgroundColor: "#ffffff" }}
    >
      <div className="container py-lg-5 py-3">
        {/* Section heading */}
        <div className="text-center mb-5">
          <span
            className="d-inline-block rounded-pill px-3 py-2 mb-3"
            style={{
              backgroundColor: "#e7efe5",
              color: "#637d68",
              fontSize: "14px",
              fontWeight: 600,
            }}
          >
            GRANDIR ET S'ÉPANOUIR
          </span>

          <h2
            className="fw-bold mb-3"
            style={{
              color: "#405b48",
              fontSize: "clamp(1.8rem, 4vw, 2.6rem)",
            }}
          >
            Découvrez nos services
          </h2>

          <p
            className="mx-auto mb-0"
            style={{
              color: "#727b73",
              maxWidth: "620px",
              lineHeight: 1.8,
            }}
          >
            Un univers pensé pour le bonheur de vos enfants,
            où chaque journée est une nouvelle occasion de
            découvrir, d'apprendre et de s'amuser.
          </p>
        </div>

        {/* Service cards */}
        <div className="row g-4">
          {services.map((service) => (
            <div className="col-12 col-md-6 col-lg-4" key={service.title}>
              <div
                className="h-100 text-center p-4 p-lg-5 rounded-4"
                style={{
                  backgroundColor: "#ffffff",
                  border: "1px solid #edf0eb",
                  boxShadow: "0 8px 28px rgba(64, 91, 72, 0.07)",
                }}
              >
                <div
                  className="d-flex align-items-center justify-content-center rounded-circle mx-auto mb-4"
                  style={{
                    width: "82px",
                    height: "82px",
                    backgroundColor: service.color,
                    fontSize: "38px",
                  }}
                >
                  {service.icon}
                </div>

                <h3
                  className="h5 fw-bold mb-3"
                  style={{ color: "#405b48" }}
                >
                  {service.title}
                </h3>

                <p
                  className="mb-0"
                  style={{
                    color: "#727b73",
                    lineHeight: 1.8,
                    fontSize: "15px",
                  }}
                >
                  {service.description}
                </p>

                <div
                  className="mx-auto mt-4 rounded-pill"
                  style={{
                    width: "42px",
                    height: "3px",
                    backgroundColor: "#cf929e",
                  }}
                />
              </div>
            </div>
          ))}
        </div>

        {/* Bottom message */}
        <div className="text-center mt-5">
          <p className="mb-0" style={{ color: "#829b83" }}>
            ♡ Chaque enfant est unique, chaque progrès est précieux.
          </p>
        </div>
      </div>
    </section>
  );
}