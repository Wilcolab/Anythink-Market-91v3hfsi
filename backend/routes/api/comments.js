/**
 * @module routes/api/comments
 * @description Express router for handling comment-related API endpoints.
 */

 /**
    * GET /
    * @summary Retrieve all comments.
    * @description Fetches all comments from the database and populates the 'user' field with the username.
    * @route GET /api/comments
    * @returns {Array<Object>} 200 - An array of comment objects
    * @returns {Object} 500 - Error message if fetching fails
    */

 /**
    * DELETE /:id
    * @summary Delete a comment by ID.
    * @description Deletes a comment from the database based on the provided comment ID.
    * @route DELETE /api/comments/:id
    * @param {string} id.path.required - The ID of the comment to delete
    * @returns {Object} 200 - Success message if deletion is successful
    * @returns {Object} 404 - Error message if comment is not found
    * @returns {Object} 500 - Error message if deletion fails
    */
const router = require("express").Router();
const mongoose = require("mongoose");
const Comment = mongoose.model("Comment");

module.exports = router;

// Hey GitHub Copilot, can you help me implement the create comment functionality?

router.get("/", async (req, res) => {
  try {
    const comments = await Comment.find().populate("user", "username");
    res.status(200).json(comments);
  } catch (error) {
    res.status(500).json({ message: "Error fetching comments", error });
  }
});

// add another endpoint for deleting a comment
router.delete("/:id", (req, res) => {
    const commentId = req.params.id;
    Comment.findByIdAndDelete(commentId, (err, deletedComment) => {
        if (err) {
            return res.status(500).json({ message: "Error deleting comment", error: err });
        }
        if (!deletedComment) {
            return res.status(404).json({ message: "Comment not found" });
        }
        res.status(200).json({ message: "Comment deleted successfully" });
    });
});