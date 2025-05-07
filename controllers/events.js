//CRUD OPERATIONS
const Event = require("../models/Event");

const getEvents = async (req, res) => {
  //Retorna el id y el name del usuario
  const events = await Event.find().populate("user", "name");
  res.status(200).json({
    ok: true,
    events: events,
  });
};

const createEvent = async (req, res) => {
  try {
    const event = new Event({ ...req.body, user: req.user.uid });
    const userEvent = await event.save();
    return res.status(200).json({
      ok: true,
      msg: "Created",
      event: userEvent,
    });
  } catch (error) {
    return res.status(500).json({
      ok: false,
      msg: "Call Admin",
    });
  }
};

const updateEvent = async (req, res) => {
  try {
    const userID = req.user.uid;
    const eventID = req.params.id;
    const event = await Event.findById(eventID);
    if (!event) {
      return res.status(404).json({ ok: false, msg: "Event does not exist" });
    }

    if (event.user.toString() !== userID) {
      return res.status(401).json({ ok: false, msg: "Not authorized" });
    }

    const newInfo = {
      ...req.body,
      user: userID,
    };

    const updatedEvent = await Event.findByIdAndUpdate(eventID, newInfo);

    res.status(200).json({
      ok: true,
      msg: "Updated!",
    });
  } catch (error) {
    return res.status(500).json({
      ok: false,
      msg: "Call Admin",
    });
  }
};

const deleteEvent = async (req, res) => {
  try {
    const userID = req.user.uid;
    const eventID = req.params.id;

    const event = await Event.findById(eventID);

    if (!event) {
      return res.status(404).json({ ok: false, msg: "Event not found" });
    }

    if (event.user.toString() !== userID) {
      return res.status(401).json({ ok: false, msg: "Not authorized" });
    }

    await Event.findByIdAndDelete(eventID);

    res.status(200).json({
      ok: true,
      msg: "Deleted!",
    });
  } catch (error) {
    console.error("Error:", error);
    res.status(500).json({
      ok: false,
      msg: "Call Admin",
    });
  }
};

module.exports = {
  getEvents,
  createEvent,
  updateEvent,
  deleteEvent,
};
