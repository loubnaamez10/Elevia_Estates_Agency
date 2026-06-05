import { useState } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import './Header.css'

function Header() {
  const [isOpen, setIsOpen] = useState(false)
  const location = useLocation()

  const closeMenu = () => setIsOpen(false)

  const isHome = location.pathname === '/'

  return (
    <header className="header">
      <div className="container header__inner">
        <Link to="/" className="header__logo" onClick={closeMenu}>
          ÉLÉVIA
        </Link>

        <nav
          id="site-navigation"
          className={`header__nav ${isOpen ? 'header__nav--open' : ''}`}
        >
          <NavLink to="/" end className="header__link" onClick={closeMenu}>
            Accueil
          </NavLink>

          <NavLink to="/properties" className="header__link" onClick={closeMenu}>
            Propriétés
          </NavLink>

          {isHome ? (
            <>
              <a href="#about" className="header__link" onClick={closeMenu}>
                Agence
              </a>
              <a href="#contact" className="header__link" onClick={closeMenu}>
                Contact
              </a>
            </>
          ) : (
            <>
              <Link to="/#about" className="header__link" onClick={closeMenu}>
                Agence
              </Link>
              <Link to="/#contact" className="header__link" onClick={closeMenu}>
                Contact
              </Link>
            </>
          )}
        </nav>

        <div className="header__actions">
          {isHome ? (
            <a href="#contact" className="header__cta" onClick={closeMenu}>
              Prendre rendez-vous
            </a>
          ) : (
            <Link to="/#contact" className="header__cta" onClick={closeMenu}>
              Prendre rendez-vous
            </Link>
          )}

          <button
            className="header__toggle"
            type="button"
            onClick={() => setIsOpen((prev) => !prev)}
            aria-label={isOpen ? 'Fermer le menu' : 'Ouvrir le menu'}
            aria-expanded={isOpen}
            aria-controls="site-navigation"
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