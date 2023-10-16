const ContactModel = require("../models/ContactModel.js");

const EmitContact = async(req, res) => {
  const { Email, FirstName, LastName, Phone, Notes } = req.body;
  if (req.body !== undefined) {      
      await ContactModel.createEmail(Email, FirstName, LastName, Phone, Notes)
      res.sendStatus(200)    
    } else {
      console.error(res);
    }
};

module.exports = {
  EmitContact,
};
