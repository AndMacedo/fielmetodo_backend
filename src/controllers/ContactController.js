const ContactModel = require("../models/ContactModel")

const EmitContact =(req,res)=> {
  console.log(req, "req")
   const{ Email,FirstName,LastName,Phone,Notes } = req.body
    if (req.body !== undefined) {
      ContactModel.createEmail(Email,FirstName,LastName,Phone,Notes)
      .then(res.status(201).send(res.data))
      .catch((err)=>{ 
        console.error(err);
        res.sendStatus(500)
    })
    } else {
      console.error(res)
    }
  };

module.exports= {
    EmitContact
}