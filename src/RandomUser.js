import React, { useEffect, useState } from "react";
const RandomUser = () => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    fetchUser();
  }, []);

  const fetchUser = async () => {
    const response = await fetch("https://randomuser.me/api");
    const data = await response.json();
    setUser(data.results[0]);
  };

  const handleGenerate = () => {
    fetchUser();
  };

  return (
    <div>
      {user && (
        <div>
          <img
            className="user-image"
            src={user.picture.large}
            alt={user.name.first}
          />
          <p className="user-name">
            {user.name.title} {user.name.first} {user.name.last}
          </p>
          <p className="user-email">{user.email}</p>
          <p className="user-address">
            {user.location.street.number} {user.location.street.name}
          </p>

          <p className="user-address">
            {user.location.city}, {user.location.state} {user.location.postcode}
          </p>
          <p className="user-phone">{user.phone}</p>

          <button className="button" onClick={handleGenerate}>
            Generate
          </button>
        </div>
      )}
    </div>
  );
};

export default RandomUser;
