const mongoose = require("mongoose");

const courseSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      default: null,
    },
    topics: [
            {
              topicName: {
                type: String,
                required: true,
              },
              problems: [
                {
                  type: mongoose.Schema.Types.ObjectId,
                  ref: "Problem",
                },
              ],
              docs: [
                {
                  type: mongoose.Schema.Types.ObjectId,
                  ref: "Document",
                },
              ],
            },
          ],
    createdAt: {
      type: Date,
      default: Date.now,
    },
  },
  { timestamps: true }
);

const Course = mongoose.model("Course", courseSchema);

module.exports = Course;
