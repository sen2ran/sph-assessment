const { instance } = require("../config")
const { detailDummyData, searchDummyData } = require("../assets/dummyData")
const { generateSubPath } = require("../utils/common")
const { generateDetailObj, generateSearchObj } = require("../utils/genarateObjUtils")

const SEARCH_SUBPATH = "/webservice/open-search/solar/{query}/content-search-description.xml"
const DETAIL_SUBPATH = "/webservice/solar/content/{id}"

/**
 * @getSearch
 * Note => Paginated Data would take some time to do from backend and the frontend
 * user req.query.q == "sen2" for dummy data to return
 */
const getSearch = async (req, res) => {
    if (!req.query.q) {
        return res.status(400).send({
            data: [],
            details: "Missing parameter",
        });
    }
    // //Dummy data for FE
    // if (req.query.q == "sen2") {
    //     return res.send({
    //         data: searchDummyData,
    //         details: "Data Retrived successfully",
    //     });
    // }

    try {
        let { data } = await instance.get(generateSubPath(SEARCH_SUBPATH, "{query}", req.query.q));
        const formatedData = generateSearchObj(data)
        res.send({
            data: formatedData,
            details: "Data Retrived successfully",
        });
    } catch (error) {
        return res.status(400).send({
            data: [],
            details: "Something went wrong",
        });
    }
}

const getDetail = async (req, res) => {
    // //Dummy data for FE
    // if (req.params.id == "9999") {
    //     return res.send({
    //         data: detailDummyData,
    //         details: "Data Retrived successfully",
    //     });
    // }
    try {
        let { data } = await instance.get(generateSubPath(DETAIL_SUBPATH, "{id}", req.params.id));
        const formatedData = generateDetailObj(data)
        res.send({
            data: formatedData,
            details: "Data Retrived successfully",
        });

    } catch (error) {
        return res.status(400).send({
            data: [],
            details: "Something went wrong",
        });
    }
}
module.exports = {
    getSearch,
    getDetail,
};
