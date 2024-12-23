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
  console.log('userAttributes:', listing.createdAt);

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
      <div className="card-buttons">
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
