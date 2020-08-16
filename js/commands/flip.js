exports.execute = (twitch, command, args, context, commands) => {
    if(Math.round(Math.random())  == 1) {
        twitch.say("heads"); return;
    } else {      
        twitch.say("tails"); return;
    }

}