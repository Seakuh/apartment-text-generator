import React from 'react';
import './ListingsItem.css';

interface ListingProps {
  listing: {
    id: number;
    title: string;
    description: string;
    generatedMessage: string;
    createdAt: string;
    userAttributes?: {
      email: string | null;
      phone: string | null;
      verified: boolean | null;
    };
  };
}

const ListingItem: React.FC<ListingProps> = ({ listing }) => {
  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', {
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    });
  };

  const renderUserInfo = () => {
    const { userAttributes } = listing;
    if (!userAttributes) return null;

    return (
      <div className="user-info">
        <div className="user-info-item">
          <span>{userAttributes.email ? '✅' : '❌'}</span>
          <span>Email verfügbar</span>
        </div>
        <div className="user-info-item">
          <span>{userAttributes.phone ? '✅' : '❌'}</span>
          <span>Telefon verfügbar</span>
        </div>
        <div className="user-info-item">
          <span>{userAttributes.verified ? '✅' : '❌'}</span>
          <span>Verifiziert</span>
        </div>
      </div>
    );
  };

  return (
    <div className="card">
      <h2 className="card-title">{listing.title}</h2>
      <p className="card-description">{listing.description}</p>
      <div
        className="card-generated-message"
        dangerouslySetInnerHTML={{ __html: listing.generatedMessage }}
      />
      <p className="card-date">
        <strong>Erstellt am:</strong> {formatDate(listing.createdAt)}
      </p>
      {renderUserInfo()}
      <button className="contact-button">Kontakt aufnehmen</button>
    </div>
  );
};

export default ListingItem;
