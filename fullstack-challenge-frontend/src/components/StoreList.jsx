import { useState, useEffect } from "react";
import axios from "axios";

const StoreList = () => {
  const [stores, setStores] = useState([]);

  useEffect(() => {
    const fetchStores = async () => {
      const token = localStorage.getItem("token");

      try {
        const res = await axios.get("http://localhost:5000/api/stores", {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        setStores(res.data);
      } catch (err) {
        console.error("Error fetching stores", err);
      }
    };

    fetchStores();
  }, []);

  return (
    <div className="max-w-4xl mx-auto mt-10">
      <h1 className="text-3xl mb-6">Store List</h1>
      <div className="space-y-4">
        {stores.map((store) => (
          <div key={store.id} className="p-4 border border-gray-300 rounded">
            <h2 className="text-xl font-bold">{store.name}</h2>
            <p>{store.address}</p>
            <p>Rating: {store.rating}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default StoreList;
