const CareerApplication = require("../models/CareerApplication");

exports.submitApplication = async (req, res) => {
  try {
    const data = {
      ...req.body,
      cvFileName: req.file?.filename || "",
    };

    const application = new CareerApplication(data);
    await application.save();

    res.status(201).json({ message: "✅ Application submitted successfully!" });
  } catch (error) {
    console.error("Error saving application:", error.message);
    res.status(500).json({ message: "❌ Failed to submit application." });
  }
};
