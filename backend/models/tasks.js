const mongoose = require("mongoose");

const tasksSchema = mongoose.Schema(
  {
    title: {
      type: String,
      required: [true, "Please set a default name for the task"],
      trim: true,
    },
    date: {
      type: Date,
      default: Date.now(),
    },
    notes: [],
    status: {
      type: String,
      default: "to-do",
    },
     
    Priority: {
      type: String,
      default: "low",
    },

    userId: {
      type: mongoose.Types.ObjectId,
      required: true,
      ref: "User",
    },
    organizationId: {
      type: mongoose.Types.ObjectId,
      ref: "Organization",
    },

    statusChangedAt: {
      type: Date,
      default: Date.now(),
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Task", tasksSchema);
