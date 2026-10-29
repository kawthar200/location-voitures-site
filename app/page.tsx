import Link from "next/link";

const voitures = [
  {
    id: "dacia-logan",
    marque: "Dacia",
    modele: "Logan",
    image: "/images/dacia-logan.jpg",
  },
  {
    id: "renault-clio",
    marque: "Renault",
    modele: "Clio",
    image: "/images/renault-clio.jpg",
  },
  {
    id: "peugeot-3008",
    marque: "Peugeot",
    modele: "3008",
    image: "/images/peugeot-3008.jpg",
  },
];

export default function Home() {
  return (
    <main>
      {/* =========================
          HERO
      ========================= */}

      <section className="home-hero">
        <div className="home-hero-content">
          <p className="home-hero-subtitle">
            LOCATION DE VOITURES
          </p>

          <h1>
            Votre voiture,
            <br />
            votre liberté.
          </h1>

          <p className="home-hero-description">
            Découvrez notre sélection de véhicules et trouvez
            la voiture adaptée à vos déplacements.
          </p>

          <div className="home-hero-buttons">
            <Link
              href="/voitures"
              className="btn btn-primary"
            >
              Découvrir nos voitures
            </Link>

            <a
              href="https://wa.me/212600000000"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-whatsapp"
            >
              WhatsApp
            </a>
          </div>
        </div>
      </section>

      {/* =========================
          NOTRE FLOTTE
      ========================= */}

      <section className="home-cars">
        <div className="home-section-header">
          <p className="section-subtitle">
            NOTRE FLOTTE
          </p>

          <h2>
            Découvrez nos voitures
          </h2>

          <p>
            Une sélection de véhicules pour répondre
            à différents besoins.
          </p>
        </div>

        <div className="home-cars-grid">
          {voitures.map((voiture) => (
            <article
              className="home-car-card"
              key={voiture.id}
            >
              <div className="home-car-image">
                <img
                  src={voiture.image}
                  alt={`${voiture.marque} ${voiture.modele}`}
                />
              </div>

              <div className="home-car-content">
                <p>{voiture.marque}</p>

                <h3>{voiture.modele}</h3>

                <Link href={`/voitures/${voiture.id}`}>
                  Voir les détails →
                </Link>
              </div>
            </article>
          ))}
        </div>

        <div className="home-cars-button">
          <Link
            href="/voitures"
            className="btn btn-primary"
          >
            Voir toutes les voitures
          </Link>
        </div>
      </section>

      {/* =========================
          À PROPOS
      ========================= */}

      <section className="home-about">
        <div className="home-about-content">
          <div>
            <p className="section-subtitle">
              À PROPOS DE NOUS
            </p>

            <h2>
              Une agence proche de ses clients
            </h2>

            <p>
              Nous proposons des véhicules adaptés à vos
              déplacements personnels et professionnels.
              Notre objectif est de vous offrir une expérience
              simple, pratique et professionnelle.
            </p>

            <Link
              href="/a-propos"
              className="btn btn-primary"
            >
              En savoir plus
            </Link>
          </div>
        </div>
      </section>

      {/* =========================
          WHATSAPP
      ========================= */}

      <section className="home-contact">
        <div>
          <p className="section-subtitle">
            BESOIN D'INFORMATIONS ?
          </p>

          <h2>
            Contactez-nous directement
          </h2>

          <p>
            Une voiture vous intéresse ?
            Contactez-nous sur WhatsApp pour obtenir
            plus d'informations.
          </p>

          <a
            href="https://wa.me/212600000000"
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-whatsapp"
          >
            💬 Contacter sur WhatsApp
          </a>
        </div>
      </section>
    </main>
  );
}