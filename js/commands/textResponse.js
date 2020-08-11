const responses = require("./textResponses.json");

exports.isTextResponse = (command) => {
    return !!responses[command];
}

exports.execute = (twitch, command, args) => {
    twitch.say(responses[command]);
}
