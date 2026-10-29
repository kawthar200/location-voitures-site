import Link from "next/link";

export default function ContactPage() {
  return (
    <main>

      {/* =========================
          HERO
      ========================= */}

      <section className="contact-hero">

        <div>

          <p>CONTACT</p>

          <h1>
            Contactez-nous
          </h1>

          <span>
            Notre équipe est à votre disposition
            pour répondre à vos questions.
          </span>

        </div>

      </section>


      {/* =========================
          INFORMATIONS
      ========================= */}

      <section className="contact-section">

        <div className="contact-container">

          {/* INTRODUCTION */}

          <div className="contact-intro">

            <p className="section-subtitle">
              BESOIN D'INFORMATIONS ?
            </p>

            <h2>
              Nous sommes à votre écoute
            </h2>

            <p>
              Vous souhaitez obtenir des informations
              sur une voiture, connaître sa disponibilité
              ou simplement nous poser une question ?
            </p>

            <p>
              Contactez-nous directement par téléphone
              ou sur WhatsApp.
            </p>

          </div>


          {/* INFORMATIONS CONTACT */}

          <div className="contact-info">

            {/* TELEPHONE */}

            <div className="contact-item">

              <div className="contact-icon">
                📞
              </div>

              <div>
                <span>
                  Téléphone
                </span>

                <a href="tel:+212600000000">
                  +212 6 00 00 00 00
                </a>
              </div>

            </div>


            {/* WHATSAPP */}

            <div className="contact-item">

              <div className="contact-icon">
                💬
              </div>

              <div>
                <span>
                  WhatsApp
                </span>

                <a
                  href="https://wa.me/212600000000"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Nous contacter sur WhatsApp
                </a>
              </div>

            </div>


            {/* EMAIL */}

            <div className="contact-item">

              <div className="contact-icon">
                ✉️
              </div>

              <div>
                <span>
                  Email
                </span>

                <a href="mailto:contact@locationauto.ma">
                  contact@locationauto.ma
                </a>
              </div>

            </div>


            {/* ADRESSE */}

            <div className="contact-item">

              <div className="contact-icon">
                📍
              </div>

              <div>
                <span>
                  Adresse
                </span>

                <p>
                  Maroc
                </p>
              </div>

            </div>


            {/* HORAIRES */}

            <div className="contact-item">

              <div className="contact-icon">
                🕐
              </div>

              <div>
                <span>
                  Horaires
                </span>

                <p>
                  Lundi – Samedi : 9h00 – 19h00
                </p>
              </div>

            </div>

          </div>

        </div>

      </section>


      {/* =========================
          WHATSAPP
      ========================= */}

      <section className="contact-whatsapp">

        <div>

          <p className="section-subtitle">
            CONTACT RAPIDE
          </p>

          <h2>
            Une voiture vous intéresse ?
          </h2>

          <p>
            Écrivez-nous directement sur WhatsApp
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


      {/* =========================
          RETOUR VOITURES
      ========================= */}

      <section className="contact-cars">

        <h2>
          Découvrez notre flotte
        </h2>

        <p>
          Consultez nos véhicules disponibles.
        </p>

        <Link
          href="/voitures"
          className="btn btn-primary"
        >
          Voir nos voitures
        </Link>

      </section>

    </main>
  );
}