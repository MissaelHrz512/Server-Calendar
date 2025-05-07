//CRUD OPERATIONS
const Event = require("../models/Event");

const getEvents = async(req, res) => {
  //Retorna el id y el name del usuario
  const events =await Event.find().populate('user', 'name');
  res.status(200).json({
    ok: true,
    events: events,
  });
};

const createEvent = async (req, res) => {
  try {
    const event = new Event({ ...req.body, user: req.user.uid });
    const userEvent=await event.save();
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

const updateEvent = (req, res) => {
  res.status(200).json({
    ok: true,
    msg: "Update",
    id: req.params.id,
  });
};

const deleteEvent = (req, res) => {
  res.status(200).json({
    ok: true,
    msg: "Delete",
  });
};

module.exports = {
  getEvents,
  createEvent,
  updateEvent,
  deleteEvent,
};
