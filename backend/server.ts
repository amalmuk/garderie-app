
import express from "express";
import cors from "cors";

const app = express();
const PORT = 4000;

app.use(cors());
app.use(express.json());

app.get("/api/garderie", (_req, res) => {
  res.json({
    nom: "Les Petits Explorateurs",
    adresse: "Sousse, Tunisie",
    email: "contact@petitsexplorateurs.tn",
    description: "Une garderie chaleureuse pour apprendre et grandir."
  });
});

app.get("/api/services", (_req, res) => {
  res.json([
    { id: 1, nom: "Activités créatives", description: "Dessin, peinture et bricolage." },
    { id: 2, nom: "Éveil et apprentissage", description: "Des activités éducatives adaptées." },
    { id: 3, nom: "Jeux et socialisation", description: "Apprendre à partager et à coopérer." }
  ]);
});

app.get("/api/activites", (_req, res) => {
  res.json([
    { id: 1, nom: "Dessin", jour: "Lundi" },
    { id: 2, nom: "Musique", jour: "Mercredi" },
    { id: 3, nom: "Jeux collectifs", jour: "Vendredi" }
  ]);
});

app.listen(PORT, () => {
  console.log(`Backend démarré sur http://localhost:${PORT}`);
});
