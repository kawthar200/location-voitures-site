import Link from "next/link";

export default function AProposPage() {
  return (
    <main>
      {/* HERO */}
      <section className="about-hero">
        <div>
          <p>À PROPOS DE NOUS</p>

          <h1>Une agence proche de ses clients</h1>

          <span>
            Découvrez notre agence de location de voitures.
          </span>
        </div>
      </section>

      {/* PRESENTATION */}
      <section className="about-section">
        <div className="about-container">

          <div className="about-text">
            <p className="section-subtitle">
              NOTRE AGENCE
            </p>

            <h2>
              Une solution simple pour vos déplacements
            </h2>

            <p>
              Notre agence propose une sélection de voitures
              adaptées aux déplacements personnels et
              professionnels.
            </p>

            <p>
              Nous mettons l'accent sur la simplicité,
              la disponibilité et l'accompagnement de nos
              clients afin de leur permettre de choisir
              facilement le véhicule qui correspond à leurs
              besoins.
            </p>

            <p>
              Notre équipe reste à votre disposition pour
              répondre à vos questions et vous accompagner
              dans le choix de votre véhicule.
            </p>
          </div>

          <div className="about-image">
            <img
              src="/images/hero-car.jpg"
              alt="Agence de location de voitures"
            />
          </div>

        </div>
      </section>

      {/* NOS ENGAGEMENTS */}
      <section className="about-values">
        <div className="about-values-container">

          <div className="about-values-header">
            <p className="section-subtitle">
              NOS ENGAGEMENTS
            </p>

            <h2>
              Ce qui compte pour nous
            </h2>
          </div>

          <div className="about-values-grid">

            <div className="about-value">
              <div className="about-value-icon">
                🚗
              </div>

              <h3>
                Des véhicules adaptés
              </h3>

              <p>
                Une sélection de véhicules pour différents
                types de déplacements.
              </p>
            </div>

            <div className="about-value">
              <div className="about-value-icon">
                🤝
              </div>

              <h3>
                Proximité
              </h3>

              <p>
                Nous privilégions une relation simple et
                directe avec nos clients.
              </p>
            </div>

            <div className="about-value">
              <div className="about-value-icon">
                💬
              </div>

              <h3>
                Disponibilité
              </h3>

              <p>
                Notre équipe est disponible pour répondre
                à vos questions.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section className="about-contact">
        <div>
          <p className="section-subtitle">
            BESOIN D'INFORMATIONS ?
          </p>

          <h2>
            Vous souhaitez en savoir plus ?
          </h2>

          <p>
            Découvrez nos voitures ou contactez-nous
            directement sur WhatsApp.
          </p>

          <div className="about-buttons">

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
              💬 WhatsApp
            </a>

          </div>
        </div>
      </section>
    </main>
  );
}