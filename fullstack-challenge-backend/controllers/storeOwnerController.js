const Store = require("../models/Store");
const Rating = require("../models/Rating");

// Get Store Owner Dashboard Data (User list + Average rating)
exports.getDashboardData = async (req, res) => {
  const storeId = req.user.storeId; // Assuming store ID is stored in the user's JWT

  try {
    // Get store by ID
    const store = await Store.findByPk(storeId, {
      include: {
        model: Rating,
        attributes: ["rating"],
      },
    });

    if (!store) {
      return res.status(404).json({ message: "Store not found" });
    }

    // Calculate average rating
    const ratings = store.Ratings.map((rating) => rating.rating);
    const averageRating =
      ratings.length > 0
        ? ratings.reduce((a, b) => a + b, 0) / ratings.length
        : 0;

    // Get list of users who rated this store
    const usersWhoRated = await Rating.findAll({
      where: { storeId: store.id },
      include: {
        model: User,
        attributes: ["name", "email"],
      },
    });

    res.json({
      store: {
        name: store.name,
        address: store.address,
        averageRating,
      },
      usersWhoRated,
    });
  } catch (err) {
    res.status(500).json({ message: "Server error", error: err.message });
  }
};
