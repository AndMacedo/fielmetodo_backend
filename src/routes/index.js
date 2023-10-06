const ContactRouter = require("./Contact");
const CaptchaRouter = require("./Captcha");

const setUpRoutes = (server) => {
  server.use(ContactRouter);
  server.use(CaptchaRouter);
};

module.exports = {
  setUpRoutes,
};
