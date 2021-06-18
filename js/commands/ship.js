
exports.helpText = "Ship two people";

exports.execute = (twitch, command, context, commands) => {
    if(command.args[0] == undefined || command.args[1] == undefined ) { return "username missing"; }

    if(command.args[2] == "!") {
        var PersonA = checkForMention(command.args[0]); var PersonB = checkForMention(command.args[1]);
        //this can return infinity and also persona.length - personb.length can be 0 and then 1/0 * 50 = not poggers 
        //but "i wouldnt care as long as it works" 
        //somebody should probably make this not bad
        //could just be a random number but "you teased the big brain formula now follow thru"
        twitch.say(`Ship percentage between ${command.args[0]} and ${command.args[1]} is ${Math.round(50*(1/(Math.abs(PersonA.length - PersonB.length))) + 25*(1/(Math.abs((PersonA.toLowerCase().charCodeAt(0) - 96) - (PersonB.toLowerCase().charCodeAt(0) - 96)))))+25}%`);
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