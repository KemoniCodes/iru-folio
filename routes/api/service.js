const express = require("express");
const router = express.Router();

const Service = require("../../models/Service");

// @route  POST api/services
// @desc   Create Service
// @access Public *no token needed*
router.post("/", async (req, res) => {
  try {
    //Create Service Object
    const newService = new Service({
      title: req.body.title,
      timeline: req.body.timeline,
      investment: req.body.investment,
      description: req.body.description,
      deliverables: req.body.deliverables,
    });
    const service = await newService.save();

    res.json(service);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server Error");
  }
});

// @route  Get api/services
// @desc   Get all Services
// @access Public *no token needed*
router.get("/", async (req, res) => {
  try {
    const services = await Service.find();
    res.json(services);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server Error");
  }
});

// @route  Get api/services/:id
// @desc   Get service by ID
// @access Public *no token needed*
router.get("/:id", async (req, res) => {
  try {
    const service = await Service.findById(req.params.id);

    if (!service) {
      return res.status(404).json({ msg: "Post not found" });
    }

    res.json(service);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server Error");
  }
});

module.exports = router;
