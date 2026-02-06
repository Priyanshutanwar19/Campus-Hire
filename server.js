const dotenv = require("dotenv");
dotenv.config();

const express = require("express");
const connectDB = require("./src/config/db");
const errorHandler = require("./src/middlewares/errorMiddleware");
const cookieParser = require("cookie-parser");
const cors = require("cors");

const app = express();

// Database connection
connectDB();

// Body parser
app.use(express.json());
app.use(cookieParser());
app.use(cors({ origin: process.env.CLIENT_ORIGIN || "http://localhost:5173", credentials: true }));

// Routes
app.use("/api/auth", require("./src/routes/authRoutes"));
app.use("/api/companies", require("./src/routes/companyRoutes"));
app.use("/api/jobs", require("./src/routes/jobRoutes"));
app.use("/api/applications", require("./src/routes/applicationRoutes"));

// Error handler (always last)
app.use(errorHandler);

// Server start
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
