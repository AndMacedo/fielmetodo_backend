const CaptchaRouter = require("express").Router();
require("dotenv").config();
const axios = require("axios");

CaptchaRouter.post("/verify", async (request, response) => {
  const captchaValue = request.body.captchaValue;
  console.log(request.body.captchaValue)

  const { data } = await axios.post(
    `https://www.google.com/recaptcha/api/siteverify?secret=${process.env.SITE_SECRET}&response=${captchaValue}`
  );

  response.send(data);
});
module.exports = CaptchaRouter;
