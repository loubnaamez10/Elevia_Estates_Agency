import './Hero.css'

function Hero() {
  return (
    <section className="hero">
      <div className="hero__overlay"></div>

      <div className="container hero__content">
        <p className="hero__eyebrow">Agence immobilière premium à Alger</p>

        <h1 className="hero__title">
          L’immobilier d’exception dans une expérience plus élégante.
        </h1>

        <p className="hero__text">
          Nous accompagnons l’achat, la vente et l’investissement de biens haut
          de gamme avec un sens du détail, du conseil et de la discrétion.
        </p>

        <div className="hero__actions">
          <a href="#properties" className="hero__btn hero__btn--primary">
            Explorer les biens
          </a>

          <a href="#about" className="hero__btn hero__btn--secondary">
            Découvrir l’agence
          </a>
        </div>

        <div className="hero__stats">
          <div>
            <strong>120+</strong>
            <span>biens vendus</span>
          </div>

          <div>
            <strong>15</strong>
            <span>consultants experts</span>
          </div>

          <div>
            <strong>3</strong>
            <span>villes couvertes</span>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero