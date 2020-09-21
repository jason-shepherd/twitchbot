const config = require("./config.json");
const twitch = require("./js/twitch")(config);
const parser = require("./js/parseCommand");
const commands = require("./js/commands");

const prefix = "!";

twitch.onmessage((channel, context, msg, self) => {
    if(self) return;
    let command = parser(msg, prefix);
    commands.executesCommand(twitch, command, context);
});
