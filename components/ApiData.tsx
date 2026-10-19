
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

  useEffect(() => {
    async function chargerDonnees() {
      try {
        const [g, s, a] = await Promise.all([
          fetch("http://localhost:4000/api/garderie"),
          fetch("http://localhost:4000/api/services"),
          fetch("http://localhost:4000/api/activites"),
        ]);

        if (!g.ok || !s.ok || !a.ok) {
          throw new Error("Erreur lors du chargement des données.");
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
            : "Erreur inconnue lors du chargement des données."
        );
      }
    }

    chargerDonnees();
  }, []);

  if (erreur) {
    return <p className="alert alert-warning">{erreur}</p>;
  }

  return (
    <section className="container py-5">
      <h2 className="mb-4">Informations de la garderie</h2>

      {!garderie ? (
        <p>Chargement...</p>
      ) : (
        <div className="card p-4 mb-5">
          <h3>{garderie.nom}</h3>
          <p>{garderie.description}</p>
          <p>Adresse : {garderie.adresse}</p>
          <p>Email : {garderie.email}</p>
        </div>
      )}

      <h2 className="mb-4">Nos services</h2>
      <div className="row g-4 mb-5">
        {services.map((service) => (
          <div className="col-md-4" key={service.id}>
            <div className="card h-100 p-3">
              <h3>{service.nom}</h3>
              <p>{service.description}</p>
            </div>
          </div>
        ))}
      </div>

      <h2 className="mb-4">Nos activités</h2>
      <div className="row g-3">
        {activites.map((activite) => (
          <div className="col-md-4" key={activite.id}>
            <div className="card p-3 h-100">
              <h3>{activite.nom}</h3>
              <p>Jour : {activite.jour}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
