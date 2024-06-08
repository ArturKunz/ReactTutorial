import { useState } from "react";

function FavoriteIceCreamForm() {
  const [newFavorite, setNewFavorite] = useState("");
  const [user, setUser] = useState({
    name: "",
    favoriteIceCream: [],
  });

  const favoritesText = `Die Lieblingssorten von ${
    user.name
  } sind ${user.favoriteIceCream.join(", ")}`;

  function handleChangeName(e) {
    const newValue = e.target.value;
    const newUser = {
      ...user,
      name: newValue,
    };
    setUser(newUser);
  }

  function handleChangeFavorite(e) {
    const newValue = e.target.value;
    setNewFavorite(newValue);
  }

  function handleSubmitNewFavorite() {
    const newFavorites = [...user.favoriteIceCream, newFavorite];
    const newUser = {
      ...user,
      favoriteIceCream: newFavorites,
    };
    setUser(newUser);
  }

  return (
    <div>
      <div>
        <p>{favoritesText}</p>
      </div>
      <div>
        <label>Username:</label>
        <input type="text" value={user.name} onChange={handleChangeName} />
        <label>Sorte:</label>
        <input
          type="text"
          value={newFavorite}
          onChange={handleChangeFavorite}
        />
        <button onClick={handleSubmitNewFavorite}>Hinzufügen</button>
      </div>
    </div>
  );
}

export default FavoriteIceCreamForm;
