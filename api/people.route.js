const express = require("express")
const PeopleCtrl = require("./people.controller.js")
const router = express.Router()

router.route("/create").post(PeopleCtrl.apiPostPeople)

module.exports= router;