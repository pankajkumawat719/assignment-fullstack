import { useState, useEffect } from "react";
import axios from "axios";

const AdminStoreList = () => {
  const [stores, setStores] = useState([]);

  useEffect(() => {
    const fetchStores = async () => {
      const token = localStorage.getItem("token");
      try {
        const res = await axios.get("http://localhost:5000/api/admin/stores", {
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
      <table className="table-auto w-full border-collapse">
        <thead>
          <tr>
            <th className="border p-2">ID</th>
            <th className="border p-2">Name</th>
            <th className="border p-2">Address</th>
          </tr>
        </thead>
        <tbody>
          {stores.map((store) => (
            <tr key={store.id}>
              <td className="border p-2">{store.id}</td>
              <td className="border p-2">{store.name}</td>
              <td className="border p-2">{store.address}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default AdminStoreList;
