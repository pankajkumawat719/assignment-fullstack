const { validationResult } = require("express-validator");
const Store = require("../models/Store");

exports.addStore = async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty())
    return res.status(400).json({ errors: errors.array() });

  const { name, email, address } = req.body;

  try {
    const existing = await Store.findOne({ where: { email } });
    if (existing)
      return res.status(400).json({ message: "Store email already exists" });

    const store = await Store.create({ name, email, address });
    res.status(201).json({ message: "Store created", store });
  } catch (err) {
    res.status(500).json({ message: "Server error", error: err.message });
  }
};

exports.getAllStores = async (req, res) => {
  try {
    const stores = await Store.findAll();
    res.json(stores);
  } catch (err) {
    res.status(500).json({ message: "Server error", error: err.message });
  }
};
