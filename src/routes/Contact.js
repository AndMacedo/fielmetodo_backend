const ContactRouter = require("express").Router();
const ContactController = require("../controllers/ContactController");
/* const createEmail = require("../models/ContactModel") */

ContactRouter.post("/sendemail", ContactController.EmitContact);

module.exports = ContactRouter;
