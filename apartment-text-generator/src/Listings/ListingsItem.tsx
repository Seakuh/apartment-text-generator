import React, { useState } from 'react';
import './ListingsItem.css';
import UserInfoModal from './UserInfoModal';

interface ListingProps {
  listing: {
    id: number;
    title: string;
    description: string;
    generatedMessage: string;
    createdAt: string;
    userAttributes: Record<string, any>;
  };
}

const ListingItem: React.FC<ListingProps> = ({ listing }) => {
  const [isModalOpen, setModalOpen] = useState(true);
  console.log('userAttributes:', listing);

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', {
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    });
  };

  const handleModalOpen = () => setModalOpen(true);
  const handleModalClose = () => setModalOpen(false);

  return (
    <div className="listing-card">
      <h2 className="listing-card-title">{listing.title}</h2>
      <div
        className="listing-card-generated-message"
        dangerouslySetInnerHTML={{ __html: listing.generatedMessage }}
      />
      <p className="listing-card-date">
        <strong>Erstellt am:</strong> {formatDate(listing.createdAt)}
      </p>
      <div className="listing-card-buttons">
        <button className="contact-button">Kontakt aufnehmen</button>
        <button className="user-info-button" onClick={handleModalOpen}>
          Nutzerinfo
        </button>
      </div>
      {/* <UserInfoModal
        isOpen={isModalOpen}
        onClose={handleModalClose}
        userAttributes={listing}
      /> */}
    </div>
  );
};

export default ListingItem;
