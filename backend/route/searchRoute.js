const express = require("express");
const axios = require("axios");

const router = express.Router();
const { getSearch, getDetail } = require("../controller/searchController")

router.get("/", getSearch);

/**
 * @getAllDetails
 * Note => Paginated Data would take some time to do from backend and the front end
 */
router.get("/details/:id", getDetail);

/**
 * @testSampleXML
 * For Testing
 */
router.get("/xml", async (req, res) => {
    const retrieveResponse = await axios.get(
        `https://gorest.co.in/public/v1/users.xml`
    );
    var options = {
        compact: true,
        spaces: 4,
        ignoreComment: true,
        alwaysChildren: true,
    };
    var result1 = convert.xml2json(retrieveResponse.data, options);
    res.status(200).send({
        success: true,
        data: JSON.parse(result1).hash.data.datum,
        details: "Data Retrived successfully",
    });
});

module.exports = router;
