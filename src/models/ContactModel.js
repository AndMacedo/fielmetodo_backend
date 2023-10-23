const mailer = require("../helpers/mailer");

const createEmail = (Email, FirstName, LastName, Phone, Notes) => {
  return mailer.sendMail(
    {
      from: "asilvamacedo@gmail.com",
      to: "asilvamacedo@gmail.com",
      subject: "Novo Contacto Fielmetodo",
      text: `De: ${FirstName} ${LastName} <${Email}>
      Contacto: ${Phone?Phone:"Número não fornecido."}
      Mensagem: ${Notes}`,
      html: `<p>De: ${FirstName} ${LastName} &lt;${Email}&gt; <br /> Contacto: ${Phone?Phone:"<i>Número não fornecido.</i>"} <br /> Mensagem: ${Notes}`,
    },
    (err, info) => {
      if (err) console.error(err);
      else console.log(info);
    }
  );
};
module.exports = {
  createEmail,
};
