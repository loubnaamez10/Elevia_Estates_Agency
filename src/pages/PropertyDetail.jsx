import { Link, useParams } from 'react-router-dom'
import { useEffect, useMemo, useState } from 'react'
import Header from '../components/Header/Header'
import Footer from '../components/Footer/Footer'
import properties from '../data/properties'
import './PropertyDetail.css'

function PropertyDetail() {
  const { id } = useParams()
  const property = properties.find((item) => item.id === Number(id))

  const gallery = useMemo(() => {
    if (!property) return []
    if (property.gallery && property.gallery.length > 0) return property.gallery
    return [property.image]
  }, [property])

  const [activeImage, setActiveImage] = useState('')

  useEffect(() => {
    if (gallery.length > 0) {
      setActiveImage(gallery[0])
    }
  }, [gallery])

  if (!property) {
    return (
      <>
        <Header />
        <main className="property-detail property-detail--empty">
          <div className="container">
            <p>Bien introuvable.</p>
            <Link to="/properties" className="property-detail__back">
              Retour aux propriétés
            </Link>
          </div>
        </main>
        <Footer />
      </>
    )
  }

  return (
    <>
      <Header />

      <main className="property-detail">
        <section className="property-detail__hero">
          <div className="container property-detail__hero-content">
            <Link to="/properties" className="property-detail__back">
              ← Retour aux propriétés
            </Link>

            <div className="property-detail__heading">
              <p className="property-detail__eyebrow">{property.type}</p>
              <h1 className="property-detail__title">{property.title}</h1>
              <p className="property-detail__location">{property.location}</p>
            </div>
          </div>
        </section>

        <section className="property-detail__main section">
          <div className="container property-detail__grid">
            <div className="property-detail__gallery">
              <div className="property-detail__main-image-wrap">
                <img
                  src={activeImage}
                  alt={property.title}
                  className="property-detail__image"
                />
              </div>

              <div className="property-detail__thumbs">
                {gallery.map((img, index) => (
                  <button
                    key={index}
                    type="button"
                    className={`property-detail__thumb ${
                      activeImage === img ? 'property-detail__thumb--active' : ''
                    }`}
                    onClick={() => setActiveImage(img)}
                    aria-label={`Voir image ${index + 1}`}
                  >
                    <img src={img} alt={`${property.title} vue ${index + 1}`} />
                  </button>
                ))}
              </div>
            </div>

            <aside className="property-detail__sidebar">
              <div className="property-detail__card">
                <p className="property-detail__price">{property.price}</p>

                <div className="property-detail__specs">
                  <div>
                    <span>Surface</span>
                    <strong>{property.surface}</strong>
                  </div>
                  <div>
                    <span>Chambres</span>
                    <strong>{property.bedrooms}</strong>
                  </div>
                  <div>
                    <span>Salles de bain</span>
                    <strong>{property.bathrooms}</strong>
                  </div>
                  <div>
                    <span>Ville</span>
                    <strong>{property.city}</strong>
                  </div>
                </div>

                <div className="property-detail__actions">
                  <a
                    href="tel:+213555000000"
                    className="property-detail__btn property-detail__btn--primary"
                  >
                    Appeler l’agence
                  </a>
                  <a
                    href="mailto:contact@elevia-estates.com"
                    className="property-detail__btn property-detail__btn--secondary"
                  >
                    Demander une visite
                  </a>
                </div>
              </div>
            </aside>
          </div>

          <div className="container property-detail__content">
            <div className="property-detail__description">
              <p className="property-detail__eyebrow">Description</p>
              <h2>Un bien sélectionné pour sa qualité de vie et sa valeur patrimoniale.</h2>
              <p>{property.description}</p>
              <p>
                Pensé pour une clientèle exigeante, ce bien conjugue emplacement,
                confort et élégance dans une approche immobilière premium.
              </p>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  )
}

export default PropertyDetail