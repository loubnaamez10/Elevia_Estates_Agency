import './Hero.css'

function Hero() {
  return (
    <section className="hero">
      <div className="hero__overlay"></div>
      <div className="hero__grain"></div>

      <div className="container hero__content">
        <div className="hero__badge">
          <span className="hero__badge-dot"></span>
          Collection privée • Alger / Oran / Littoral
        </div>

        <p className="hero__eyebrow">Agence immobilière premium</p>

        <h1 className="hero__title">
          Des propriétés rares, présentées avec plus de calme, plus de goût.
        </h1>

        <p className="hero__text">
          ÉLÉVIA Estates accompagne une clientèle exigeante dans l’acquisition,
          la vente et la valorisation de biens d’exception avec une esthétique
          sobre et un service très personnalisé.
        </p>

        <div className="hero__actions">
          <a href="#properties" className="hero__btn hero__btn--primary">
            Explorer les biens
          </a>

          <a href="#contact" className="hero__btn hero__btn--secondary">
            Planifier un échange
          </a>
        </div>

        <div className="hero__stats">
          <article className="hero__stat">
            <strong>120+</strong>
            <span>transactions accompagnées</span>
          </article>

          <article className="hero__stat">
            <strong>15</strong>
            <span>consultants spécialisés</span>
          </article>

          <article className="hero__stat">
            <strong>24h</strong>
            <span>pour une première prise en charge</span>
          </article>
        </div>
      </div>
    </section>
  )
}

export default Hero