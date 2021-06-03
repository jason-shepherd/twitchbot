exports.helpText = "Flip a coin!";

exports.execute = (twitch, command, context, commands) => {
    if(Math.round(Math.random())  == 1) {
        twitch.say("Heads"); return;
    } else {      
        twitch.say("Tails"); return;
    }
    return true;
}
