const mysql = require("mysql2");

const db = mysql.createConnection({
  host: "localhost", // Use your database host here
  user: "root", // Your database user
  password: "root", // Your database password
  database: "demo", // Your database name
});

db.connect((err) => {
  if (err) {
    console.error("Database connection failed:", err.stack);
    return;
  }
  console.log("Connected to the database");
});

module.exports = db;
