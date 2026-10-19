
"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import "./inscription.css";

export default function InscriptionPage() {
  const [message, setMessage] = useState("");
  const [today, setToday] = useState("");

useEffect(() => {
  setToday(new Date().toISOString().split("T")[0]);
}, []);

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const form = event.currentTarget;
    const data = new FormData(form);

    if (data.get("parentEmail") !== data.get("confirmEmail")) {
      setMessage("Les deux adresses email ne correspondent pas.");
      return;
    }

    setMessage(
      "Votre formulaire est valide ! La prochaine étape sera l'enregistrement des données."
    );
    form.reset();
  }

  return (
    <main className="inscription-page">
      <div className="inscription-container" style={{ maxWidth: "750px" }}>
        <Link href="/" className="inscription-back">
          ← Retour à l'accueil
        </Link>

        <div className="inscription-header">
          <div style={{ fontSize: "3rem" }}>🧸</div>
          <h1 className="fw-bold">Inscription de votre enfant</h1>
          <p className="text-secondary">
            Bienvenue chez Les Petits Explorateurs !
            Remplissez le formulaire ci-dessous.
          </p>
        </div>

        {message && (
          <div className="inscription-message" role="status">
            {message}
          </div>
        )}

        <form
          onSubmit={handleSubmit}
          className="inscription-form"
        >
          <h2 className="h4 mb-3">Informations du parent</h2>

          <div className="row g-3">
            <div className="col-md-6">
              <label htmlFor="parentName" className="form-label">
                Nom et prénom du parent *
              </label>
              <input
                id="parentName"
                name="parentName"
                className="form-control"
                required
                maxLength={100}
              />
            </div>

            <div className="col-md-6">
              <label htmlFor="phone" className="form-label">
                Téléphone *
              </label>
              <input
                id="phone"
                name="phone"
                type="tel"
                className="form-control"
                required
                maxLength={25}
              />
            </div>

            <div className="col-md-6">
              <label htmlFor="parentEmail" className="form-label">
                Adresse email *
              </label>
              <input
                id="parentEmail"
                name="parentEmail"
                type="email"
                className="form-control"
                required
              />
            </div>

            <div className="col-md-6">
              <label htmlFor="confirmEmail" className="form-label">
                Confirmer l'email *
              </label>
              <input
                id="confirmEmail"
                name="confirmEmail"
                type="email"
                className="form-control"
                required
              />
            </div>
          </div>

          <hr className="my-4" />

          <h2 className="h4 mb-3">Informations de l'enfant</h2>

          <div className="row g-3">
            <div className="col-md-6">
              <label htmlFor="childName" className="form-label">
                Nom et prénom de l'enfant *
              </label>
              <input
                id="childName"
                name="childName"
                className="form-control"
                required
                maxLength={100}
              />
            </div>

            <div className="col-md-6">
              <label htmlFor="birthDate" className="form-label">
                Date de naissance *
              </label>
              <input
                id="birthDate"
                name="birthDate"
                type="date"
                className="form-control"
                required
                max={today || undefined}
              />
            </div>

            <div className="col-md-6">
              <label htmlFor="startDate" className="form-label">
                Date souhaitée de début *
              </label>
              <input
                id="startDate"
                name="startDate"
                type="date"
                className="form-control"
                required
              />
            </div>

            <div className="col-12">
              <label htmlFor="notes" className="form-label">
                Remarques (facultatif)
              </label>
              <textarea
                id="notes"
                name="notes"
                className="form-control"
                rows={3}
                maxLength={1000}
                placeholder="Informations utiles pour la garderie..."
              />
            </div>
          </div>

          <p className="inscription-required">
            * Champs obligatoires
          </p>

          <button type="submit" className="inscription-submit">
            Envoyer la demande d'inscription
          </button>
        </form>
      </div>
    </main>
  );
}
