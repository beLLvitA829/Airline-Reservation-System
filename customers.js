const express = require("express");
const router = express.Router();
const db = require("../db");

// GET all customers
router.get("/", (req, res) => {
    db.query("SELECT * FROM customers", (err, results) => {
        if (err) return res.status(500).json(err);
        res.json(results);
    });
});

// POST a new customer
router.post("/", (req, res) => {
    const { name, email, phone } = req.body;
    db.query(
        "INSERT INTO customers (name, email, phone) VALUES (?, ?, ?)",
        [name, email, phone],
        (err, results) => {
            if (err) return res.status(500).json(err);
            res.status(201).json({ id: results.insertId, message: "Customer added successfully" });
        }
    );
});

module.exports = router;
