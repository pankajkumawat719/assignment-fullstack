const Rating = require("../models/Rating");
const User = require("../models/User");
const Store = require("../models/Store");

// Submit a rating
exports.submitRating = async (req, res) => {
  const { storeId, rating } = req.body;
  const userId = req.user.id; // Assuming the user is authenticated and their ID is in the token

  if (rating < 1 || rating > 5) {
    return res.status(400).json({ message: "Rating must be between 1 and 5" });
  }

  try {
    const existingRating = await Rating.findOne({ where: { userId, storeId } });

    if (existingRating) {
      // If a rating already exists, update it
      existingRating.rating = rating;
      await existingRating.save();
      return res.status(200).json({ message: "Rating updated successfully" });
    }

    // If no rating exists, create a new one
    await Rating.create({ userId, storeId, rating });
    res.status(201).json({ message: "Rating submitted successfully" });
  } catch (err) {
    res.status(500).json({ message: "Server error", error: err.message });
  }
};

// Get all stores with ratings
exports.getAllStoresWithRatings = async (req, res) => {
  try {
    const stores = await Store.findAll({
      include: {
        model: Rating,
        attributes: ["rating"],
        include: {
          model: User,
          attributes: ["name"],
        },
      },
    });

    const storesWithRatings = stores.map((store) => {
      const ratings = store.Ratings.map((rating) => rating.rating);
      const averageRating =
        ratings.length > 0
          ? ratings.reduce((a, b) => a + b, 0) / ratings.length
          : 0;

      return {
        storeName: store.name,
        address: store.address,
        averageRating,
        ratings: store.Ratings,
      };
    });

    res.json(storesWithRatings);
  } catch (err) {
    res.status(500).json({ message: "Server error", error: err.message });
  }
};
