const dotenv = require("dotenv");
dotenv.config();

const express = require("express");
const connectDB = require("./src/config/db");
const errorHandler = require("./src/middlewares/errorMiddleware");

const app = express();

// Database connection
connectDB();

// Body parser
app.use(express.json());

// Routes
app.use("/api/auth", require("./src/routes/authRoutes"));
app.use("/api/companies", require("./src/routes/companyRoutes"));
app.use("/api/jobs", require("./src/routes/jobRoutes"));
app.use("/api/applications", require("./src/routes/applicationRoutes"));

const cookieParser = require("cookie-parser");
app.use(cookieParser());

// Error handler (always last)
app.use(errorHandler);

// Server start
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
