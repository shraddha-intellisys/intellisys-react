const ProjectProposal = require("../models/ProjectProposal");

exports.submitProposal = async (req, res) => {
  try {
    const proposal = new ProjectProposal(req.body);
    await proposal.save();
    res.status(201).json({ message: "✅ Proposal submitted successfully!" });
  } catch (error) {
    console.error("Error saving proposal:", error.message);
    res.status(500).json({ message: "❌ Failed to submit proposal." });
  }
};
