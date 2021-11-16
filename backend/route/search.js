const express = require("express");
const path = require('path');
const router = express.Router();

/**
 * @getAllDetails
 * Note => Paginated Data would take some time to do from backend and the front end 
 */
router.get("/", async (req, res) => {
    res.status(200).send({
        success: true,
        data: "temperatureDetails",
        details: "Data Retrived successfully",
    });
});

module.exports = router;