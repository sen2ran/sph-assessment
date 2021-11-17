const generateSubPath = (path, key, val) => {
    return path.replace(key, val)
}
module.exports = {
    generateSubPath: generateSubPath,
};
