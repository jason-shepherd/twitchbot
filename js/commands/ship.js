
exports.helpText = "Ship two people";

exports.execute = (twitch, command, context, commands) => {
    if(commands.args[0] == undefined || commands.args[1] == undefined ) { return "username missing"; }
    var PersonA = checkForMention(commands.args[0]); var PersonB = checkForMention(Perscommands.args[1]);

    1/(Math.abs(PersonA.length - PersonB.length))
    
    

    twitch.say(`Ship percentage between ${command.args[0]} and ${command.args[1]} is ${Math.floor(Math.random() * 100)}%`);

    return true;
}

function checkForMention(string) {
    if(string.charAt(0) == "@") {
        return string.substring(1);
    } else { return string; }
}