const time = 60; //seconds
exports.execute = (twitch, command, args, context, commands) => { 
    twitch.timeout(context.username, time, "Commited seppuku").then((data) => {
        twitch.say(`${context.username} has committed seppuku. It was an honorable death.`);
    }).catch((err) => {twitch.say(err)});
}
