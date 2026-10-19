export default function Hero() {
  return (
    <section
      id="accueil"
      className="py-5"
      style={{ backgroundColor: "#f0faf3" }}
    >
      <div className="container py-4">
        <div className="row align-items-center g-4">
          <div className="col-md-6">
            <h1 className="display-5 fw-bold">
              Un monde de découvertes pour vos petits trésors !
            </h1>

            <p className="lead my-4">
              Un environnement chaleureux où les enfants jouent,
              apprennent et grandissent en toute confiance.
            </p>

            <a href="#services" className="btn btn-success btn-lg">
              Découvrir nos services
            </a>
          </div>

          <div className="col-md-6">
            <img
              src="/images/garderie.jpg.jpg"
              alt="Enfants qui jouent à la garderie"
              className="img-fluid rounded-4 shadow"
              style={{ width: "100%", height: "380px", objectFit: "cover" }}
            />
          </div>
        </div>
      </div>
    </section>
  );
}