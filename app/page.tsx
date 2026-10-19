import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Services from "@/components/Services";

export default function HomePage() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Services />

        <section id="contact" className="py-5 text-center text-white bg-success">
          <div className="container">
            <h2 className="fw-bold">Contactez-nous</h2>
            <p>Une question sur notre garderie ? Nous sommes là pour vous.</p>
            <a
              href="mailto:contact@petitsexplorateurs.tn"
              className="btn btn-light"
            >
              Envoyer un email
            </a>
          </div>
        </section>
      </main>

      <footer className="text-center py-3 bg-light">
        © 2026 Les Petits Explorateurs — Tous droits réservés
      </footer>
    </>
  );
}