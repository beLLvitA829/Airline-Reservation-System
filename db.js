const mysql = require("mysql2");
require("dotenv").config();

// Create a connection to MySQL
const db = mysql.createPool({
    host: process.env.DB_HOST || "localhost",
    user: process.env.DB_USER || "nzuki",
    password: process.env.DB_PASS || "Bryther@2001",
    database: process.env.DB_NAME || "airline_db",
    waitForConnections: true,
    connectionLimit: 10,
    queueLimit: 0
});

db.getConnection((err, connection) => {
    if (err) {
        console.error("Database connection failed:", err);
        return;
    }
    console.log("✅ Connected to MySQL Database");
    connection.release();
});

module.exports = db;
