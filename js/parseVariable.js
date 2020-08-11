module.exports = (string, toParse) => {
    Object.keys(toParse).forEach(key => {
        string = string.replace(`{{${key}}}`, toParse[key]);
    });
    return string;
}
