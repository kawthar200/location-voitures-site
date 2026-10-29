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
    description:
      "La Dacia Logan est une voiture pratique et confortable, adaptée aux déplacements en ville comme aux longs trajets.",
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
    description:
      "La Renault Clio offre un excellent confort de conduite et convient parfaitement aux déplacements quotidiens.",
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
    description:
      "Le Peugeot 3008 est un SUV confortable et moderne, idéal pour les trajets en famille ou professionnels.",
  },
];

type PageProps = {
  params: Promise<{
    id: string;
  }>;
};

export default async function VoitureDetailPage({
  params,
}: PageProps) {
  const { id } = await params;

  const voiture = voitures.find(
    (voiture) => voiture.id === id
  );

  if (!voiture) {
    return (
      <main className="car-detail-not-found">
        <h1>Voiture introuvable</h1>

        <p>
          La voiture que vous recherchez n'existe pas.
        </p>

        <Link
          href="/voitures"
          className="btn btn-primary"
        >
          Retour aux voitures
        </Link>
      </main>
    );
  }

  const whatsappMessage = encodeURIComponent(
    `Bonjour, je suis intéressé(e) par la ${voiture.marque} ${voiture.modele} ${voiture.annee}. Je souhaite avoir plus d'informations.`
  );

  return (
    <main>
      {/* =========================
          DETAIL VOITURE
      ========================= */}

      <section className="car-detail">
        <div className="car-detail-container">

          {/* IMAGE */}
          <div className="car-detail-image">
            <img
              src={voiture.image}
              alt={`${voiture.marque} ${voiture.modele}`}
            />
          </div>

          {/* INFORMATIONS */}
          <div className="car-detail-content">

            <p className="section-subtitle">
              NOTRE FLOTTE
            </p>

            <p className="car-detail-brand">
              {voiture.marque}
            </p>

            <h1>
              {voiture.modele}
            </h1>

            <p className="car-detail-description">
              {voiture.description}
            </p>

            {/* CARACTERISTIQUES */}
            <div className="car-detail-features">

              <div>
                <span>Année</span>
                <strong>{voiture.annee}</strong>
              </div>

              <div>
                <span>Boîte</span>
                <strong>{voiture.boite}</strong>
              </div>

              <div>
                <span>Carburant</span>
                <strong>{voiture.carburant}</strong>
              </div>

              <div>
                <span>Places</span>
                <strong>{voiture.places}</strong>
              </div>

            </div>

            {/* BOUTONS */}
            <div className="car-detail-actions">

              <a
                href={`https://wa.me/212600000000?text=${whatsappMessage}`}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-whatsapp"
              >
                💬 Contacter sur WhatsApp
              </a>

              <Link
                href="/voitures"
                className="btn btn-secondary"
              >
                ← Retour aux voitures
              </Link>

            </div>

          </div>
        </div>
      </section>
    </main>
  );
}