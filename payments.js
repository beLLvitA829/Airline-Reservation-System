const express = require("express");
const router = express.Router();
const db = require("../db");

// GET all payments
router.get("/", (req, res) => {
    db.query("SELECT * FROM payments", (err, results) => {
        if (err) return res.status(500).json(err);
        res.json(results);
    });
});

// POST a new payment
router.post("/", (req, res) => {
    const { booking_id, amount } = req.body;
    db.query(
        "INSERT INTO payments (booking_id, amount) VALUES (?, ?)",
        [booking_id, amount],
        (err, results) => {
            if (err) return res.status(500).json(err);
            res.status(201).json({ id: results.insertId, message: "Payment recorded successfully" });
        }
    );
});

module.exports = router;
