const fs = require("fs");
const path = require("path");

commandModules = {};
fs.readdirSync("./js/commands").forEach(file => {
    if(path.extname(file) === ".js")
        commandModules[file.slice(0, -3).toLowerCase()] = require(`./commands/${file}`);
});

exports.executesCommand = (twitch, command, args, context) => {
    if(commandModules.textresponse.isTextResponse(command)) {
        command = command.replace("!", "");
        commandModules.textresponse.execute(twitch, command, args, context);
    } else if (commandModules[command])
        commandModules[command].execute(twitch, command, args, context, commandModules);
}
