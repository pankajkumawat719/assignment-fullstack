import { useEffect, useState } from "react";
import api from "../utils/axios";

const Dashboard = () => {
  const [dashboardData, setDashboardData] = useState(null);

  useEffect(() => {
    const fetchDashboardData = async () => {
      try {
        const response = await api.get("/admin/dashboard", {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        });
        setDashboardData(response.data);
      } catch (err) {
        console.error("Error fetching dashboard data:", err);
      }
    };

    fetchDashboardData();
  }, []);

  return (
    <div className="dashboard-container">
      <h2>Admin Dashboard</h2>
      {dashboardData ? (
        <div>
          <p>Total Users: {dashboardData.totalUsers}</p>
          <p>Total Stores: {dashboardData.totalStores}</p>
          <p>Total Ratings: {dashboardData.totalRatings}</p>
        </div>
      ) : (
        <p>Loading dashboard data...</p>
      )}
    </div>
  );
};

export default Dashboard;
