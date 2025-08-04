const mongoose = require("mongoose");

// Define the Note schema
const noteSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: [true, "Title is required"], // Add a custom error message for clarity
      trim: true, // Automatically trims whitespace
    },
    content: {
      type: String,
      required: [true, "Content is required"], // Add a custom error message
      trim: true,
    },
  },
  {
    timestamps: true, // Automatically adds createdAt and updatedAt fields
  }
);

// Export the Note model
module.exports = mongoose.model("Note", noteSchema);
