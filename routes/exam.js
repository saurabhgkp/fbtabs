const { google } = require("googleapis");
var express = require("express");
var router = express.Router();
var gsheetDb = require("gsheet-to-db");

function org(req, res, next) {
    req.sheetId = "1QHrNg2KOqqXJyqnGf5IuTgvM3qx8AqNJ2EHWo04AOQE";
    req.sheetName = "exam";
    req.auth = new google.auth.GoogleAuth({
        keyFile: "./exam-keys.json",
        scopes: "https://www.googleapis.com/auth/spreadsheets",
    });
    req.googleSheets = google.sheets({
        version: "v4",
        auth: async () => await auth.getClient(),
    });

    next();
}

router.post("/addData", org, gsheetDb.addData);

router.get("/getAllData", org, gsheetDb.getAllData);

// get data by id you have to pass id in query // 'url?id=4'
router.get("/getDataById", org, gsheetDb.getDataById);

// updating data by id you have to pass id in query // 'url?id=4'
router.put("/updateById", org, gsheetDb.updateById);

// delete row data by id you have to pass id in query // 'url?id=4'
router.delete("/deleteById", org, gsheetDb.deleteById);

module.exports = router;