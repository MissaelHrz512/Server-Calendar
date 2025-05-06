//CRUD OPERATIONS

const getEvents = (req, res) => {
  res.status(200).json({
    ok: true,
    msg: "Events",
  });
};

const createEvent = (req, res) => {
  res.status(200).json({
    ok: true,
    msg: "Create",
  });
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