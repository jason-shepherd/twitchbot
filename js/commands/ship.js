
exports.helpText = "Ship two people";

exports.execute = (twitch, command, context, commands) => {
    if(command.args[0] == undefined || command.args[1] == undefined ) { return "username missing"; }

    if(command.args[2] == "!") {
        var PersonA = checkForMention(command.args[0]); var PersonB = checkForMention(command.args[1]);
        twitch.say(`Ship percentage between ${command.args[0]} and ${command.args[1]} is ${Math.round(50*(1/(Math.abs(PersonA.length - PersonB.length))) + 50*(1/(Math.abs((PersonA.toLowerCase().charCodeAt(0) - 96) - (PersonB.toLowerCase().charCodeAt(0) - 96)))))}%`);
    } else {
        twitch.say(`Ship percentage between ${command.args[0]} and ${command.args[1]} is ${Math.round(Math.random()*100)}%`);
    }



    return true;
}

function checkForMention(string) {
    if(string.charAt(0) == "@") {
        return string.substring(1);
    } else { return string; }
}