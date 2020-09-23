const responses = require("./textResponses.json");
const stringParser = require("../parseVariable");

exports.helpText = "HEY! You weren't supposed to do that...";

exports.isTextResponse = (command) => {
    return !!responses[command];
}

exports.execute = (twitch, command, context) => {
    let response = responses[command.command];
    let toParse = {
        user: context.username,
        args: command.args
    };
    response = stringParser(response, toParse);
    twitch.say(response);
}

exports.textResponses = responses;
