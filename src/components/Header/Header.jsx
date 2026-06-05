import { useState } from 'react'
import './Header.css'

function Header() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <header className="header">
      <div className="container header__inner">
        <a href="/" className="header__logo">
          ÉLÉVIA
        </a>

        <nav className={`header__nav ${isOpen ? 'header__nav--open' : ''}`}>
          <a href="/properties" onClick={() => setIsOpen(false)}>
            Propriétés
          </a>
          <a href="#about" onClick={() => setIsOpen(false)}>
            Agence
          </a>
          <a href="#contact" onClick={() => setIsOpen(false)}>
            Contact
          </a>
        </nav>

        <div className="header__actions">
          <a href="#contact" className="header__cta">
            Prendre rendez-vous
          </a>

          <button
            className="header__toggle"
            type="button"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Ouvrir le menu"
          >
            <span></span>
            <span></span>
          </button>
        </div>
      </div>
    </header>
  )
}

export default Header