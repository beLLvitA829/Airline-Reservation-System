const express = require("express");
const router = express.Router();
const db = require("../db");

// GET all bookings
router.get("/", (req, res) => {
    db.query("SELECT * FROM bookings", (err, results) => {
        if (err) return res.status(500).json(err);
        res.json(results);
    });
});

// POST a new booking
router.post("/", (req, res) => {
    const { flight_id, customer_id } = req.body;
    db.query(
        "INSERT INTO bookings (flight_id, customer_id) VALUES (?, ?)",
        [flight_id, customer_id],
        (err, results) => {
            if (err) return res.status(500).json(err);
            res.status(201).json({ id: results.insertId, message: "Booking created successfully" });
        }
    );
});

// DELETE a booking
router.delete("/:id", (req, res) => {
    db.query("DELETE FROM bookings WHERE id=?", [req.params.id], (err, results) => {
        if (err) return res.status(500).json(err);
        res.json({ message: "Booking deleted successfully" });
    });
});

module.exports = router;
