import { useMemo, useState } from 'react'
import Header from '../components/Header/Header'
import Footer from '../components/Footer/Footer'
import PropertyCard from '../components/PropertyCard/PropertyCard'
import properties from '../data/properties'
import './Properties.css'

function Properties() {
  const [selectedType, setSelectedType] = useState('Tous')
  const [selectedCity, setSelectedCity] = useState('Toutes')
  const [budget, setBudget] = useState('Tous')

  const filteredProperties = useMemo(() => {
    return properties.filter((property) => {
      const typeMatch =
        selectedType === 'Tous' || property.type === selectedType

      const cityMatch =
        selectedCity === 'Toutes' || property.city === selectedCity

      const budgetValue = Number(property.price.replace(/[^\d]/g, ''))

      const budgetMatch =
        budget === 'Tous' ||
        (budget === '30' && budgetValue < 30000000) ||
        (budget === '50' &&
          budgetValue >= 30000000 &&
          budgetValue <= 50000000) ||
        (budget === '51' && budgetValue > 50000000)

      return typeMatch && cityMatch && budgetMatch
    })
  }, [selectedType, selectedCity, budget])

  return (
    <>
      <Header />

      <main className="properties-page">
        <section className="properties-hero">
          <div className="container properties-hero__content">
            <p className="properties-hero__eyebrow">Collection immobilière</p>
            <h1 className="properties-hero__title">
              Explorez nos biens avec une lecture plus claire, plus sélective.
            </h1>
            <p className="properties-hero__text">
              Une sélection de propriétés premium pensée pour simplifier la
              recherche, comparer rapidement et prendre contact sans friction.
            </p>
          </div>
        </section>

        <section className="properties-listing section">
          <div className="container">
            <div className="properties-filters">
              <div className="properties-filter">
                <label htmlFor="type">Type</label>
                <select
                  id="type"
                  value={selectedType}
                  onChange={(e) => setSelectedType(e.target.value)}
                >
                  <option>Tous</option>
                  <option>Villa</option>
                  <option>Appartement</option>
                  <option>Penthouse</option>
                </select>
              </div>

              <div className="properties-filter">
                <label htmlFor="city">Ville</label>
                <select
                  id="city"
                  value={selectedCity}
                  onChange={(e) => setSelectedCity(e.target.value)}
                >
                  <option>Toutes</option>
                  <option>Alger</option>
                  <option>Oran</option>
                  <option>Mostaganem</option>
                </select>
              </div>

              <div className="properties-filter">
                <label htmlFor="budget">Budget</label>
                <select
                  id="budget"
                  value={budget}
                  onChange={(e) => setBudget(e.target.value)}
                >
                  <option value="Tous">Tous</option>
                  <option value="30">Moins de 30M DZD</option>
                  <option value="50">30M à 50M DZD</option>
                  <option value="51">Plus de 50M DZD</option>
                </select>
              </div>
            </div>

            <div className="properties-results">
              <p>{filteredProperties.length} bien(s) trouvé(s)</p>
            </div>

            <div className="properties-grid">
              {filteredProperties.map((property) => (
                <PropertyCard key={property.id} property={property} />
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  )
}

export default Properties