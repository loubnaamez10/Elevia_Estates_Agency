function ContactPreview() {
  return (
    <section className="section contact-preview" id="contact">
      <div className="container contact-preview__box">
        <div className="contact-preview__content">
          <p className="contact-preview__eyebrow">Contact</p>
          <h2 className="contact-preview__title">
            Parlons de votre prochain bien d’exception.
          </h2>
          <p className="contact-preview__text">
            Que vous recherchiez une résidence principale, un investissement ou
            une vente confidentielle, notre équipe vous accompagne avec une
            approche sur mesure.
          </p>
        </div>

        <div className="contact-preview__actions">
          <a href="tel:+213555000000" className="contact-preview__btn contact-preview__btn--primary">
            Appeler l’agence
          </a>
          <a href="mailto:contact@elevia-estates.com" className="contact-preview__btn contact-preview__btn--secondary">
            Écrire un email
          </a>
        </div>
      </div>
    </section>
  )
}

export default ContactPreview