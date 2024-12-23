import React from 'react';
import './UserInfoModal.css';

interface UserInfoModalProps {
  isOpen: boolean;
  onClose: () => void;
  userAttributes?: Record<string, any>; // Optional, um undefined zu erlauben
}

const UserInfoModal: React.FC<UserInfoModalProps> = ({ isOpen, onClose, userAttributes = {} }) => {
  // Standardwert: {} verhindert den Fehler
  if (!isOpen) return null;
    console.log('UserAttributes:', userAttributes);
  return (
    <div className="modal-overlay">
      <div className="modal">
        <button className="close-button" onClick={onClose}>
          ×
        </button>
        <h2 className="modal-title">Nutzerinformationen</h2>
        <div className="modal-content">
          {Object.entries(userAttributes)
            .filter(([_, value]) => value !== null && value !== undefined) // Nur gültige Werte anzeigen
            .map(([key, value]) => (
              <div key={key} className="modal-info-item">
                <span className="modal-info-key">{key}:</span>
                <span className="modal-info-value">
                  {typeof value === 'boolean' ? (value ? '✅' : '❌') : value}
                </span>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};

export default UserInfoModal;
