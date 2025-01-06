import React, { useState } from 'react';
import './VectorListings.css';
import { searchListings, SearchResult } from './service';

const VectorListings: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [searchType, setSearchType] = useState<'tenant' | 'landlord'>('tenant');
  const [results, setResults] = useState<SearchResult[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSearch = async () => {
    console.log('Search Query:', searchQuery);
    console.log('Search Type:', searchType);

    setLoading(true);
    setError(null);

    try {
      const searchResults = await searchListings(searchQuery, searchType, {
         });
      setResults(searchResults);
      console.log('Search Results:', searchResults);
    } catch (err: any) {
      setError(err.message || 'Ein Fehler ist aufgetreten.');
      console.error('Fehler beim Laden der Suchergebnisse:', err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="vector-listings">
      <div className="search-container">
        <h1>Finde dein perfektes Angebot</h1>
        <input
          type="text"
          placeholder="Wohin soll die Reise gehen?"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
        <div className="radio-buttons">
          <label>
            <input
              type="radio"
              value="tenant"
              checked={searchType === 'tenant'}
              onChange={() => setSearchType('tenant')}
            />
            Mieter suchen
          </label>
          <label>
            <input
              type="radio"
              value="landlord"
              checked={searchType === 'landlord'}
              onChange={() => setSearchType('landlord')}
            />
            Vermieter suchen
          </label>
        </div>
        <button onClick={handleSearch} disabled={loading}>
          {loading ? 'Suche läuft...' : 'Suche starten'}
        </button>
        {error && <p className="error-message">{error}</p>}
        {results.length > 0 && (
          <div className="results">
            <h2>Suchergebnisse:</h2>
            <ul>
              {results.map((result, index) => (
                <li key={index}>
                  {result.type === 'listing' && (
                    <>
                      <h3>{result.data.title} (Inserat)</h3>
                      <p>{result.data.description}</p>
                      <p>Preis: {result.data.price}€</p>
                      <p>Zimmer: {result.data.bedrooms}</p>
                      <p>Ort: {result.data.location}</p>
                    </>
                  )}
                  {result.type === 'tenantSearch' && (
                    <>
                      <h3>{result.data.title} (Gesuch)</h3>
                      <p>{result.data.description}</p>
                      <p>Budget: bis zu {result.data.budget}€</p>
                      <p>Bevorzugte Zimmer: {result.data.preferredBedrooms}</p>
                      <p>Bevorzugte Orte: {result.data.preferredLocations.join(', ')}</p>
                    </>
                  )}
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};

export default VectorListings;
