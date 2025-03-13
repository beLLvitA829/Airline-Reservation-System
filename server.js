const express = require("express");
const dotenv = require("dotenv");
dotenv.config();

const app = express();
app.use(express.json());

// Import Routes
const flightsRoutes = require("./routes/flights");
const bookingsRoutes = require("./routes/bookings");
const customersRoutes = require("./routes/customers");
const paymentsRoutes = require("./routes/payments");

// Use Routes
app.use("/flights", flightsRoutes);
app.use("/bookings", bookingsRoutes);
app.use("/customers", customersRoutes);
app.use("/payments", paymentsRoutes);

// Start Server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`✅ Server running on port ${PORT}`);
});
