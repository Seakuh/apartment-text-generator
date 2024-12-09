import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { getUserIdFromToken } from "../context/authService";
import { useUser } from "../context/UserProvider";
import { useToast } from "../Toast/Toast";
import { fetchUserContext, updateUserField } from "./service";
import "./User.css";

const User: React.FC = () => {
  const { user } = useUser();
  const { addToast } = useToast();
  const [context, setContext] = useState<any>({});
  const [originalContext, setOriginalContext] = useState<any>({});
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();
  const userId = getUserIdFromToken();

  useEffect(() => {
    if (!userId) {
      addToast("Bitte melden Sie sich an.", "warning");
      navigate("/home-finder/login");
      return;
    }

    const loadContext = async () => {
      try {
        const fetchedContext = await fetchUserContext(userId);
        setContext(fetchedContext);
        setOriginalContext(fetchedContext);
      } catch (error) {
        console.error("Fehler beim Laden des Benutzerkontexts:", error);
        addToast("Fehler beim Laden der Daten.", "error");
      } finally {
        setLoading(false);
      }
    };

    loadContext();
  }, [user, navigate, addToast]);

  const handleFieldChange = (field: string, value: any) => {
    setContext((prev) => ({ ...prev, [field]: value }));
  };

  const handleUpdate = async () => {
    if (!user) return;

    const updatedFields = Object.keys(context).reduce((changes, key) => {
      if (context[key] !== originalContext[key]) {
        changes[key] = context[key];
      }
      return changes;
    }, {} as Record<string, any>);

    if (Object.keys(updatedFields).length === 0) {
      addToast("Keine Änderungen vorhanden.", "info");
      return;
    }

    console.log(updatedFields);

    try {
      for (const field in updatedFields) {
        await updateUserField(
          getUserIdFromToken()!,
          field,
          updatedFields[field]
        );
      }
      addToast("Einstellungen erfolgreich aktualisiert!", "success");
      setOriginalContext(context);
    } catch (error) {
      console.error("Fehler beim Aktualisieren:", error);
      addToast("Fehler beim Aktualisieren der Daten.", "error");
    }
  };

  if (loading) return <div>Loading...</div>;

  return (
    <div className="user-container">
      <h1>User Preferences</h1>
      <form className="user-form">
        <label>
          📍 Location:
          <input
            type="text"
            value={context.location || ""}
            onChange={(e) => handleFieldChange("location", e.target.value)}
          />
        </label>
        <label>
          💰 Budget:
          <input
            type="number"
            value={context.budget || ""}
            onChange={(e) =>
              handleFieldChange("budget", Number(e.target.value))
            }
          />
        </label>
        <label>
          🛏️ Bedrooms:
          <input
            type="number"
            value={context.bedrooms || ""}
            onChange={(e) =>
              handleFieldChange("bedrooms", Number(e.target.value))
            }
          />
        </label>
        <label>
          ✨ Features:
          <input
            type="text"
            value={context.features?.join(", ") || ""}
            onChange={(e) =>
              handleFieldChange(
                "features",
                e.target.value.split(",").map((f) => f.trim())
              )
            }
          />
        </label>
        <label>
          🐾 Pets Allowed:
          <input
            type="checkbox"
            checked={context.petsAllowed || false}
            onChange={(e) => handleFieldChange("petsAllowed", e.target.checked)}
          />
        </label>
        <label>
          🛋️ Furnished:
          <input
            type="checkbox"
            checked={context.furnished || false}
            onChange={(e) => handleFieldChange("furnished", e.target.checked)}
          />
        </label>
        <label>
          📅 Earliest Move-In Date:
          <input
            type="date"
            value={context.earliestMoveInDate || ""}
            onChange={(e) =>
              handleFieldChange("earliestMoveInDate", e.target.value)
            }
          />
        </label>
        <label>
          📅 Latest Move-In Date:
          <input
            type="date"
            value={context.latestMoveInDate || ""}
            onChange={(e) =>
              handleFieldChange("latestMoveInDate", e.target.value)
            }
          />
        </label>
        <label>
          🗺️ Districts:
          <input
            type="text"
            value={context.districts?.join(", ") || ""}
            onChange={(e) =>
              handleFieldChange(
                "districts",
                e.target.value.split(",").map((d) => d.trim())
              )
            }
          />
        </label>
        <label>
          🏡 Address:
          <input
            type="text"
            value={context.address || ""}
            onChange={(e) => handleFieldChange("address", e.target.value)}
          />
        </label>
        <label>
          📏 Max Distance (km):
          <input
            type="number"
            value={context.maxDistance || ""}
            onChange={(e) =>
              handleFieldChange("maxDistance", Number(e.target.value))
            }
          />
        </label>
        <label>
          🕒 Recent Listings Since:
          <input
            type="date"
            value={context.recentListingsSince || ""}
            onChange={(e) =>
              handleFieldChange("recentListingsSince", e.target.value)
            }
          />
        </label>
        <label>
          🔄 Swap Offer:
          <input
            type="checkbox"
            checked={context.swapOffer || false}
            onChange={(e) => handleFieldChange("swapOffer", e.target.checked)}
          />
        </label>
        <label>
          🍳 Kitchen Included:
          <input
            type="checkbox"
            checked={context.kitchenIncluded || false}
            onChange={(e) =>
              handleFieldChange("kitchenIncluded", e.target.checked)
            }
          />
        </label>
        <label>
          🏢 Floor:
          <input
            type="text"
            value={context.floor || ""}
            onChange={(e) => handleFieldChange("floor", e.target.value)}
          />
        </label>
        <label>
          ♿ Barrier Free:
          <input
            type="checkbox"
            checked={context.barrierFree || false}
            onChange={(e) => handleFieldChange("barrierFree", e.target.checked)}
          />
        </label>
        <label>
          📸 Has Photos:
          <input
            type="checkbox"
            checked={context.hasPhotos || false}
            onChange={(e) => handleFieldChange("hasPhotos", e.target.checked)}
          />
        </label>
        <label>
          🌱 Garden:
          <input
            type="checkbox"
            checked={context.garden || false}
            onChange={(e) => handleFieldChange("garden", e.target.checked)}
          />
        </label>
        <label>
          🌅 Balcony:
          <input
            type="checkbox"
            checked={context.balcony || false}
            onChange={(e) => handleFieldChange("balcony", e.target.checked)}
          />
        </label>
        <label>
          🎥 Online Viewing:
          <input
            type="checkbox"
            checked={context.onlineViewing || false}
            onChange={(e) =>
              handleFieldChange("onlineViewing", e.target.checked)
            }
          />
        </label>
        <button type="button" onClick={handleUpdate}>
          Update Preferences
        </button>
      </form>
    </div>
  );
};

export default User;
