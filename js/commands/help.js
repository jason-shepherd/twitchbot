exports.execute = (twitch, command, args, context, commands) => {
    var helpText = "This bot currently supports the commands: ";
    Object.keys(commands).forEach(key => {
       if(key != "textresponse") {
            helpText += `!${key} `;
       } else {
            Object.keys(commands.textresponse.textResponses).forEach(key => {
                helpText += `!${key} `;
            });
       }
    });
    twitch.say(helpText);
}
