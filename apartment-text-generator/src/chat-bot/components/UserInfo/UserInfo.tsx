import React, { useState } from 'react';
import './UserInfo.css';

interface UserInfoProps {
  initialData: {
    name: string;
    location: string;
    age: number;
  };
  onUpdate: (data: { name: string; location: string; age: number }) => void;
}

const UserInfo: React.FC<UserInfoProps> = ({ initialData, onUpdate }) => {
  const [userData, setUserData] = useState(initialData);
  const [isEditing, setIsEditing] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setUserData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSave = () => {
    onUpdate(userData);
    setIsEditing(false);
  };

  return (
    <div className="user-info">
      {isEditing ? (
        <div className="edit-form">
          <input
            type="text"
            name="name"
            value={userData.name}
            onChange={handleChange}
            placeholder="Name"
          />
          <input
            type="text"
            name="location"
            value={userData.location}
            onChange={handleChange}
            placeholder="Ort"
          />
          <input
            type="number"
            name="age"
            value={userData.age}
            onChange={handleChange}
            placeholder="Alter"
          />
          <button onClick={handleSave}>Speichern</button>
        </div>
      ) : (
        <div className="display-info">
          <p><strong>Name:</strong> {userData.name}</p>
          <p><strong>Ort:</strong> {userData.location}</p>
          <p><strong>Alter:</strong> {userData.age}</p>
          <button onClick={() => setIsEditing(true)}>Bearbeiten</button>
        </div>
      )}
    </div>
  );
};

export default UserInfo;
