const express = require("express");
const {
  getNotes,
  getNoteById,
  createNote,
  updateNote,
  deleteNote,
} = require("../controllers/noteController");

const router = express.Router();

// Define routes
router.get("/", getNotes); // Get all notes
router.post("/", createNote); // Create a new note
router.get("/:id", getNoteById); // Get a single note by ID
router.put("/:id", updateNote); // Update a note by ID
router.delete("/:id", deleteNote); // Delete a note by ID

module.exports = router;
