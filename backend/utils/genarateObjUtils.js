const convert = require("xml-js");

const generateDetailObj = (data) => {
    const result = convert.xml2json(data, { compact: true, spaces: 4 });
    const author = JSON.parse(result).entry.author.name._text;
    const title = JSON.parse(result).entry.title._text;
    const content =
        JSON.parse(result).entry.content["vdf:payload"]["vdf:field"][1]["vdf:value"]
            .div.p._text;
    const edited = JSON.parse(result).entry["app:edited"]._text;
    const created = JSON.parse(result).entry["dcterms:created"]._text;

    return {
        author,
        title,
        content,
        edited,
        created,
    };
};

const generateSearchObj = (data) => {
    const result = convert.xml2json(data, { compact: true, spaces: 4 });
    return result.map((item) => {
        return {
            title: item.ShortDescription._text,
            id: item.Developer._text,
        }
    })
};

module.exports = {
    generateDetailObj,
    generateSearchObj
};
