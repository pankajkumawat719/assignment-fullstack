import { Routes, Route } from "react-router-dom";
import AdminDashboard from "../pages/AdminDashboard";
import AdminUserList from "../pages/AdminUserList";
import AdminStoreList from "../pages/AdminStoreList";
import AdminRatingList from "../pages/AdminRatingList";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import ProtectedRoute from "../components/ProtectedRoute";

const AdminRoutes = () => {
  return (
    <>
      <Navbar />
      <div className="min-h-screen bg-gray-100 p-4">
        <Routes>
          <Route
            path="/admin/dashboard"
            element={
              <ProtectedRoute>
                <AdminDashboard />
              </ProtectedRoute>
            }
          />
          <Route
            path="/admin/users"
            element={
              <ProtectedRoute>
                <AdminUserList />
              </ProtectedRoute>
            }
          />
          <Route
            path="/admin/stores"
            element={
              <ProtectedRoute>
                <AdminStoreList />
              </ProtectedRoute>
            }
          />
          <Route
            path="/admin/ratings"
            element={
              <ProtectedRoute>
                <AdminRatingList />
              </ProtectedRoute>
            }
          />
        </Routes>
      </div>
      <Footer />
    </>
  );
};

export default AdminRoutes;
