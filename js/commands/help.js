exports.helpText = "Really. Asking for help on a help command. smh my head. :(";

exports.execute = (twitch, command, context, commands) => {
    
    for(i=0; i<command.args.length; i++) {
        command.args[i] = command.args[i].toLowerCase();
    }

    if(command.args.length > 0) {
        if(!commands.textresponse.isTextResponse(command.args[0]) && !!commands[command.args[0]])
            twitch.say(commands[command.args[0]].helpText);
        else
            twitch.say("Basic text commands don't have help info. Guess you are just gonna have to do the command to find out what it is!");
    }
    else if(command.args.length <= 0) {
        let helpText = "This bot currently supports the commands: ";
        Object.keys(commands).forEach(key => {
           if(key != "textresponse") {
                helpText += `!${key} `;
           } else {
                Object.keys(commands.textresponse.textResponses).forEach(key => {
                    helpText += `${key} `;
                });
           }
        });
        twitch.say(helpText + " For more info on a command do !help <command>");
    } else {
        return "invalid_parameters";
    }
    return true;
}
