const fs = require("fs");
const path = require("path");

commandModules = {};
fs.readdirSync("./js/commands").forEach(file => {
    if(path.extname(file) === ".js")
        commandModules[file.slice(0, -3).toLowerCase()] = require(`./commands/${file}`);
});

exports.executesCommand = (twitch, command, context) => {
    if(commandModules.textresponse.isTextResponse(command.command)) 
        commandModules.textresponse.execute(twitch, command, context);
    else if (command.command.startsWith('!')){
        command.command = command.command.replace("!", "");
        if (commandModules[command.command]) {
            commandModules[command.command].execute(twitch, command, context, commandModules);
        }
    }
}
