import Link from "next/link";

const voitures = [
  {
    id: "dacia-logan",
    marque: "Dacia",
    modele: "Logan",
    annee: 2025,
    boite: "Manuelle",
    carburant: "Diesel",
    places: 5,
    image: "/images/dacia-logan.jpg",
  },
  {
    id: "renault-clio",
    marque: "Renault",
    modele: "Clio",
    annee: 2025,
    boite: "Automatique",
    carburant: "Essence",
    places: 5,
    image: "/images/renault-clio.jpg",
  },
  {
    id: "peugeot-3008",
    marque: "Peugeot",
    modele: "3008",
    annee: 2025,
    boite: "Automatique",
    carburant: "Diesel",
    places: 5,
    image: "/images/peugeot-3008.jpg",
  },
];

export default function VoituresPage() {
  return (
    <main>
      {/* HERO */}
      <section className="cars-page-hero">
        <div className="cars-page-hero-content">
          <p>NOTRE FLOTTE</p>

          <h1>Nos voitures</h1>

          <span>
            Découvrez notre sélection de véhicules
            disponibles à la location.
          </span>
        </div>
      </section>

      {/* VOITURES */}
      <section className="cars-section">
        <div className="cars-section-header">
          <p className="section-subtitle">
            NOTRE FLOTTE
          </p>

          <h2>
            Découvrez nos véhicules
          </h2>

          <p>
            Choisissez le véhicule qui correspond
            à vos besoins.
          </p>
        </div>

        <div className="cars-grid">
          {voitures.map((voiture) => (
            <article
              className="car-rental-card"
              key={voiture.id}
            >
              {/* IMAGE */}
              <div className="car-rental-image">
                <img
                  src={voiture.image}
                  alt={`${voiture.marque} ${voiture.modele}`}
                />
              </div>

              {/* INFORMATIONS */}
              <div className="car-rental-content">

                <div className="car-title">
                  <div>
                    <p>{voiture.marque}</p>

                    <h3>{voiture.modele}</h3>
                  </div>

                  <span>
                    {voiture.annee}
                  </span>
                </div>

                <div className="car-features">

                  <span>
                    ⚙️ {voiture.boite}
                  </span>

                  <span>
                    ⛽ {voiture.carburant}
                  </span>

                  <span>
                    👥 {voiture.places} places
                  </span>

                </div>

                <Link
                  href={`/voitures/${voiture.id}`}
                  className="car-details-button"
                >
                  Voir les détails
                </Link>

              </div>
            </article>
          ))}
        </div>
      </section>

      {/* CONTACT */}
      <section className="cars-contact">
        <div>
          <p className="section-subtitle">
            UNE QUESTION ?
          </p>

          <h2>
            Vous êtes intéressé par une voiture ?
          </h2>

          <p>
            Contactez-nous directement sur WhatsApp
            pour obtenir plus d'informations.
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