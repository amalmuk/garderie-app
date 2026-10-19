"use client";

import { useEffect, useState } from "react";

type Garderie = {
  nom: string;
  adresse: string;
  email: string;
  description: string;
};

type Service = {
  id: number;
  nom: string;
  description: string;
};

type Activite = {
  id: number;
  nom: string;
  jour: string;
};

export default function ApiData() {
  const [garderie, setGarderie] = useState<Garderie | null>(null);
  const [services, setServices] = useState<Service[]>([]);
  const [activites, setActivites] = useState<Activite[]>([]);
  const [erreur, setErreur] = useState("");
  const [chargement, setChargement] = useState(true);

  useEffect(() => {
    async function chargerDonnees() {
      try {
        const [g, s, a] = await Promise.all([
          fetch("http://localhost:4000/api/garderie"),
          fetch("http://localhost:4000/api/services"),
          fetch("http://localhost:4000/api/activites"),
        ]);

        if (!g.ok || !s.ok || !a.ok) {
          throw new Error("Impossible de charger les données.");
        }

        const garderieData: Garderie = await g.json();
        const servicesData: Service[] = await s.json();
        const activitesData: Activite[] = await a.json();

        setGarderie(garderieData);
        setServices(servicesData);
        setActivites(activitesData);
      } catch (error) {
        console.error("Erreur API :", error);

        setErreur(
          error instanceof Error
            ? error.message
            : "Une erreur inconnue est survenue."
        );
      } finally {
        setChargement(false);
      }
    }

    chargerDonnees();
  }, []);

  return (
    <section
      className="py-5"
      style={{
        background: "linear-gradient(180deg, #f7faf6, #fff7f8)",
      }}
    >
      <div className="container py-lg-4">

        {/* Informations de la garderie */}
        <div className="text-center mb-5">
          <span
            className="badge rounded-pill px-3 py-2 mb-3"
            style={{
              backgroundColor: "#e7efe5",
              color: "#637d68",
            }}
          >
            NOTRE UNIVERS
          </span>

          <h2
            className="fw-bold mb-3"
            style={{ color: "#405b48" }}
          >
            Découvrez notre garderie
          </h2>

          <p
            className="mx-auto"
            style={{
              color: "#727b73",
              maxWidth: "600px",
              lineHeight: 1.8,
            }}
          >
            Un espace chaleureux où chaque enfant peut
            apprendre, jouer et s'épanouir en toute confiance.
          </p>
        </div>

        {chargement && (
          <p className="text-center" style={{ color: "#637d68" }}>
            Chargement des informations...
          </p>
        )}

        {erreur && (
          <div
            className="alert rounded-4"
            role="alert"
            style={{
              backgroundColor: "#fff0f1",
              color: "#945b65",
              border: "1px solid #f0d5da",
            }}
          >
            {erreur}
            <p className="mb-0 mt-2 small">
              Vérifiez que le serveur API est démarré.
            </p>
          </div>
        )}

        {!chargement && !erreur && garderie && (
          <div
            className="card border-0 rounded-4 p-4 p-lg-5 mb-5"
            style={{
              backgroundColor: "#ffffff",
              boxShadow: "0 8px 30px rgba(64, 91, 72, 0.08)",
            }}
          >
            <div className="row align-items-center g-4">
              <div className="col-md-2 text-center">
                <div
                  className="rounded-circle mx-auto d-flex align-items-center justify-content-center"
                  style={{
                    width: "90px",
                    height: "90px",
                    backgroundColor: "#f8e8eb",
                    fontSize: "42px",
                  }}
                >
                  🌸
                </div>
              </div>

              <div className="col-md-10">
                <h3
                  className="fw-bold mb-3"
                  style={{ color: "#405b48" }}
                >
                  {garderie.nom}
                </h3>

                <p
                  className="mb-4"
                  style={{ color: "#727b73", lineHeight: 1.8 }}
                >
                  {garderie.description}
                </p>

                <div className="d-flex flex-column gap-2">
                  <p className="mb-0" style={{ color: "#637d68" }}>
                    <strong>Adresse :</strong> {garderie.adresse}
                  </p>

                  <p className="mb-0" style={{ color: "#637d68" }}>
                    <strong>Email :</strong>{" "}
                    <a
                      href={`mailto:${garderie.email}`}
                      style={{ color: "#bd8290" }}
                    >
                      {garderie.email}
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Services depuis l'API */}
        <div className="mb-5">
          <h2
            className="text-center fw-bold mb-4"
            style={{ color: "#405b48" }}
          >
            Nos services
          </h2>

          {!chargement && !erreur && services.length === 0 && (
            <p className="text-center text-muted">
              Aucun service disponible pour le moment.
            </p>
          )}

          <div className="row g-4">
            {services.map((service) => (
              <div className="col-12 col-md-6 col-lg-4" key={service.id}>
                <div
                  className="h-100 rounded-4 p-4"
                  style={{
                    backgroundColor: "#ffffff",
                    border: "1px solid #edf0eb",
                    boxShadow: "0 6px 22px rgba(64, 91, 72, 0.06)",
                  }}
                >
                  <div
                    className="d-flex align-items-center justify-content-center rounded-circle mb-3"
                    style={{
                      width: "58px",
                      height: "58px",
                      backgroundColor: "#e7efe5",
                      fontSize: "27px",
                    }}
                  >
                    🌿
                  </div>

                  <h3
                    className="h5 fw-bold mb-3"
                    style={{ color: "#405b48" }}
                  >
                    {service.nom}
                  </h3>

                  <p
                    className="mb-0"
                    style={{ color: "#727b73", lineHeight: 1.8 }}
                  >
                    {service.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Activités depuis l'API */}
        <div>
          <div className="text-center mb-4">
            <h2
              className="fw-bold mb-3"
              style={{ color: "#405b48" }}
            >
              Nos activités
            </h2>

            <p style={{ color: "#727b73" }}>
              Des journées remplies de découvertes et de sourires.
            </p>
          </div>

          {!chargement && !erreur && activites.length === 0 && (
            <p className="text-center text-muted">
              Aucune activité disponible pour le moment.
            </p>
          )}

          <div className="row g-3">
            {activites.map((activite) => (
              <div className="col-12 col-md-6 col-lg-4" key={activite.id}>
                <div
                  className="d-flex align-items-center gap-3 p-3 rounded-4 h-100"
                  style={{
                    backgroundColor: "#ffffff",
                    border: "1px solid #f0e3e6",
                  }}
                >
                  <div
                    className="d-flex align-items-center justify-content-center rounded-3 flex-shrink-0"
                    style={{
                      width: "54px",
                      height: "54px",
                      backgroundColor: "#f8e8eb",
                      fontSize: "25px",
                    }}
                  >
                    🎨
                  </div>

                  <div>
                    <h3
                      className="h6 fw-bold mb-2"
                      style={{ color: "#405b48" }}
                    >
                      {activite.nom}
                    </h3>

                    <p className="mb-0" style={{ color: "#bd8290" }}>
                      <strong>Jour :</strong> {activite.jour}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}