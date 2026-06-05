import './Header.css'

function Header() {
  return (
    <header className="header">
      <div className="container header__inner">
        <a href="/" className="header__logo">
          ÉLÉVIA
        </a>

        <nav className="header__nav">
          <a href="#properties">Propriétés</a>
          <a href="#about">Agence</a>
          <a href="#contact">Contact</a>
        </nav>

        <a href="#contact" className="header__cta">
          Prendre rendez-vous
        </a>
      </div>
    </header>
  )
}

export default Header