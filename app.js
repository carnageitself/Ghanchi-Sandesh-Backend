const express = require("express");
const errorMiddleware = require("./middleware/error.js");
const userRoutes = require("./routes/UserRoutes.js");
const familyRoutes= require("./routes/FamilyRoutes.js");
const homeRoutes = require("./routes/HomeRoutes.js");
const marriageProfileRoutes = require("./routes/MarriageRoutes.js");
const parivarikNirdikshikaRoutes = require("./routes/ParivarikNirdikshikaRoutes.js");
const SagayiSapan = require("./routes/SagayiSanpanRoutes.js");
const SamajKiSansthaye = require("./routes/SamajKiSansthayeRoutes.js");
const SamajKiSeva = require("./routes/SamajKiSevaRoutes.js");
const SamajKaGaurav = require("./routes/SamajKeGauravRoutes");


const cookieparser = require("cookie-parser");

const app = express();

app.use(express.json());
app.use(cookieparser());

app.use(express.urlencoded({ extended: false }));
app.use(express.static("public"));
// Set up middleware
app.use("/api/v1", userRoutes);
app.use("/api/v1", familyRoutes);
app.use("/api/v1", marriageProfileRoutes);
app.use("/api/v1", SagayiSapan);
app.use("/api/v1", SamajKiSansthaye);
app.use("/api/v1", parivarikNirdikshikaRoutes);
app.use("/api/v1", SamajKiSeva);
app.use("/api/v1", SamajKaGaurav);


// app.use("/api/v1", homeRoutes);

app.use(errorMiddleware);
module.exports = app;


