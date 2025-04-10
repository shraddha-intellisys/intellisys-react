const express = require("express");
const cors = require("cors");
const connectDB = require("./config/db");
const projectRoutes = require("./routes/projectRoutes");
const careerRoutes = require("./routes/careerRoutes");
const contactRoutes = require("./routes/contactRoutes");

const app = express();
const PORT = process.env.PORT || 5000;

connectDB(); // MongoDB Connection

app.use(cors());
app.use(express.json());

app.use("/api/project", (req, res, next) => {
    console.log("✅ /api/project route hit");
    next();
  });

app.use("/api/project", projectRoutes); // This is critical!
app.use("/uploads", express.static("uploads"));
app.use("/api/career", careerRoutes);
app.use("/api/contact", contactRoutes);

app.listen(PORT, () => {
  console.log(`🚀 Server running on http://localhost:${PORT}`);
});
