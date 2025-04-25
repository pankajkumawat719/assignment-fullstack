import React, { useEffect, useState } from "react";
import axios from "axios";
import RatingForm from "../components/RatingForm";

const StoreList = () => {
  const [stores, setStores] = useState([]);
  const [userRatings, setUserRatings] = useState({});

  useEffect(() => {
    // Fetch the list of stores and their ratings
    const fetchStores = async () => {
      try {
        const response = await axios.get("http://localhost:5000/api/stores", {
          headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
        });
        setStores(response.data);
      } catch (err) {
        console.error("Error fetching stores:", err);
      }
    };

    fetchStores();
  }, []);

  const setUserRating = (storeId, rating) => {
    setUserRatings((prevRatings) => ({
      ...prevRatings,
      [storeId]: rating,
    }));
  };

  return (
    <div>
      <h1>Stores</h1>
      <div className="store-list">
        {stores.map((store) => (
          <div key={store.id} className="store-item">
            <h2>{store.name}</h2>
            <p>{store.address}</p>
            <p>Overall Rating: {store.rating}</p>
            <p>Your Rating: {userRatings[store.id] || "Not Rated"}</p>
            <RatingForm
              storeId={store.id}
              userRating={userRatings[store.id]}
              setUserRating={(rating) => setUserRating(store.id, rating)}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default StoreList;
