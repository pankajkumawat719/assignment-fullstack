const db = require("../config/db");

// Get list of users (example)
const getUsers = (req, res) => {
  db.query("SELECT * FROM users", (err, results) => {
    if (err) {
      return res.status(500).json({ error: err.message });
    }
    res.json(results);
  });
};

// Get list of stores (example)
const getStores = (req, res) => {
  db.query("SELECT * FROM stores", (err, results) => {
    if (err) {
      return res.status(500).json({ error: err.message });
    }
    res.json(results);
  });
};

module.exports = { getUsers, getStores };
