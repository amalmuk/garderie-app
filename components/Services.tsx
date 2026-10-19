const services = [
  {
    icon: "🎨",
    title: "Activités créatives",
    description: "Dessin, peinture et bricolage pour développer l'imagination.",
  },
  {
    icon: "📚",
    title: "Éveil et apprentissage",
    description: "Des activités adaptées pour découvrir et apprendre.",
  },
  {
    icon: "🧸",
    title: "Jeux et socialisation",
    description: "Des jeux collectifs pour apprendre à partager.",
  },
];

export default function Services() {
  return (
    <section id="services" className="py-5">
      <div className="container">
        <h2 className="text-center fw-bold mb-4">Nos services</h2>

        <div className="row g-4">
          {services.map((service) => (
            <div className="col-md-4" key={service.title}>
              <div className="card h-100 border-0 shadow-sm text-center p-4">
                <div className="display-4">{service.icon}</div>
                <h3 className="h5 fw-bold mt-3">{service.title}</h3>
                <p className="text-muted mb-0">{service.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}