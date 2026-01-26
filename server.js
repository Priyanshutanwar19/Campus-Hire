const express = require("express");
const dotenv = require("dotenv");
const connectDB = require("./src/config/db");

dotenv.config();
connectDB();

const app = express();
app.use(express.json());

app.use("/api/auth", require("./src/routes/authRoutes"));
app.use("/api/companies", require("./src/routes/companyRoutes"));
app.use("/api/jobs", require("./src/routes/jobRoutes"));
app.use("/api/applications", require("./src/routes/applicationRoutes"));

app.listen(process.env.PORT, () => {
  console.log(`Server running on port ${process.env.PORT}`);
});
