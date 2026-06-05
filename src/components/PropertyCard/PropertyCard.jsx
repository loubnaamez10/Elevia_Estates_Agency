import { Link } from 'react-router-dom'
import './PropertyCard.css'

function PropertyCard({ property }) {
  return (
    <article className="property-card">
      <div className="property-card__image-wrapper">
        <img
          src={property.image}
          alt={property.title}
          className="property-card__image"
        />
      </div>

      <div className="property-card__content">
        <div className="property-card__top">
          <span className="property-card__type">{property.type}</span>
          <span className="property-card__surface">{property.surface}</span>
        </div>

        <h3 className="property-card__title">{property.title}</h3>
        <p className="property-card__location">{property.location}</p>

        <div className="property-card__meta">
          <span>{property.bedrooms} chambres</span>
          <span>{property.bathrooms} salles de bain</span>
        </div>

        <div className="property-card__bottom">
          <strong className="property-card__price">{property.price}</strong>

          <Link to={`/properties/${property.id}`} className="property-card__link">
            Voir le bien
          </Link>
        </div>
      </div>
    </article>
  )
}

export default PropertyCard