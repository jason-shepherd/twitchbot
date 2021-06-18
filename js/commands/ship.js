
exports.helpText = "Ship two people";

exports.execute = (twitch, command, context, commands) => {
    
    twitch.say(`Ship percentage between ${command.args[0]} and ${command.args[1]} is ${Math.floor(Math.random() * 100)}%`);

    return true;
}
