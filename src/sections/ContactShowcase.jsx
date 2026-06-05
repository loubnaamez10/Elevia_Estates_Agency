import './ContactShowcase.css'

function ContactShowcase() {
  return (
    <section className="contact-showcase" id="contact">
      <div className="container contact-showcase__grid">
        <div className="contact-showcase__intro">
          <p className="contact-showcase__eyebrow">Contact</p>
          <h2 className="contact-showcase__title">
            Parlons de votre prochain bien d’exception.
          </h2>
          <p className="contact-showcase__text">
            Notre équipe accompagne chaque projet d’acquisition avec discrétion,
            exigence et disponibilité. Contactez ÉLÉVIA Estates pour organiser
            un échange confidentiel ou planifier une visite privée.
          </p>

          <div className="contact-showcase__promise">
            <span className="contact-showcase__promise-dot"></span>
            Retour sous 24h
          </div>
        </div>

        <div className="contact-showcase__panel">
          <a href="tel:+213555241890" className="contact-showcase__card">
            <span className="contact-showcase__label">Téléphone</span>
            <strong>+213 667822379</strong>
            <small>Appelez directement un conseiller</small>
          </a>

          <a href="mailto:elevia-estates@gmail.com" className="contact-showcase__card">
            <span className="contact-showcase__label">Email</span>
            <strong>elevia-estates@gmail.com</strong>
            <small>Pour une demande d’information ou de visite</small>
          </a>

          <div className="contact-showcase__card">
            <span className="contact-showcase__label">Adresse</span>
            <strong>Résidence El Ryad, Val d’Hydra, Alger</strong>
            <small>Accueil sur rendez-vous</small>
          </div>

          <div className="contact-showcase__card">
            <span className="contact-showcase__label">Horaires</span>
            <strong>Dimanche - Jeudi : 09:00 - 18:00</strong>
            <small>Disponibilité agence</small>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ContactShowcase