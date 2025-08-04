const Note = require("../models/Note"); // Ensure the path matches your file structure

// Get all notes
const getNotes = async (req, res) => {
  try {
    const notes = await Note.find();
    res.status(200).json(notes);
  } catch (error) {
    res.status(500).json({ message: "Failed to fetch notes." });
  }
};

// Get a single note by ID
const getNoteById = async (req, res) => {
  try {
    const note = await Note.findById(req.params.id);
    if (!note) {
      return res.status(404).json({ message: "Note not found." });
    }
    res.status(200).json(note);
  } catch (error) {
    res.status(500).json({ message: "Failed to fetch the note." });
  }
};

// Create a new note
const createNote = async (req, res) => {
  const { title, content } = req.body;
  try {
    const newNote = new Note({
      title,
      content,
    });
    const savedNote = await newNote.save();
    res.status(201).json(savedNote);
  } catch (error) {
    res.status(400).json({ message: "Failed to create the note." });
  }
};

// Update a note by ID
const updateNote = async (req, res) => {
  const { title, content } = req.body;
  try {
    const updatedNote = await Note.findByIdAndUpdate(
      req.params.id,
      { title, content },
      { new: true } // Return the updated note
    );
    if (!updatedNote) {
      return res.status(404).json({ message: "Note not found." });
    }
    res.status(200).json(updatedNote);
  } catch (error) {
    res.status(400).json({ message: "Failed to update the note." });
  }
};

// Delete a note by ID
const deleteNote = async (req, res) => {
  try {
    const deletedNote = await Note.findByIdAndDelete(req.params.id);
    if (!deletedNote) {
      return res.status(404).json({ message: "Note not found." });
    }
    res.status(200).json({ message: "Note deleted successfully." });
  } catch (error) {
    res.status(500).json({ message: "Failed to delete the note." });
  }
};

// Export functions
module.exports = {
  getNotes,
  getNoteById,
  createNote,
  updateNote,
  deleteNote,
};
