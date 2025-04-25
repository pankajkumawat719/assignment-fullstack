import { useState, useEffect } from "react";
import axios from "axios";

const AdminDashboard = () => {
  const [dashboardData, setDashboardData] = useState({
    totalUsers: 0,
    totalStores: 0,
    totalRatings: 0,
  });

  useEffect(() => {
    const fetchDashboardData = async () => {
      const token = localStorage.getItem("token");
      const role = localStorage.getItem("role");

      if (role === "admin") {
        try {
          const res = await axios.get(
            "http://localhost:5000/api/admin/dashboard",
            {
              headers: {
                Authorization: `Bearer ${token}`,
              },
            }
          );
          setDashboardData(res.data);
        } catch (err) {
          console.error("Error fetching admin dashboard data", err);
        }
      }
    };

    fetchDashboardData();
  }, []);

  return (
    <div className="max-w-4xl mx-auto mt-10">
      <h1 className="text-3xl mb-6">Admin Dashboard</h1>
      <div className="grid grid-cols-3 gap-4">
        <div className="bg-blue-500 text-white p-4 rounded shadow">
          <h2 className="text-xl">Total Users</h2>
          <p>{dashboardData.totalUsers}</p>
        </div>
        <div className="bg-green-500 text-white p-4 rounded shadow">
          <h2 className="text-xl">Total Stores</h2>
          <p>{dashboardData.totalStores}</p>
        </div>
        <div className="bg-yellow-500 text-white p-4 rounded shadow">
          <h2 className="text-xl">Total Ratings</h2>
          <p>{dashboardData.totalRatings}</p>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
