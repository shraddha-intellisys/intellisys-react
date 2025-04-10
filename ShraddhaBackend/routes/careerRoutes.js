const express = require("express");
const router = express.Router();
const multer = require("multer");
const { submitApplication } = require("../controllers/careerController");

// Configure Multer for CV upload
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "uploads/");
  },
  filename: (req, file, cb) => {
    const uniqueSuffix = Date.now() + "-" + file.originalname;
    cb(null, uniqueSuffix);
  },
});
const upload = multer({ storage });

router.post("/", upload.single("cv"), submitApplication);

module.exports = router;
