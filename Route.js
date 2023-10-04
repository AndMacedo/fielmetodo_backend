const mailjet = require('node-mailjet').connect(process.env.MAILJET_PUBLIC_KEY, process.env.MAILJET_PRIVATE_KEY);
post(request, response) {
    const i18n = require('../i18n/' + (request.body.locale || 'en'));
    const send = mailjet.post('send');
    const requestObject = { Messages:[{
        From: {
            Email: 'hello@allma.si',
            Name: 'Ferenc Almasi'
        },
        To: [{
            Email: request.body.email
        }],
        Subject: i18n.passwordResetMailSubject,
        HTMLPart: passwordResetTemplate(i18n)
    }]};
    send.request(requestObject).then(() => {
        response.json({
            success: true
        });
    }).catch((err) => {
        console.log(err);

        response.json({
            error: err.statusCode
        });
    });
}