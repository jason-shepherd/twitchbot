const responses = require("./textResponses.json");
const stringParser = require("../parseVariable");

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
