const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ServiceSchema = new Schema({
  title: {
    type: String,
    required: true,
  },
  timeline: {
    type: String,
    required: true,
  },
  investment: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  deliverables: [
    {
      type: String,
      required: true,
    },
  ],
});

module.exports = Service = mongoose.model("service", ServiceSchema);
