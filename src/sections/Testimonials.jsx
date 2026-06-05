function Testimonials() {
  return (
    <section className="section testimonials">
      <div className="container">
        <div className="testimonials__intro">
          <p className="testimonials__eyebrow">Ils nous font confiance</p>
          <h2 className="testimonials__title">
            Une expérience immobilière pensée avec exigence, clarté et
            discrétion.
          </h2>
        </div>

        <div className="testimonials__grid">
          <article className="testimonial-card">
            <p className="testimonial-card__text">
              ÉLÉVIA nous a accompagnés avec beaucoup de finesse dans
              l’acquisition de notre villa. Tout était fluide, élégant et très
              professionnel.
            </p>
            <div className="testimonial-card__author">
              <strong>Nadia B.</strong>
              <span>Acquéreuse à Hydra</span>
            </div>
          </article>

          <article className="testimonial-card">
            <p className="testimonial-card__text">
              Ce que j’ai apprécié, c’est la qualité de sélection des biens et
              le vrai sens du conseil. On sent une agence qui comprend le haut
              de gamme.
            </p>
            <div className="testimonial-card__author">
              <strong>Karim M.</strong>
              <span>Investisseur à Oran</span>
            </div>
          </article>

          <article className="testimonial-card">
            <p className="testimonial-card__text">
              Le suivi, la disponibilité et la présentation des propriétés ont
              fait toute la différence. Une expérience premium du début à la
              signature.
            </p>
            <div className="testimonial-card__author">
              <strong>Sarah T.</strong>
              <span>Vendeuse à Aïn Benian</span>
            </div>
          </article>
        </div>
      </div>
    </section>
  )
}

export default Testimonials