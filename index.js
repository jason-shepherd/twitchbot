const config = require("./config.json");
const twitch = require("./js/twitch")(config);
const parser = require("./js/parseCommand");
const commands = require("./js/commands");

const prefix = "!";

twitch.onmessage((channel, context, msg, self) => {
    if(self) return;
    if(msg[0] === prefix) {
        let command = parser(msg, prefix);
        commands.executesCommand(twitch, command.command, command.args, context);
    }
});
