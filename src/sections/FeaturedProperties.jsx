import PropertyCard from '../components/PropertyCard/PropertyCard'
import properties from '../data/properties'

function FeaturedProperties() {
  const featuredProperties = properties.filter((property) => property.featured)

  return (
    <section className="section featured-properties" id="properties">
      <div className="container">
        <div className="featured-properties__intro">
          <p className="featured-properties__eyebrow">Sélection exclusive</p>
          <h2 className="featured-properties__title">
            Quelques adresses choisies pour leur singularité, leur lumière et leur emplacement.
          </h2>
        </div>

        <div className="featured-properties__grid">
          {featuredProperties.map((property) => (
            <PropertyCard key={property.id} property={property} />
          ))}
        </div>
      </div>
    </section>
  )
}

export default FeaturedProperties