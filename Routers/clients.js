const express = require("express");
const clientsControllers = require("../Controllers/clients");

const router = express.Router();

router.post("/", clientsControllers.createClients);

router.get("/", clientsControllers.getAllClients);

router.delete("/:id", clientsControllers.deleteClientById);

router.put("/:id", clientsControllers.updateClientById);

module.exports = router;