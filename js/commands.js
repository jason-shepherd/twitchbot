const fs = require("fs");
const path = require("path");

commandModules = {};
fs.readdirSync("./js/commands").forEach(file => {
    if(path.extname(file) === ".js")
        commandModules[file.slice(0, -3).toLowerCase()] = require(`./commands/${file}`);
});

handleCommandError = (err, twitch, command, context) => {
    switch(err) {
        case "invalid_command":
            twitch.say(`${command.command} is not a valid command. Do !help for a list of commands.`);
            break;
        case "failed_api":
            twitch.say(`API call for ${command.command}. Please try again later.`);
            break;
        case "invalid_target":
            twitch.say(`${command.args} is not a valid target for this command. See !help ${command.command} for details.`);
            break;
        case "invalid_parameters":
            twitch.say(`${command.args} is not a valid input for this command. See !help ${command.command} for details.`);
            break;
        case "invalid_permissions":
            twitch.say(`You do not have the permissions to preform this command.`);
   }
}

exports.executesCommand = (twitch, command, context) => {
    if(commandModules.textresponse.isTextResponse(command.command)) 
        commandModules.textresponse.execute(twitch, command, context);
    else if (command.command.startsWith('!')){
        command.command = command.command.replace("!", "");
        if (commandModules[command.command]) {
            error = commandModules[command.command].execute(twitch, command, context, commandModules);
            if(!error)
                handleCommandError(error, twitch, command, context);
        } else {
            handleCommandError("invalid_command", twitch, command);
        }
    }
}
