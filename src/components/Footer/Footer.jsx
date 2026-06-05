import './Footer.css'

function Footer() {
  return (
    <footer className="footer">
      <div className="container footer__grid">
        <div className="footer__brand">
          <a href="/" className="footer__logo">
            ÉLÉVIA
          </a>
          <p className="footer__text">
            Agence immobilière premium spécialisée dans les biens d’exception à
            Alger, Oran et sur le littoral.
          </p>
        </div>

        <div>
          <h3 className="footer__title">Navigation</h3>
          <div className="footer__links">
            <a href="/properties">Propriétés</a>
            <a href="#about">Agence</a>
            <a href="#contact">Contact</a>
          </div>
        </div>

        <div>
          <h3 className="footer__title">Coordonnées</h3>
          <div className="footer__links">
            <a href="tel:+213555000000">+213 555 00 00 00</a>
            <a href="mailto:contact@elevia-estates.com">
              contact@elevia-estates.com
            </a>
            <span>Alger, Algérie</span>
          </div>
        </div>
      </div>

      <div className="container footer__bottom">
        <p>© 2026 ÉLÉVIA Estates. Tous droits réservés.</p>
      </div>
    </footer>
  )
}

export default Footer