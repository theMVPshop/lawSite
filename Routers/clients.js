const express = require("express");
const router = express.Router();
const clientsControllers = require("../Controllers/clients");


router.post("/", clientsControllers.createClients);

router.get("/", clientsControllers.getAllClients);

router.delete("/:id", clientsControllers.deleteClientById);

router.put("/:id", clientsControllers.updateClientById);

module.exports = router;