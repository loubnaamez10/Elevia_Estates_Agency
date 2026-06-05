import PropertyCard from '../components/PropertyCard/PropertyCard'
import properties from '../data/properties'

function FeaturedProperties() {
  return (
    <section className="section" id="properties">
      <div className="container">
        <div className="featured-properties__intro">
          <p className="featured-properties__eyebrow">Sélection signature</p>
          <h2 className="featured-properties__title">
            Des biens choisis pour leur architecture, leur emplacement et leur
            rareté.
          </h2>
        </div>

        <div className="featured-properties__grid">
          {properties.map((property) => (
            <PropertyCard key={property.id} property={property} />
          ))}
        </div>
      </div>
    </section>
  )
}

export default FeaturedProperties