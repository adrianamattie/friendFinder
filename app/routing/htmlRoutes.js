

var path = require("path");

module.exports = (app) => {

    app.get("/home", (req, response) => {
        response.sendFile(path.join(__dirname, "../public/home.html"));
    });

    app.get("/survey", (req, response) => {
        response.sendFile(path.join(__dirname, "../public/survey.html"));
    });

    app.get("*", (req, response) => {
        response.sendFile(path.join(__dirname, "../public/home.html"));
    });

};