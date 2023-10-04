const ContactRouter = require("./Contact");

const setUpRoutes = (server) => {
    server.use(ContactRouter);
};

module.exports = {
    setUpRoutes,
}