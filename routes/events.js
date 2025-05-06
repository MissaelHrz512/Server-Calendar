//Esto funciona solo si el JWT es valido
/**
 * Rutas de Eventos
 * host + /api/events
 */

const express = require("express");
const {
  getEvents,
  createEvent,
  updateEvent,
  deleteEvent,
} = require("../controllers/events");
const validateJWT = require("../middlewares/validateJWT");
const router = express.Router();

router.use(validateJWT);

router.get("/", getEvents);
router.post("/", createEvent);
router.put("/:id", updateEvent);
router.delete("/:id", deleteEvent);

module.exports = router;
