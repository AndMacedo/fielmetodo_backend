const mailer = require('../../mailer');

const createEmail =(Email,FirstName,LastName,Phone,Notes)=>{
return(mailer.sendMail(
    {
      from: "andre.macedo@we-code.pt",
      to: 'asilvamacedo@gmail.com',
      subject: "Novo Contacto Fielmetodo",
      text: `De: ${FirstName} ${LastName} <${Email}>
      Contacto: ${Phone}
      Mensagem: ${Notes}`,
      html: `<p>De: ${FirstName} ${LastName} &lt;${Email}&gt; <br /> Contacto: ${Phone} <br /> Mensagem: ${Notes}`,
    },
    (err, info) => {
      if (err) console.error(err);
      else console.log(info);
    }
  ))
}
module.exports={
    createEmail
}